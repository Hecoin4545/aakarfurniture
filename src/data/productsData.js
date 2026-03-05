// Shared product data for the application
import productImg1 from '../assets/Atit 2 projects-33.jpg';
import productImg2 from '../assets/Atit 2 projects-34.jpg';
import productImg3 from '../assets/Atit 2 projects-35.jpg';
import productImg4 from '../assets/Atit 2 projects-36.jpg';
import productImg5 from '../assets/KS227627 copy.jpg';
import productImgAlt1 from '../assets/KS227535 copy.jpg 1.jpg';
import productImgAlt2 from '../assets/KS227553 copy.jpg';
import productImgAlt3 from '../assets/KS227569 copy.jpg';

export const productsData = {
    1: {
        id: 1,
        name: "Serenity Timber Loveseat",
        originalPrice: "$1499",
        price: "$1299",
        category: "Sofas & Loveseats",
        rating: 4.8,
        reviews: 127,
        colors: [
            { name: "Charcoal Grey", hex: "#8D8D8D" },
            { name: "Golden Beige", hex: "#D4AF37" },
            { name: "Midnight Black", hex: "#222222" }
        ],
        images: [
            productImg1,
            productImg2,
            productImg3
        ],
        description: "The Serenity Timber Loveseat combines timeless elegance with modern comfort. Crafted from premium hardwood and upholstered in luxurious velvet, this piece is designed to be the centerpiece of your living space.",
        features: [
            "Premium hardwood frame with reinforced joints",
            "High-density foam cushioning for lasting comfort",
            "Removable cushion covers for easy cleaning",
            "Available in multiple color options",
            "Sustainably sourced materials",
            "5-year structural warranty"
        ],
        dimensions: {
            width: "72 inches",
            depth: "36 inches",
            height: "34 inches",
            seatHeight: "18 inches"
        },
        materials: "Solid oak frame, premium velvet upholstery, high-density foam",
        careInstructions: "Vacuum regularly. Spot clean with mild detergent. Professional cleaning recommended annually."
    },
    2: {
        id: 2,
        name: "Block Nomad Sofa",
        originalPrice: "$1899",
        price: "$1699",
        category: "Sofas & Sectionals",
        rating: 4.9,
        reviews: 203,
        colors: [
            { name: "Slate Grey", hex: "#444444" },
            { name: "Ivory White", hex: "#E5E5E5" },
            { name: "Navy Blue", hex: "#1B2631" }
        ],
        images: [
            productImg2,
            productImg3,
            productImg4
        ],
        description: "A contemporary masterpiece that redefines comfort. The Block Nomad Sofa features clean lines, modular design, and exceptional craftsmanship perfect for modern living spaces.",
        features: [
            "Modular design for flexible arrangement",
            "Extra-deep seating for maximum comfort",
            "Stain-resistant fabric treatment",
            "Reinforced corner blocks for durability",
            "Eco-friendly construction",
            "10-year limited warranty"
        ],
        dimensions: {
            width: "88 inches",
            depth: "40 inches",
            height: "32 inches",
            seatHeight: "17 inches"
        },
        materials: "Kiln-dried hardwood, performance fabric, premium foam cushioning",
        careInstructions: "Rotate cushions regularly. Blot spills immediately. Use fabric protector spray."
    },
    3: {
        id: 3,
        name: "Velvet Accent Chair",
        originalPrice: "$899",
        price: "$699",
        category: "Accent Chairs",
        rating: 4.7,
        reviews: 89,
        colors: [
            { name: "Ocean Blue", hex: "#1B4F72" },
            { name: "Emerald Green", hex: "#138D75" }
        ],
        images: [
            productImg3,
            productImg4,
            productImg5
        ],
        description: "Add a pop of color and luxury to any room with this stunning velvet accent chair. Its bold design and plush comfort make it both a statement piece and a cozy retreat.",
        features: [
            "Luxurious velvet upholstery",
            "Gold-finished metal legs",
            "Ergonomic backrest design",
            "Easy assembly required",
            "Weight capacity: 300 lbs",
            "2-year warranty"
        ],
        dimensions: {
            width: "28 inches",
            depth: "32 inches",
            height: "35 inches",
            seatHeight: "19 inches"
        },
        materials: "Velvet fabric, metal legs with gold finish, foam padding",
        careInstructions: "Brush regularly with soft brush. Professional dry clean only."
    },
    4: {
        id: 4,
        name: "Minimalist Coffee Table",
        originalPrice: "$599",
        price: "$449",
        category: "Tables",
        rating: 4.6,
        reviews: 156,
        colors: [
            { name: "Walnut Brown", hex: "#5D4037" },
            { name: "Matte Black", hex: "#212121" }
        ],
        images: [
            productImg4,
            productImg5,
            productImgAlt1
        ],
        description: "Sleek, functional, and beautifully crafted. This minimalist coffee table brings Scandinavian design principles to your living room with its clean lines and quality construction.",
        features: [
            "Solid wood construction",
            "Hidden storage compartment",
            "Scratch-resistant finish",
            "Easy to clean surface",
            "Minimalist Scandinavian design",
            "3-year warranty"
        ],
        dimensions: {
            width: "48 inches",
            depth: "24 inches",
            height: "18 inches"
        },
        materials: "Solid oak/walnut wood, powder-coated metal legs",
        careInstructions: "Wipe with damp cloth. Use coasters for hot items. Avoid harsh chemicals."
    },
    5: {
        id: 5,
        name: "Luxe Recliner",
        originalPrice: "$2100",
        price: "$1850",
        category: "Recliners",
        rating: 4.9,
        reviews: 178,
        colors: [
            { name: "Jet Black", hex: "#000000" },
            { name: "Graphite Grey", hex: "#555555" }
        ],
        images: [
            productImg5,
            productImgAlt2,
            productImgAlt3
        ],
        description: "Experience ultimate relaxation with our premium Luxe Recliner. Featuring top-grain leather, power reclining mechanism, and built-in massage functions for the ultimate comfort experience.",
        features: [
            "Power reclining with USB charging port",
            "Built-in massage and heating functions",
            "Top-grain leather upholstery",
            "Memory foam cushioning",
            "360-degree swivel base",
            "Lifetime frame warranty"
        ],
        dimensions: {
            width: "38 inches",
            depth: "40 inches",
            height: "42 inches",
            seatHeight: "20 inches"
        },
        materials: "Top-grain leather, steel frame, memory foam, electric motor",
        careInstructions: "Clean with leather conditioner monthly. Avoid direct sunlight. Keep away from heat sources."
    }
};

// Simple product list for catalog display
export const products = [
    {
        id: 1,
        name: "Serenity Timber Loveseat",
        originalPrice: "$1499",
        price: "$1299",
        image: productImg1,
        colors: ["#8D8D8D", "#D4AF37", "#222222"]
    },
    {
        id: 2,
        name: "Block Nomad Sofa",
        originalPrice: "$1899",
        price: "$1699",
        image: productImg2,
        colors: ["#444444", "#E5E5E5", "#1B2631"]
    },
    {
        id: 3,
        name: "Velvet Accent Chair",
        originalPrice: "$899",
        price: "$699",
        image: productImg3,
        colors: ["#1B4F72", "#138D75"]
    },
    {
        id: 4,
        name: "Minimalist Coffee Table",
        originalPrice: "$599",
        price: "$449",
        image: productImg4,
        colors: ["#5D4037", "#212121"]
    },
    {
        id: 5,
        name: "Luxe Recliner",
        originalPrice: "$2100",
        price: "$1850",
        image: productImg5,
        colors: ["#000000", "#555555"]
    }
];
