class Button {
    constructor(text, x, y, width, height, cooldownTime) {
        this.text = text;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.onClickCallback = null;
        this.cooldownTime = cooldownTime || 1; // in seconds
        this.cooldownRemaining = 0; // in seconds
        this.cooldownInterval = null;
    }

    onClick(callback) {
        this.onClickCallback = callback;
    }

    draw(ctx) {
        // Draw the button rectangle
        ctx.fillStyle = "blue";
        ctx.fillRect(this.x, this.y, this.width, this.height);

        // Draw the button text
        ctx.fillStyle = "white";
        ctx.font = "20px Arial";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(this.text, this.x + this.width / 2, this.y + this.height / 2);
    }

    handleMouseClick(event) {
        const mouseX = event.clientX - canvas.getBoundingClientRect().left;
        const mouseY = event.clientY - canvas.getBoundingClientRect().top;

        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            if (this.cooldownRemaining <= 0 && this.onClickCallback) {
                console.log(this.cooldownRemaining)
                this.onClickCallback(event);
            }
        }
    }
}