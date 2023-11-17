let mouseX;
let mouseY;

class Inventory {
    constructor(canvas, ctx, numSlots) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.ctx.imageSmoothingEnabled = false;
        this.ctx.mozImageSmoothingEnabled = false;
        this.ctx.webkitImageSmoothingEnabled = false;
        this.numSlots = numSlots;
        this.cGrid = 5;
        this.baseSlots = numSlots;
        this.slots = new Array((this.baseSlots + this.cGrid * this.cGrid)).fill(null); // Initialize slots with null items
        this.draggedItem = null;
        this.craftingRecipes = [];

        this.popupVisible = false;
        this.popupItem = null;
        this.popupItemOutline = new Image()
        this.popupItemOutline.src = "Resources/Zephyratrix-Popup-Outline-Item.png";

        this.slotData = new Slots(40);
        this.cGridOffsetX = (this.canvas.width - this.slotData.width * 5) / 2;
        this.cGridOffsetY = (this.canvas.height - this.slotData.width * 5) / 2;

        this.invSlotWidth = 9;

        this.quickCrafter = new QuickCrafter(this.canvas, this.ctx, 50, 50, this);
    }

    addItem(_item) {
        console.log(_item);
        const item = new Item(_item.textureSources, _item.name, _item.description);
        item.attributes = Object.assign({}, _item.attributes); // Create a new object to avoid modifying the original attributes
        delete item.attributes.recipe;
        const emptySlotIndex = this.slots.indexOf(null);
        const func = item.getAttribute("function");
        if (func) {
            switch (func.split("-")[0]) {
                case "gather":
                    item.onDoubleClick(() => {
                        item.addAttribute("durability", item.getAttribute("durability") - 1);
                        for (let i = 0; i < func.split("-")[1].split(",").length; i++) {
                            const elem = func.split("-")[1].split(",")[i].split(":");
                            if (Math.random() <= elem[1] / 100) {
                                inventory.addItem(Items[elem[0]]);
                            }
                        }
                    });
                    break;

                default:
                    break;
            }
        }
        if (emptySlotIndex !== -1) {
            this.slots[emptySlotIndex] = item;
        }
        this.checkInventory();
        console.log(_item);
        return item;
    }

    removeItem(index) {
        this.slots[index] = null;
    }

    handleMouseDown(event) {
        mouseX = event.clientX - this.canvas.getBoundingClientRect().left;
        mouseY = event.clientY - this.canvas.getBoundingClientRect().top;
        const cSlotX = Math.floor((mouseX - this.cGridOffsetX) / this.slotData.width);
        const cSlotY = Math.floor((mouseY - this.cGridOffsetY) / this.slotData.width);

        for (let i = 0; i < this.numSlots; i++) {
            const slotX = (i % this.invSlotWidth) * this.slotData.width;
            const slotY = Math.floor(i / this.invSlotWidth) * this.slotData.width;
            if ((
                    mouseX >= slotX && mouseX < slotX + this.slotData.width &&
                    mouseY >= slotY && mouseY < slotY + this.slotData.width &&
                    this.slots[i]
                ) || (
                    cSlotX >= 0 &&
                    cSlotY >= 0 &&
                    cSlotX <= this.cGrid - 1 &&
                    cSlotY <= this.cGrid - 1
                )) {
                let I = i;
                if (cSlotX >= 0 &&
                    cSlotY >= 0) {
                    I = this.numSlots + cSlotX + cSlotY * this.cGrid;
                }

                if (event.ctrlKey) {
                    this.removeItem(I);
                    this.checkInventory();
                    return;
                }
                let selectedItem = this.slots[I];
                this.showItemPopup(selectedItem);

                if (!this.draggedItem) {
                    this.draggedItem = selectedItem;
                }
                this.slots[I] = null; // Remove the item from the current slot

                // Add event listeners for mousemove and mouseup to handle dragging
                const handleMouseMove = (moveEvent) => {
                    mouseX = moveEvent.clientX - this.canvas.getBoundingClientRect().left;
                    mouseY = moveEvent.clientY - this.canvas.getBoundingClientRect().top;
                    if (selectedItem) {
                        selectedItem.handleDrag();
                        selectedItem.x = mouseX - this.slotData.width / 2; // Offset to center the item under the cursor
                        selectedItem.y = mouseY - this.slotData.width / 2;
                    }
                    this.checkInventory();
                };

                // Add event listeners for mousemove and mouseup to handle dragging
                const handleDoubleClick = (moveEvent) => {
                    document.removeEventListener('dblclick', handleDoubleClick);
                    selectedItem.handleDoubleClick();
                };

                // const originalX = selectedItem.x;
                // const originalY = selectedItem.y;

                const handleMouseUp = (upEvent) => {
                    document.removeEventListener('mousemove', handleMouseMove);
                    document.removeEventListener('mouseup', handleMouseUp);

                    this.draggedItem = null;

                    // Check if the item is dropped inside another slot
                    const dropIndex = this.calculateDropIndex(upEvent.clientX, upEvent.clientY);
                    if (dropIndex !== -1 || dropIndex > this.slots.length) {
                        this.slots[I] = this.slots[dropIndex];
                        this.slots[dropIndex] = selectedItem; // Drop the item into the new slot
                    } else {
                        // If dropped outside the inventory, reset item position to its original spot
                        this.slots[I] = selectedItem;
                    }

                    this.checkInventory();
                    this.checkCrafting();
                    this.checkInventory();

                    this.draw(); // Redraw inventory to update the dropped item
                };

                document.addEventListener('mousemove', handleMouseMove);
                document.addEventListener('mouseup', handleMouseUp);
                document.addEventListener('dblclick', handleDoubleClick);
                break;
            } else {
                this.hideItemPopup();
            }
            this.draggedItem = null;
        }
    }

    calculateDropIndex(mouseX, mouseY) {
        const x = mouseX - this.canvas.getBoundingClientRect().left;
        const y = mouseY - this.canvas.getBoundingClientRect().top;

        let dropColumn = Math.floor(x / this.slotData.width);
        let dropRow = Math.floor(y / this.slotData.width);

        // Calculate the index in the slots array based on column and row
        let dropIndex = dropRow * this.invSlotWidth + dropColumn;

        // Ensure the drop index is within the bounds of the inventory
        if (dropColumn < this.invSlotWidth) {
            if (dropIndex >= 0 && dropIndex < this.numSlots) {
                return dropIndex;
            } else {
                return -1;
            }
        } else {
            dropColumn = Math.floor((x - this.cGridOffsetX) / this.slotData.width);
            dropRow = Math.floor((y - this.cGridOffsetY) / this.slotData.width);
            dropIndex = dropRow * 5 + dropColumn;
            if (dropColumn < 5) {
                if (dropIndex >= 0 && dropIndex < 25) {
                    return dropIndex + this.numSlots;
                } else {
                    return -1;
                }
            }
        }
        return -1;
    }

    getCraftingRecipeIndex(item) {
        // Assume craftingRecipes is an array of crafting recipe objects in your inventory
        for (let i = 0; i < this.craftingRecipes.length; i++) {
            if (this.craftingRecipes[i].item === item) {
                return i; // Return the index of the crafting recipe in the array
            }
        }
        return -1; // Return -1 if the item's crafting recipe is not found
    }

    hasIngredients(ingredientList) {
        // We first check for ingredients then remove them, the code looks the same, but it has to be this was for it to work properly

        // Check for required ingredients
        for (const ingredient of ingredientList) {
            const [itemName, itemQuantity] = ingredient;

            // Check if the inventory has the required item and correct quantity
            let foundQuantity = 0;
            for (let i = 0; i < this.slots.length; i++) {
                const slot = this.slots[i];
                if (slot && slot.name === itemName) {
                    // If the item is found, increment the found quantity
                    foundQuantity++;
                    // If enough items are found, break out of the loop
                    if (foundQuantity >= itemQuantity) {
                        break;
                    }
                }
            }

            // If required quantity is not found, return false
            if (foundQuantity < itemQuantity) {
                return false;
            }
        }

        // Remove said ingredients
        for (const ingredient of ingredientList) {
            const [itemName, itemQuantity] = ingredient;

            // Check if the inventory has the required item and correct quantity
            let foundQuantity = 0;
            for (let i = 0; i < this.slots.length; i++) {
                const slot = this.slots[i];
                if (slot && slot.name === itemName) {
                    // If the item is found, increment the found quantity
                    foundQuantity++;
                    this.slots[i] = null;
                    // If enough items are found, break out of the loop
                    if (foundQuantity >= itemQuantity) {
                        break;
                    }
                }
            }

            // If required quantity is not found, return false
            if (foundQuantity < itemQuantity) {
                return false;
            }
        }

        // All required items and quantities were found and removed from inventory
        return true;
    }


    async draw() {
        for (let i = 0; i < this.numSlots; i++) {
            const x = (i % this.invSlotWidth) * this.slotData.width; // Calculate x position based on slot index
            const y = Math.floor(i / this.invSlotWidth) * this.slotData.width; // Calculate y position based on slot index
            this.ctx.strokeRect(x, y, this.slotData.width, this.slotData.width);

            const item = this.slots[i];
            if (item) {
                // Draw overlapping textures for the item onto the off-screen canvas
                if (item.getAttribute("durability") <= 0) {
                    this.slots[i] = null;
                    continue;
                }
                this.drawItem(item, x, y, this.slotData.width);
            }
        }

        for (let i = 0; i < 25; i++) {
            const x = (i % 5) * this.slotData.width + this.cGridOffsetX; // Calculate x position based on slot index
            const y = Math.floor(i / 5) * this.slotData.width + this.cGridOffsetY; // Calculate y position based on slot index
            this.ctx.strokeRect(x, y, this.slotData.width, this.slotData.width);

            const item = this.slots[i + this.numSlots];
            if (item) {
                // Draw overlapping textures for the item onto the off-screen canvas
                this.drawItem(item, x, y, this.slotData.width);
            }
        }

        if (this.draggedItem) {
            this.drawItem(this.draggedItem, mouseX - 20, mouseY - 20, 40);
        }
        this.quickCrafter.draw();
    }

    drawItem(item, x, y, size) {
        item.textures.forEach(([texture, color]) => {
            // Draw the image onto the canvas
            this.ctx.drawImage(texture, x, y, size, size);

            // Create a temporary canvas to use the texture as a mask
            const tempCanvas = document.createElement('canvas');
            const tempCtx = tempCanvas.getContext('2d');
            tempCanvas.width = size;
            tempCanvas.height = size;

            // Draw the texture onto the temporary canvas
            tempCtx.drawImage(texture, 0, 0, size, size);

            // Apply the tint color using globalCompositeOperation 'source-in'
            tempCtx.globalCompositeOperation = 'source-in';
            tempCtx.fillStyle = color;
            tempCtx.fillRect(0, 0, size, size);

            // Draw the tinted texture back onto the main canvas
            this.ctx.drawImage(tempCanvas, x, y, size, size);
        });
        if (this.popupVisible && this.popupItem == item) {
            this.drawItemPopup(this.ctx);
        }
    }

    showItemPopup(item) {
        this.popupItem = item;
        this.popupVisible = true;
    }

    hideItemPopup() {
        this.popupVisible = false;
        this.popupItem = null;
    }

    drawItemPopup(ctx) {
        if (this.popupVisible && this.popupItem) {
            const popupWidth = 200;
            const popupHeight = 150;
            const popupX = mouseX + 10;
            const popupY = mouseY - popupHeight - 10;

            // Draw background
            ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
            ctx.fillRect(popupX, popupY, popupWidth + Math.max(this.popupItem.description.length * 5, this.popupItem.name.length * 7.5), popupHeight);

            // Draw item image
            ctx.drawImage(this.popupItemOutline, popupX + 10, popupY + 10, 64, 64);

            const item = new Item(this.popupItem.textureSources, this.popupItem.name, this.popupItem.description);
            item.attributes = Object.assign({}, this.popupItem.attributes);
            item.addAttribute('Display', true);
            this.drawItem(item, popupX + 10, popupY + 10, 64);

            // Draw item description & name
            ctx.font = '24px Arial';
            ctx.fillStyle = 'white';
            ctx.textAlign = "left"; // Align text to the left
            ctx.textBaseline = "top"; // Align text to the top
            ctx.fillText(this.popupItem.name, popupX + 100, popupY + 30);

            ctx.font = '14px Arial';
            ctx.fillText(this.popupItem.description, popupX + 100, popupY + 75);

            // Draw item attributes
            const attributes = this.popupItem.attributes;
            let offsetY = 95;
            for (const attribute in attributes) {
                ctx.fillText(`${attribute}: ${attributes[attribute]}`, popupX + 100, popupY + offsetY);
                offsetY += 20;
            }
        }
    }

    checkCrafting() {
        let attemptedRecipe = [];
        // Get attempted recipe
        for (let i = this.checkInventory(); i < this.slots.length; i++) {
            const item = this.slots[i];
            if (item) {
                attemptedRecipe.push(item.name);
            } else {
                attemptedRecipe.push(null)
            }
        }
        // Check attempted recipe with the recipe list
        for (let i = 0; i < this.craftingRecipes.length; i++) {
            const recipe = this.craftingRecipes[i];
            if (this.arraysAreEqual(attemptedRecipe, recipe.pattern)) {
                for (let i = this.numSlots; i < this.slots.length; i++) {
                    this.slots[i] = null;
                }
                console.log(this.addItem(recipe.result))
                this.quickCrafter.addItem(recipe.result, this.extractIngredients(recipe.pattern), inventory);
                return true;
            }
        }
        return false;
    }

    extractIngredients(recipeGrid) {
        console.log(recipeGrid)
        const ingredients = {};

        for (let i = 0; i < recipeGrid.length; i++) {
            const ingredient = recipeGrid[i];
            if (ingredient !== null) {
                if (ingredients.hasOwnProperty(ingredient)) {
                    ingredients[ingredient]++;
                } else {
                    ingredients[ingredient] = 1;
                }
            }
        }

        // Convert the ingredients object into an array of [ingredient, quantity] pairs
        const baseIngredients = Object.entries(ingredients).map(([ingredient, quantity]) => [ingredient, quantity]);

        return baseIngredients;
    }

    checkInventory() {
        let inventorySize = this.baseSlots;
        let num = 0;
        for (let i = 0; i < this.slots.length - this.cGrid * this.cGrid; i++) {
            const item = this.slots[i];
            // Check if the item is not null or undefined before accessing its attributes
            if (item && item.getAttribute('inventorySpace') != null) {
                inventorySize += item.getAttribute('inventorySpace');
                num++;
                if (num > 4) {
                    return inventorySize;
                }
            }
        }
        this.numSlots = inventorySize;
        this.slots.length = this.numSlots + this.cGrid * this.cGrid;
        return inventorySize;
    }


    arraysAreEqual(array1, array2) {
        if (array1.length !== array2.length) {
            return false;
        }
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== array2[i]) {
                return false;
            }
        }
        return true;
    }

    addRecipe(pattern, result) {
        this.craftingRecipes.push({
            pattern: pattern,
            result: result
        });
    }

    // Add other methods for managing items in the inventory if needed.
}