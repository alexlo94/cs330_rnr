const products = [
    {
        id: "RR-001",
        name: "Deep Rest Botanicals",
        primaryBenefit: "Sleep",
        format: "Gummy",
        dietaryRestrictions: ["Vegan", "Gluten-Free"],
        keyIngredients: ["Ashwagandha", "Chamomile", "L-Theanine"],
        price: 24.99,
        imagePlaceholder: "sleep-gummy.jpg"
    },
    {
        id: "RR-002",
        name: "Clarity Mushroom Blend",
        primaryBenefit: "Focus",
        format: "Powder",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Lion's Mane", "Cordyceps", "Maca"],
        price: 32.00,
        imagePlaceholder: "focus-powder.jpg"
    },
    {
        id: "RR-003",
        name: "Sustained Lift",
        primaryBenefit: "Energy",
        format: "Capsule",
        dietaryRestrictions: ["Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Vitamin B12", "Rhodiola", "Ginseng"],
        price: 28.50,
        imagePlaceholder: "energy-capsule.jpg"
    },
    {
        id: "RR-004",
        name: "Daily Defense Drops",
        primaryBenefit: "Immunity",
        format: "Liquid",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Elderberry", "Zinc", "Vitamin C"],
        price: 22.00,
        imagePlaceholder: "immunity-liquid.jpg"
    },
    {
        id: "RR-005",
        name: "Nighttime Recovery",
        primaryBenefit: "Sleep",
        format: "Capsule",
        dietaryRestrictions: ["Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Valerian Root", "Magnesium", "Tart Cherry"],
        price: 26.00,
        imagePlaceholder: "sleep-capsule.jpg"
    },
    {
        id: "RR-006",
        name: "Morning Matcha Kick",
        primaryBenefit: "Energy",
        format: "Powder",
        dietaryRestrictions: ["Vegan", "Gluten-Free"],
        keyIngredients: ["Matcha", "L-Theanine", "Monk Fruit"],
        price: 29.99,
        imagePlaceholder: "energy-powder.jpg"
    },
    {
        id: "RR-007",
        name: "Flow State Chews",
        primaryBenefit: "Focus",
        format: "Gummy",
        dietaryRestrictions: ["Gluten-Free"],
        keyIngredients: ["Green Tea Extract", "Vitamin B6", "Cane Sugar"],
        price: 21.50,
        imagePlaceholder: "focus-gummy.jpg"
    },
    {
        id: "RR-008",
        name: "Core Vitality",
        primaryBenefit: "Immunity",
        format: "Capsule",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Echinacea", "Astragalus", "Reishi"],
        price: 34.00,
        imagePlaceholder: "immunity-capsule.jpg"
    },
    {
        id: "RR-009",
        name: "Gut Harmony",
        primaryBenefit: "Digestion",
        format: "Powder",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Prebiotics", "Probiotics", "Inulin"],
        price: 27.50,
        imagePlaceholder: "digestion-powder.jpg"
    },
    {
        id: "RR-010",
        name: "Zen State Drops",
        primaryBenefit: "Stress",
        format: "Liquid",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Holy Basil", "Lemon Balm", "Lavender"],
        price: 19.99,
        imagePlaceholder: "stress-liquid.jpg"
    },
    {
        id: "RR-011",
        name: "Bright Eyes",
        primaryBenefit: "Focus",
        format: "Capsule",
        dietaryRestrictions: ["Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Ginkgo Biloba", "Lutein", "Zeaxanthin"],
        price: 25.00,
        imagePlaceholder: "focus-capsule.jpg"
    },
    {
        id: "RR-012",
        name: "Slumber Sip",
        primaryBenefit: "Sleep",
        format: "Powder",
        dietaryRestrictions: ["Vegan", "Gluten-Free"],
        keyIngredients: ["Tart Cherry", "Magnesium", "Chamomile"],
        price: 30.00,
        imagePlaceholder: "sleep-powder.jpg"
    },
    {
        id: "RR-013",
        name: "B-Complex Boost",
        primaryBenefit: "Energy",
        format: "Liquid",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Vitamin B12", "Vitamin B6", "Folate"],
        price: 21.00,
        imagePlaceholder: "energy-liquid.jpg"
    },
    {
        id: "RR-014",
        name: "Immunity Gummies",
        primaryBenefit: "Immunity",
        format: "Gummy",
        dietaryRestrictions: ["Vegan", "Gluten-Free"],
        keyIngredients: ["Vitamin C", "Zinc", "Echinacea"],
        price: 18.50,
        imagePlaceholder: "immunity-gummy.jpg"
    },
    {
        id: "RR-015",
        name: "Calm Core",
        primaryBenefit: "Stress",
        format: "Capsule",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Ashwagandha", "Rhodiola", "L-Theanine"],
        price: 26.50,
        imagePlaceholder: "stress-capsule.jpg"
    },
    {
        id: "RR-016",
        name: "Gut Restore",
        primaryBenefit: "Digestion",
        format: "Capsule",
        dietaryRestrictions: ["Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Peppermint", "Ginger", "Fennel"],
        price: 23.99,
        imagePlaceholder: "digestion-capsule.jpg"
    },
    {
        id: "RR-017",
        name: "Focus Fuel",
        primaryBenefit: "Focus",
        format: "Liquid",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Lion's Mane", "Peppermint Oil", "Vitamin B12"],
        price: 24.50,
        imagePlaceholder: "focus-liquid.jpg"
    },
    {
        id: "RR-018",
        name: "Vital Greens",
        primaryBenefit: "Energy",
        format: "Powder",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Spirulina", "Chlorella", "Wheatgrass"],
        price: 35.00,
        imagePlaceholder: "energy-powder.jpg"
    },
    {
        id: "RR-019",
        name: "Dream Drops",
        primaryBenefit: "Sleep",
        format: "Liquid",
        dietaryRestrictions: ["Vegan", "Gluten-Free", "Sugar-Free"],
        keyIngredients: ["Valerian", "Passionflower", "Hops"],
        price: 20.00,
        imagePlaceholder: "sleep-liquid.jpg"
    },
    {
        id: "RR-020",
        name: "Soothe & Digest",
        primaryBenefit: "Digestion",
        format: "Gummy",
        dietaryRestrictions: ["Gluten-Free"],
        keyIngredients: ["Apple Cider Vinegar", "Ginger", "Pectin"],
        price: 19.50,
        imagePlaceholder: "digestion-gummy.jpg"
    },
    {
        id: "RR-021",
        name: "Radiant Defense",
        primaryBenefit: "Immunity",
        format: "Powder",
        dietaryRestrictions: ["Vegan", "Gluten-Free"],
        keyIngredients: ["Vitamin C", "Rosehip", "Camu Camu"],
        price: 28.00,
        imagePlaceholder: "immunity-powder.jpg"
    },
    {
        id: "RR-022",
        name: "Afternoon Align",
        primaryBenefit: "Stress",
        format: "Gummy",
        dietaryRestrictions: ["Vegan", "Gluten-Free"],
        keyIngredients: ["L-Theanine", "Lemon Balm", "Magnesium"],
        price: 32.00,
        imagePlaceholder: "stress-gummy.jpg"
    },
    {
        id: "RR-023",
        name: "Peak Performance",
        primaryBenefit: "Energy",
        format: "Gummy",
        dietaryRestrictions: ["Gluten-Free"],
        keyIngredients: ["CoQ10", "Ginseng", "Vitamin B12"],
        price: 25.99,
        imagePlaceholder: "energy-gummy.jpg"
    }
];

