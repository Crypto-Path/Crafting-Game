// Twine
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Flax", null, null,
    null, null, "Flax", null, null,
    null, null, "Flax", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Material-Twine.png', 'rgba( 161, 102, 47, 0.5)']
], 'Twine', 'A basic material for assembling equipment and components', [
    ['type', 'material'],
    ['CID', 1]
]));

// Linen
inventory.addRecipe([
    null, null, null, null, null,
    null, "Twine", "Twine", "Twine", null,
    null, "Twine", "Twine", "Twine", null,
    null, "Twine", "Twine", "Twine", null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Material-Linen.png', 'rgba( 161, 102, 47, 0.5)']
], 'Linen', 'A basic material for assembling light armor and items', [
    ['type', 'material']
]));

// Pouch
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Twine", null, null,
    null, "Twine", "Linen", "Twine", null,
    null, null, "Twine", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Accessory-Pouch.png', 'rgba( 161, 102, 47, 0.5)']
], 'Pouch', 'A basic baggy used for containing a few more items', [
    ['type', 'accessory'],
    ['inventorySpace', 3]
]));

// Refined Fibroin
inventory.addRecipe([
    null, null, null, null, null,
    null, "Fibroin", "Fibroin", "Fibroin", null,
    null, "Fibroin", "Fibroin", "Fibroin", null,
    null, "Fibroin", "Fibroin", "Fibroin", null,
    null, null, null, null, null,
], CreateItem([
    ['Resources/Material-Fibroin-Refined.png', 'rgba( 245, 245, 220, 0.5)']
], 'Refined Fibroin', 'A purified and processed form of fibroin, ready for further refinement into silk', [
    ['type', 'material']
]));

// Silk
inventory.addRecipe([
    "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin",
    "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin",
    "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin",
    "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin",
    "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin", "Refined Fibroin"
], CreateItem([
    ['Resources/Material-Silk.png', 'rgba( 255, 255, 255, 0.5)']
], 'Silk', 'A fine and delicate fabric produced from refined fibroin, often used for luxurious garments and items', [
    ['type', 'material']
]));

// Silk-Cotton Blend Cloth
inventory.addRecipe([
    null, null, null, null, null,
    null, "Silk", "Silk", "Silk", null,
    null, "Cotton", "Cotton", "Cotton", null,
    null, "Silk", "Silk", "Silk", null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Cloth-SilkCotton.png', 'rgba( 255, 255, 255, 0.5)']
], 'Silk-Cotton Blend Cloth', 'A soft and breathable fabric made from a blend of silk and cotton fibers', [
    ['type', 'material']
]));

// Rope
inventory.addRecipe([
    null, "Twine", "Twine", "Twine", null,
    null, "Twine", "Twine", "Twine", null,
    null, "Twine", "Twine", "Twine", null,
    null, "Twine", "Twine", "Twine", null,
    null, "Twine", "Twine", "Twine", null,
], CreateItem([
    ['Resources/Material-Rope.png', 'rgba( 139, 69, 19, 0.5)']
], 'Rope', 'Strong and versatile cordage made from twisted fibers or plant material', [
    ['type', 'material']
]));

// Sharp Pebble
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Pebble", null, null,
    null, null, "Pebble", null, null,
    null, null, null, null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Material-Pebble-Sharp.png', 'rgba( 111, 117, 126, 0.5)']
], 'Sharp Pebble', 'A simple tool useful for gathering resources', [
    ['type', 'tool'],
    ['durability', 1],
    ['function', 'gather-Flax:100,Flax:50,Flax:25,Twine:10']
]));

// Stick Staff
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Sharp Pebble", null, null,
    null, null, "Stick", null, null,
    null, null, null, null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Material-Staff-Stick.png', 'rgba( 161, 102, 47, 0.5)']
], 'Stick Staff', 'A basic weapon for defense and assembling components', [
    ['type', 'tool'],
    ['durability', 16]
]));

