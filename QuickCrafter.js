class QuickCrafter {
    constructor(canvas, ctx, x, y, inventory) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.x = x;
        this.y = y;
        this.grid = [];
        this.progresses = [];
        this.slotSize = 50;
        this.dragging = false;
        this.dragOffsetX = 0;
        this.dragOffsetY = 0;

        this.inventory = inventory;


        // Add event listener for mouse events
        canvas.addEventListener('mousedown', this.handleMouseDown.bind(this));
        canvas.addEventListener('mouseup', this.handleMouseUp.bind(this));
        canvas.addEventListener('mousemove', this.handleMouseMove.bind(this));
    }


    // Method to add an item to the grid
    addItem(item, recipe, inventory, complete = false) {
        item.addAttribute("recipe", recipe)
        console.log("adding item")
        if (complete) {
            // Check if the item is already in the grid
            for (let i = 0; i < this.grid.length; i++) {
                const _item = this.grid[i];
                if (item == _item) {
                    return;
                }
            }

            // Check if the item is already in the grid
            if (!this.grid.includes(item)) {
                // If the item is not in the grid, add it and sort the grid by crafting recipe index
                this.grid.push(item);
                this.sort(inventory);
            }
            return;
        }
        for (let i = 0; i < this.progresses.length; i++) {
            const progressedItem = this.progresses[i];
            if (progressedItem[0] == item.name) {
                progressedItem[1]++;
                if (progressedItem[1] >= 0) {
                    this.addItem(item, recipe, inventory, true);
                }
                return;
            }
        }
        this.progresses.push([item.name, 1]);
        this.addItem(item, recipe, inventory, true);
    }

    sort(inventory) {
        // Sort the grid by crafting recipe index
        this.grid.sort((a, b) => {
            const indexA = inventory.getCraftingRecipeIndex(a); // Replace 'getCraftingRecipeIndex' with the actual method to get the crafting recipe index from the inventory object
            const indexB = inventory.getCraftingRecipeIndex(b); // Replace 'getCraftingRecipeIndex' with the actual method to get the crafting recipe index from the inventory object
            return indexA - indexB;
        });
    }

    // Method to draw the quick crafter menu
    async draw() {
        // Draw the menu background
        this.ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
        this.ctx.fillRect(this.x, this.y, 220, 300);

        // Draw the draggable bar
        this.ctx.fillStyle = "rgba(50, 50, 50, 0.7)";
        this.ctx.fillRect(this.x, this.y, 220, 30);

        // Draw the grid items
        let xOffset = 0;
        let yOffset = 0;
        for (let i = 0; i < this.grid.length; i++) {
            const item = this.grid[i];
            if (item != null) {
                this.drawItem(item, this.x + xOffset + 5, this.y + yOffset + 30, 48)

                // Move to the next slot position
                xOffset += 55; // Assuming each slot is 50x50
                if (xOffset >= 220) {
                    xOffset = 0;
                    yOffset += 50;
                }
            }
        }
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

    handleMouseDown(event) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        // Check if mouse is inside the draggable bar
        if (mouseX >= this.x && mouseX <= this.x + 220 && mouseY >= this.y && mouseY <= this.y + 30) {
            this.dragging = true;
            this.dragOffsetX = this.x - mouseX;
            this.dragOffsetY = this.y - mouseY;
        } else if (mouseX >= this.x && mouseX <= this.x + 220 && mouseY >= this.y && mouseY <= this.y + 300) {
            // Calculate grid coordinates based on mouse position
            const gridX = Math.floor((mouseX - this.x) / this.slotSize);
            const gridY = Math.floor((mouseY - 30 - this.y) / this.slotSize);

            // Calculate the index of the selected item in the grid
            const itemIndex = gridY * 4 + gridX;

            // Retrieve the item from the grid based on the calculated index
            const selectedItem = this.grid[itemIndex];
            console.log(selectedItem)

            // Check if the selected item has a recipe attribute
            if (selectedItem && selectedItem.attributes && selectedItem.attributes.recipe) {
                const recipe = selectedItem.attributes.recipe;

                // Check if the inventory has the required items for the recipe
                if (this.inventory.hasIngredients(recipe)) {
                    // Remove ingredients from the inventory
                    //this.inventory.removeIngredients(recipe);

                    // Remove recipe attribute from the item being given to the user
                    // delete selectedItem.attributes.recipe;

                    // Give the user the requested item
                    this.inventory.addItem(selectedItem);
                } else {
                    console.log("Insufficient ingredients!");
                }
            }
        }
    }


    handleMouseUp() {
        this.dragging = false;
    }

    handleMouseMove(event) {
        if (this.dragging) {
            const mouseX = event.clientX - canvas.getBoundingClientRect().left;
            const mouseY = event.clientY - canvas.getBoundingClientRect().top;

            // Update the window position based on mouse movement and drag offset
            this.x = mouseX + this.dragOffsetX;
            this.y = mouseY + this.dragOffsetY;
        }
    }
}