// Helper function to format a list of strings into a proper string

// Helper function to format numbers correctly

// etc.


// Clone* the template, fill it out with data from our products
function transformProduct(product) {
    // Somehow get the reference to the template
    const productCardTemplate = document.querySelector("#productCardTemplate");

    // Make a deep copy of the template
    const clone = document.importNode(productCardTemplate.content, true);

    // Set the product's name and price
    clone.querySelector(".productName").textContent = product.name;
    clone.querySelector(".productPrice").textContent = "$"+product.price; // TODO: handle weirdness

    // Set the product spec sheet details with template literal
    const specs = `
        <dt>Target:</dt>
        <dd>${product.primaryBenefit}</dd>

        <dt>Format:</dt>
        <dd>${product.format}</dd>

        <dt>Dietary:</dt>
        <dd>${product.dietaryRestrictions}</dd>
    `;

    clone.querySelector(".specSheet").innerHTML = specs;

    // Set the ingredients list
    const ingredients = `
    <strong>Formulated with:</strong> ${product.keyIngredients}
    `;

    clone.querySelector(".ingredients").innerHTML = ingredients;

    // Set the product image link
    const productImageLink = `https://placehold.co/400x400/343a40/f8f9fa?text=${encodeURIComponent(product.name)}`;

    clone.querySelector(".cardImageContainer img").src = productImageLink;

    return clone;
}

// Somehow get the ref to the product grid
const productFeed = document.querySelector(".productGrid");

// Attach all the products to the product feed
for (let i = 0; i < products.length; i++){
    // get the ith product
    let currProduct = products[i];

    let currClone = transformProduct(currProduct);

    productFeed.appendChild(currClone);
}