// Bone Dagger
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Bone Dagger Blade", null, null,
    null, "Twine", "Bone Dagger Hilt", "Twine", null,
    null, null, "Bone Dagger Handle", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Dagger-Blade.png', 'rgba( 255, 255, 255, 0.5)'],
    ['Resources/Dagger-Handle.png', 'rgba( 255, 255, 255, 0.5)'],
    ['Resources/Dagger-Hilt.png', 'rgba( 255, 255, 255, 0.5)']
], 'Bone Dagger', 'A sharp dagger crafted from animal bone', [
    ['damage', 4],
    ['type', 'weapon']
]));

// Wooden Longsword Handle
inventory.addRecipe([
    null, null, null, null, null,
    null, null, null, null, null,
    null, "Twine", "Stick Staff", "Twine", null,
    null, null, null, null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Longsword-Handle.png', 'rgba( 161, 102, 47, 0.5)']
], 'Wooden Longsword Handle', 'A component for assembling swords', [
    ['type', 'component']
]));

// Wooden Longsword Hilt
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Twine", null, null,
    null, null, "Stick Staff", null, null,
    null, null, "Twine", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Longsword-Hilt.png', 'rgba( 161, 102, 47, 0.5)']
], 'Wooden Longsword Hilt', 'A component for assembling swords', [
    ['type', 'component']
]));

// Wooden Longsword Blade
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Stick Staff", null, null,
    null, "Twine", "Stick Staff", "Twine", null,
    null, null, "Stick Staff", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Longsword-Blade.png', 'rgba( 161, 102, 47, 0.5)']
], 'Wooden Longsword Blade', 'A component for assembling swords', [
    ['type', 'component']
]));

// Wooden Longsword
inventory.addRecipe([
    null, null, "Wooden Longsword Blade", null, null,
    null, null, "Twine", null, null,
    null, "Twine", "Wooden Longsword Hilt", "Twine", null,
    null, null, "Twine", null, null,
    null, "Twine", "Wooden Longsword Handle", "Twine", null
], CreateItem([
    ['Resources/Longsword-Blade.png', 'rgba( 161, 102, 47, 0.5)'],
    ['Resources/Longsword-Handle.png', 'rgba( 161, 102, 47, 0.5)'],
    ['Resources/Longsword-Hilt.png', 'rgba( 161, 102, 47, 0.5)']
], 'Wooden Longsword', 'A basic weapon for training', [
    ['damage', 3],
    ['type', 'weapon']
]));

// Sling Shot
inventory.addRecipe([
    null, null, null, null, null,
    null, "Stick", "Strong Twine", "Stick", null,
    null, "Twine", "Stick", "Twine", null,
    null, null, null, null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Consumable-Healing-Poultice.png', 'rgba( 255, 0, 0, 0.5)']
], 'Healing Poultice', 'A herbal poultice for minor wound healing', [
    ['damage', 1],
    ['type', 'weapon'],
    ['consumes', 'Acorn']
]))

// Healing Poultrice
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Herb", null, null,
    null, "Herb", "Herb", "Herb", null,
    null, null, "Herb", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Consumable-Healing-Poultice.png', 'rgba( 255, 0, 0, 0.5)']
], 'Healing Poultice', 'A herbal poultice for minor wound healing', [
    ['healing', 20],
    ['type', 'consumable']
]));

// Acorn Bait
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Sharp Pebble", null, null,
    null, null, "Acorn", null, null,
    null, null, null, null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Consumable-Bait-Acorn.png', 'rgba( 196, 164, 132, 0.5)']
], 'Acorn Bait', 'Basic bait for fishing and trapping', [
    ['bait power', 1],
    ['type', 'consumable']
]));

// Linen Patch
inventory.addRecipe([
    null, null, null, null, null,
    null, "Twine", "Linen", "Twine", null,
    null, "Linen", "Linen", "Linen", null,
    null, "Twine", "Linen", "Twine", null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Material-Linen-Patch.png', 'rgba( 100, 149, 237, 0.5)']
], 'Linen Patch', 'Light armor woven from sturdy linen', [
    ['type', 'material']
]));

// Strong Twine
inventory.addRecipe([
    null, null, null, null, null,
    null, null, "Twine", null, null,
    null, null, "Twine", null, null,
    null, null, "Twine", null, null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Material-Twine-Strong.png', 'rgba( 161, 102, 47, 0.5)']
], 'Strong Twine', 'A reinforced version of twine for advanced crafting', [
    ['type', 'material']
]));

