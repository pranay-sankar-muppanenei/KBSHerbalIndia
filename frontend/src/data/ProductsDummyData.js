export const PRODUCTS_DUMMY_DATA = [
  {
  id: "prod1",
  name: "Acid Cure Capsule",
  description: "Effectively relieves hyperacidity, flatulence, indigestion, stomach heaviness, and heals stomach ulcers.",
  price: 165,
  rating: 4.9,
  category: "Digestive Health",
  image: "https://m.media-amazon.com/images/I/61KWg-yFaxL._UF1000,1000_QL80_.jpg",
  type: "Capsules",
  quantityPerPack: "30 Caps per pack",
  inStock: true
},
{
  id: "prod2",
  name: "Arogyam Capsule",
  description: "Naturally relieves constipation, gas, and indigestion for optimal digestive health.",
  price: 85,
  rating: 5.0,
  category: "Digestive Health",
  image: "https://m.media-amazon.com/images/I/61KWg-yFaxL._UF1000,1000_QL80_.jpg",
  type: "Capsules",
  quantityPerPack: "10 Caps per pack",
  inStock: false
},
{
  id: "prod3",
  name: "Joint Forte Capsule",
  description: "Reduces pain, inflammation, and stiffness; heals swollen joints and effectively treats arthritis.",
  price: 165,
  rating: 5.0,
  category: "Joint & Muscle Care",
  image: "https://m.media-amazon.com/images/I/61KWg-yFaxL._UF1000,1000_QL80_.jpg",
  type: "Capsules",
  quantityPerPack: "20 Caps per pack",
  inStock: true
},
{
  id: "prod4",
  name: "Joint Forte Tablet",
  description: "Reduces pain, inflammation, and stiffness; heals swollen joints and effectively treats arthritis.",
  price: 198,
  rating: 5.0,
  category: "Joint & Muscle Care",
  image: "https://m.media-amazon.com/images/I/61KWg-yFaxL._UF1000,1000_QL80_.jpg",
  type: "Tablets",
  quantityPerPack: "60 Tablets per pack",
  inStock: true
}

]

export const PRODUCT_DETAILS = [
  {
    "id": "prod1",
    "name": "Kayacare Syrup",
    "tagline": "Syrup form of Kayacare capsule",
    "image": "kayacare_syrup.png",
    "volume": "200 ml",
    "price": 155,
    "rating": 4.5,
    "reviewCount": 16,
    "category": "Skin & Beauty",
    "certifications": ["ISO 9001:2015 Certified", "ISO Certified"],
    "benefits": [
      "Purifies blood naturally",
      "Helps correct pigmentation",
      "Reduces blemishes and acne scars"
    ],
    "dosage": "Take one spoon twice daily after meals.",
    "ingredients": ["Haldi", "Amaltas", "Kutki", "Neem", "Chirayta"],
    "howToUse": "Consume 1 teaspoon of Kayacare Syrup twice daily after meals, preferably with lukewarm water.",
    "ratingDistribution": { "5": 40, "4": 35, "3": 20, "2": 3, "1": 2 },
    "reviews": [
      { "name": "Ritika S.", "rating": 5, "comment": "Great for acne control!", "date": "2024-05-10" }
    ],
    "inStock": true
  },
  {
    "id": "prod2",
    "name": "W15 Capsule",
    "tagline": "For awakening the senses",
    "image": "w15_capsule.png",
    "volume": "30 Capsules",
    "price": 465,
    "rating": 4.6,
    "reviewCount": 24,
    "category": "Sexual Wellness",
    "certifications": ["GMP Certified"],
    "benefits": [
      "Boosts libido",
      "Improves stamina",
      "Reduces fatigue"
    ],
    "dosage": "One capsule daily with milk.",
    "ingredients": ["Ashwagandha", "Shilajit", "Safed Musli", "Kaunch Beej"],
    "howToUse": "Consume after dinner for best results.",
    "ratingDistribution": { "5": 50, "4": 30, "3": 15, "2": 3, "1": 2 },
    "reviews": [
      { "name": "Karan M.", "rating": 5, "comment": "Felt energized in a week.", "date": "2024-05-18" }
    ],
    "inStock": true
  },
  {
    "id": "prod3",
    "name": "Shank Pushpi Capsule",
    "tagline": "For memory power & immunity",
    "image": "shank_pushpi.png",
    "volume": "60 Capsules",
    "price": 135,
    "rating": 4.4,
    "reviewCount": 11,
    "category": "Mental Wellness",
    "certifications": ["Ayush Approved"],
    "benefits": [
      "Enhances memory and focus",
      "Reduces anxiety and stress",
      "Boosts cognitive health"
    ],
    "dosage": "Take 1 capsule twice daily after meals.",
    "ingredients": ["Shankhpushpi", "Brahmi", "Vacha", "Mandukaparni"],
    "howToUse": "Best taken with warm water or milk.",
    "ratingDistribution": { "5": 35, "4": 40, "3": 15, "2": 5, "1": 5 },
    "reviews": [
      { "name": "Divya J.", "rating": 4, "comment": "Helpful during exams.", "date": "2024-06-01" }
    ],
    "inStock": true
  },
  {
    "id": "prod4",
    "name": "Acid Cure Syrup",
    "tagline": "Good for stomach acidity",
    "image": "acid_cure_syrup.png",
    "volume": "200 ml",
    "price": 145,
    "rating": 4.7,
    "reviewCount": 20,
    "category": "Digestive Health",
    "certifications": ["FSSAI Approved"],
    "benefits": [
      "Relieves acidity and gas",
      "Improves digestion",
      "Soothes stomach lining"
    ],
    "dosage": "1-2 teaspoons twice a day after meals.",
    "ingredients": ["Saunf", "Ajwain", "Jeera", "Mulethi", "Harad"],
    "howToUse": "Mix with lukewarm water or consume directly.",
    "ratingDistribution": { "5": 60, "4": 25, "3": 10, "2": 3, "1": 2 },
    "reviews": [
      { "name": "Nikhil V.", "rating": 5, "comment": "Very soothing after meals.", "date": "2024-04-25" }
    ],
    "inStock": false
  },
  {
    "id": "prod5",
    "name": "Joint Forte Capsule",
    "tagline": "Freedom for movements",
    "image": "joint_forte.png",
    "volume": "60 Capsules",
    "price": 165,
    "rating": 4.8,
    "reviewCount": 19,
    "category": "Joint & Muscle Care",
    "certifications": ["ISO Certified"],
    "benefits": [
      "Improves joint flexibility",
      "Relieves pain and stiffness",
      "Strengthens bones"
    ],
    "dosage": "Take 1 capsule twice daily.",
    "ingredients": ["Guggul", "Nirgundi", "Shallaki", "Hadjod"],
    "howToUse": "Take with warm water after meals.",
    "ratingDistribution": { "5": 65, "4": 25, "3": 5, "2": 3, "1": 2 },
    "reviews": [
      { "name": "Pooja D.", "rating": 5, "comment": "No more knee pain!", "date": "2024-03-30" }
    ],
    "inStock": true
  }
]


