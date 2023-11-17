class Item {
    constructor(textures, name, description) {
        this.textureSources = textures;
        this.textures = []; // URL or image object for the item's texture
        for (let i = 0; i < textures.length; i++) {
            const element = textures[i];
            let img = new Image()
            img.src = element[0];
            this.textures.push([img, element[1]])
        }
        this.name = name; // Name of the item
        this.description = description; // Description of the item
        this.attributes = {}; // Object to store attributes

        // Event handlers
        this.onClickCallback = null;
        this.onDoubleClickCallback = null;
    }

    // Method to add attribute to the item
    addAttribute(attributeName, value) {
        this.attributes[attributeName] = value;
    }

    // Method to remove attribute from the item
    removeAttribute(attributeName) {
        if (this.attributes.hasOwnProperty(attributeName)) {
            delete this.attributes[attributeName];
        }
    }

    // Method to get attribute value of the item
    getAttribute(attributeName) {
        return this.attributes[attributeName];
    }

    onClick(Callback) {
        this.onClickCallback = Callback;
    }

    // Method to handle item click event
    handleClick() {
        if (this.onClick) {
            this.onClick(this);
        }
    }

    onClick(Callback) {
        this.onClickCallback = Callback;
    }

    // Method to handle item double click event
    handleDoubleClick(event) {
        if (this.onDoubleClickCallback) {
            this.onDoubleClickCallback(event);
        }
    }

    onDoubleClick(Callback) {
        this.onDoubleClickCallback = Callback;
    }

    // Method to handle item drag event
    handleDrag() {
        if (this.onDrag) {
            this.onDrag(this);
        }
    }

    // Method to handle item next to event
    handleNextTo(item) {
        if (this.onNextTo) {
            this.onNextTo(this, item);
        }
    }
}