// Linen Tunic
inventory.addRecipe([
    null, null, null, null, null,
    null, "Strong Twine", "Strong Twine", "Strong Twine", null,
    null, "Linen Patch", "Linen Patch", "Twine", "Linen Patch",
    null, "Twine", "Linen Patch", "Twine", null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Armor-Tunic-Linen.png', 'rgba( 255, 165, 0, 0.5)']
], 'Linen Tunic', 'Sturdy armor crafted from strong twine and linen', [
    ['armor', 3],
    ['type', 'armor']
]));

// Silk Scarf
inventory.addRecipe([
    null, null, null, null, null,
    null, "Silk", "Silk", "Silk", null,
    "Silk", "Silk", "Silk", "Silk", "Silk",
    null, "Silk", "Silk", "Silk", null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Scarf-Silk.png', 'rgba( 255, 255, 255, 0.5)']
], 'Silk Scarf', 'A light and elegant scarf made from silk, adds a touch of sophistication to any outfit', [
    ['type', 'accessory'],
    ['magic production', 0.5]
]));

// Silk Gloves
inventory.addRecipe([
    null, null, null, null, null,
    null, "Silk", "Silk", "Silk", null,
    null, "Silk", "Silk", "Silk", null,
    null, "Silk", null, "Silk", null,
    null, null, null, null, null
], CreateItem([
    ['Resources/Gloves-Silk.png', 'rgba( 255, 255, 255, 0.5)']
], 'Silk Gloves', 'Soft and durable gloves made from silk, providing excellent dexterity and comfort', [
    ['type', 'armor'],
    ['magic production', 0.5]
]));

// Celestial Silk Satchel
inventory.addRecipe([
    null, null, null, null, null,
    "Silk", "Silk", "Silk", "Silk", "Silk",
    "Starshard", "Starshard", "Starshard", "Starshard", "Starshard",
    "Silk", "Silk", "Silk", "Silk", "Silk",
    null, null, null, null, null
], CreateItem([
    ['Resources/Bag-CelestialSilk.png', 'rgba( 255, 255, 0, 0.5)']
], 'Celestial Silk Satchel', 'A satchel crafted from ethereal celestial silk, capable of holding magical artifacts', [
    ['type', 'container'],
    ['capacity', 15],
    ['magic_resistance', 5]
]));

// Shadowweave Cloak
inventory.addRecipe([
    null, null, null, null, null,
    "Silk", "Silk", "Silk", "Silk", "Silk",
    "Void Essence", "Void Essence", "Void Essence", "Void Essence", "Void Essence",
    "Silk", "Silk", "Silk", "Silk", "Silk",
    null, null, null, null, null
], CreateItem([
    ['Resources/Cloak-Shadowweave.png', 'rgba( 0, 0, 0, 0.7)']
], 'Shadowweave Cloak', 'A cloak made from shadowy silk interwoven with void essence, granting stealth and protection', [
    ['type', 'armor'],
    ['armor', 4],
    ['stealth', true]
]));

