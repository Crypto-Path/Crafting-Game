const Items = {
    Mushroom: CreateItem([
        ['Resources/Material-Mushroom-Head.png', 'rgba( 101, 67, 33, 0.5)'],
        ['Resources/Material-Mushroom-Body.png', 'rgba( 188, 158, 130, 0.5)']
    ], 'Mushroom', 'A simple material for assembling other materials and consumables', [
        ['type', 'material']
    ]),
    Stick: CreateItem([
        ['Resources/Material-Stick.png', 'rgba( 161, 102, 47, 0.5)']
    ], 'Stick', 'A simple material for assembling components or other materials', [
        ['type', 'material']
    ]),
    Pebble: CreateItem([
        ['Resources/Material-Pebble.png', 'rgba( 136, 140, 141, 0.5)']
    ], 'Pebble', 'A simple material for assembling other materials', [
        ['type', 'material']
    ]),
    Flax: CreateItem([
        ['Resources/Material-Flax-Flowers.png', 'rgba( 175, 175, 200, 0.5)'],
        ['Resources/Material-Flax-Shafts.png', 'rgba( 124, 252, 0, 0.5)'],
        ['Resources/Material-Flax-Wrap.png', 'rgba( 161, 102, 47, 0.5)']
    ], 'Flax', 'A simple material for assembling other materials', [
        ['type', 'material']
    ]),
    Twine: CreateItem([
        ['Resources/Material-Twine.png', 'rgba( 161, 102, 47, 0.5)']
    ], 'Twine', 'A simple material for assembling equipment, component and other materials', [
        ['type', 'material']
    ]),
    Herb: CreateItem([
        ['Resources/Material-Herb.png', 'rgba( 124, 252, 0, 0.5)']
    ], 'Herb', 'A simple material for other materials and consumable', [
        ['type', 'material']
    ]),
    Rock: CreateItem([
        ['Resources/Material-Rock.png', 'rgba( 136, 136, 136, 0.5)']
    ], 'Rock', 'A basic rock suitable for crafting simple tools and weapons', [
        ['type', 'material']
    ]),
    Branch: CreateItem([
        ['Resources/Material-Branch.png', 'rgba( 139, 69, 19, 0.5)']
    ], 'Branch', 'A sturdy branch that can be used for crafting basic tools and structures', [
        ['type', 'material']
    ]),
    Feather: CreateItem([
        ['Resources/Material-Feather.png', 'rgba( 255, 255, 0, 0.5)']
    ], 'Feather', 'A lightweight feather useful for crafting fletched arrows and lightweight accessories', [
        ['type', 'material']
    ]),
    Leaf: CreateItem([
        ['Resources/Material-Leaf.png', 'rgba( 0, 128, 0, 0.5)']
    ], 'Leaf', 'A large leaf that can be used for crafting lightweight armor and temporary shelters', [
        ['type', 'material']
    ]),
    Vine: CreateItem([
        ['Resources/Material-Vine.png', 'rgba( 34, 139, 34, 0.5)']
    ], 'Vine', 'A flexible vine suitable for crafting ropes, traps, and basic tools', [
        ['type', 'material']
    ]),
    Shell: CreateItem([
        ['Resources/Material-Shell.png', 'rgba( 255, 218, 185, 0.5)']
    ], 'Shell', 'A durable shell from a small creature, useful for crafting containers and basic armor', [
        ['type', 'material']
    ]),
    Moss: CreateItem([
        ['Resources/Material-Moss.png', 'rgba( 0, 128, 0, 0.5)']
    ], 'Moss', 'A patch of soft moss that can be used for insulation, healing poultices, and makeshift bandages', [
        ['type', 'material']
    ]),
    Acorn: CreateItem([
        ['Resources/Material-Acorn-Head.png', 'rgba( 66, 33, 33, 0.5)'],
        ['Resources/Material-Acorn-Body.png', 'rgba( 196, 164, 132, 0.5)']
    ], 'Acorn', 'A small nut that can be planted to grow trees, also edible in times of need', [
        ['type', 'material']
    ]),
    BeetleShell: CreateItem([
        ['Resources/Material-BeetleShell.png', 'rgba( 205, 92, 92, 0.5)']
    ], 'Beetle Shell', 'A tough shell from a forest beetle, suitable for crafting basic armor and shields', [
        ['type', 'material']
    ]),
    Fibroin: CreateItem([
        ['Resources/Material-Fibroin.png', 'rgba( 205, 92, 92, 0.5)']
    ], 'Fibroin', 'Luxurious, fine fiber produced by silkworms, used for clothing and decorations.', [
        ['type', 'material']
    ]),
    Flint: CreateItem([
        ['Resources/Material-Flint.png', 'rgba( 127, 127, 127, 0.5)']
    ], 'Flint', 'Hard, sedimentary rock used for creating sparks and starting fires.', [
        ['type', 'material']
    ]),
}

const Xivcs = {
    Essence: CreateItem([
        ['Resources/Magic-Essence.png', 'rgba( 127, 127, 255, 0.5)']
    ], 'Essence', 'The fundamental building block of magic, as small as it can get.', [
        ['type', 'magic']
    ])
}

function CreateItem(resources, name, desc, attributes) {
    const item = new Item(resources, name, desc);

    attributes.forEach(([key, value]) => {
        item.addAttribute(key, value);
    });

    return item;
}