const canvas = document.getElementById('gameCanvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const ctx = canvas.getContext('2d');
ctx.imageSmoothingEnabled = false;

let buttons = []
const items = [
    [Items.Mushroom, 5],
    [Items.Stick, 50],
    [Items.Flax, 100],
    [Items.Pebble, 30],
    [Items.Branch, 1],
    [Items.Acorn, 3],
    [Items.Flint, 1],
];

CreateButton("Forage", canvas.width - 120, (canvas.height - 20) / 2, 100, 40).onClick(() => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (Math.random() <= item[1] / 100) {
            inventory.addItem(item[0]);
        }

    }
});
// CreateButton("Focus", canvas.width - 120, (canvas.height + 100) / 2, 100, 40).onClick(() => {
//     inventory.addItem(Xivcs["Essence"]);
// });

const inventory = new Inventory(canvas, ctx, 9 * 3);

canvas.addEventListener('mousedown', (event) => {
    inventory.handleMouseDown(event);
});

canvas.addEventListener("click", (event) => {
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.handleMouseClick(event);
    }
});

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    inventory.draw();
    for (let i = 0; i < buttons.length; i++) {
        const button = buttons[i];
        button.draw(ctx)
    }
    requestAnimationFrame(draw);
}

function CreateButton(text, x, y, width, height) {
    const button = new Button(text, x, y, width, height);
    buttons.push(button);
    return button;
}

draw();