// Magic
inventory.addRecipe([
    "Essence", "Essence", "Essence", "Essence", "Essence",
    "Essence", "Essence", "Essence", "Essence", "Essence",
    "Essence", "Essence", "Essence", "Essence", "Essence",
    "Essence", "Essence", "Essence", "Essence", "Essence",
    "Essence", "Essence", "Essence", "Essence", "Essence"
], CreateItem([
    ['Resources/Magic-Spirule.png', 'rgba( 127, 127, 255, 0.5)']
], 'Spirule', 'A term denoting the concentrated essence, a bit more organized and potent.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Spirule", "Spirule", "Spirule", "Spirule", "Spirule",
    "Spirule", "Spirule", "Spirule", "Spirule", "Spirule",
    "Spirule", "Spirule", "Spirule", "Spirule", "Spirule",
    "Spirule", "Spirule", "Spirule", "Spirule", "Spirule",
    "Spirule", "Spirule", "Spirule", "Spirule", "Spirule"
], CreateItem([
    ['Resources/Magic-Lumina.png', 'rgba( 127, 127, 255, 0.5)']
], 'Lumina', 'Magic gathered into a visible, glowing form, often used in basic spells.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Lumina", "Lumina", "Lumina", "Lumina", "Lumina",
    "Lumina", "Lumina", "Lumina", "Lumina", "Lumina",
    "Lumina", "Lumina", "Lumina", "Lumina", "Lumina",
    "Lumina", "Lumina", "Lumina", "Lumina", "Lumina",
    "Lumina", "Lumina", "Lumina", "Lumina", "Lumina"
], CreateItem([
    ['Resources/Magic-Etheron.png', 'rgba( 127, 127, 255, 0.5)']
], 'Etheron', 'A stage where magic starts to take on a subtle, ethereal presence.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Etheron", "Etheron", "Etheron", "Etheron", "Etheron",
    "Etheron", "Etheron", "Etheron", "Etheron", "Etheron",
    "Etheron", "Etheron", "Etheron", "Etheron", "Etheron",
    "Etheron", "Etheron", "Etheron", "Etheron", "Etheron",
    "Etheron", "Etheron", "Etheron", "Etheron", "Etheron"
], CreateItem([
    ['Resources/Magic-Aetherium.png', 'rgba( 127, 127, 255, 0.5)']
], 'Aetherium', 'A denser form of magic, capable of complex spells and enchantments.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Aetherium", "Aetherium", "Aetherium", "Aetherium", "Aetherium",
    "Aetherium", "Aetherium", "Aetherium", "Aetherium", "Aetherium",
    "Aetherium", "Aetherium", "Aetherium", "Aetherium", "Aetherium",
    "Aetherium", "Aetherium", "Aetherium", "Aetherium", "Aetherium",
    "Aetherium", "Aetherium", "Aetherium", "Aetherium", "Aetherium"
], CreateItem([
    ['Resources/Magic-Arcanum.png', 'rgba( 127, 127, 255, 0.5)']
], 'Arcanum', 'Magic gathered into a cohesive force, capable of bending reality.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Arcanum", "Arcanum", "Arcanum", "Arcanum", "Arcanum",
    "Arcanum", "Arcanum", "Arcanum", "Arcanum", "Arcanum",
    "Arcanum", "Arcanum", "Arcanum", "Arcanum", "Arcanum",
    "Arcanum", "Arcanum", "Arcanum", "Arcanum", "Arcanum",
    "Arcanum", "Arcanum", "Arcanum", "Arcanum", "Arcanum"
], CreateItem([
    ['Resources/Magic-ManaPrism.png', 'rgba( 127, 127, 255, 0.5)']
], 'Mana Prism', 'A solid, crystallized form of magic, harnessed for advanced rituals.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism",
    "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism",
    "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism",
    "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism",
    "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism", "Mana Prism"
], CreateItem([
    ['Resources/Magic-EldritchCore.png', 'rgba( 127, 127, 255, 0.5)']
], 'Eldritch Core', 'A powerful, pulsating source of magic, often found in magical artifacts.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core",
    "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core",
    "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core",
    "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core",
    "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core", "Eldritch Core"
], CreateItem([
    ['Resources/Magic-Voidstone.png', 'rgba( 127, 127, 255, 0.5)']
], 'Voidstone', 'An extremely dense, magical substance, believed to contain the essence of ancient beings.', [
    ['type', 'magic']
]));
inventory.addRecipe([
    "Voidstone", "Voidstone", "Voidstone", "Voidstone", "Voidstone",
    "Voidstone", "Voidstone", "Voidstone", "Voidstone", "Voidstone",
    "Voidstone", "Voidstone", "Voidstone", "Voidstone", "Voidstone",
    "Voidstone", "Voidstone", "Voidstone", "Voidstone", "Voidstone",
    "Voidstone", "Voidstone", "Voidstone", "Voidstone", "Voidstone"
], CreateItem([
    ['Resources/Magic-NexusCrystal.png', 'rgba( 127, 127, 255, 0.5)']
], 'Nexus Crystal', 'The epitome of magical density, a crystal so potent it can alter the fabric of reality.', [
    ['type', 'magic']
]));