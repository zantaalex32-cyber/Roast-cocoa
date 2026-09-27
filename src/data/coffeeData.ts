import { MenuItem, ExperienceStep, Review } from '../types';

export const SIGNATURE_DRINKS: MenuItem[] = [
  {
    id: 'drink-espresso',
    name: 'Espresso',
    category: 'Coffee',
    price: 3.80,
    description: 'Double extraction of our single-origin Ethiopian Guji. Dense golden crema with notes of jasmine, bergamot, and stone fruit.',
    detailedDescription: 'Hand-pulled on our custom Synesso MVP at 9 bars of pressure. We select high-altitude heirloom varietals from Guji, Ethiopia, roasted lightly to preserve vibrant natural sweetness and delicate florals.',
    image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=800&q=80',
    tags: ['Single Origin', 'Double Shot', 'Light Roast'],
    tastingNotes: ['Jasmine Floral', 'Bergamot', 'Stone Fruit Honey'],
    origin: 'Guji Highlands, Ethiopia (1,950m)',
    calories: 5,
    allergens: [],
    featured: true
  },
  {
    id: 'drink-cappuccino',
    name: 'Cappuccino',
    category: 'Coffee',
    price: 4.75,
    description: 'Equal thirds of bold espresso, sweet steamed whole milk, and dense microfoam dusted with roasted cacao.',
    detailedDescription: 'Our signature morning ritual. A rich base of our Reserve House Blend folded into silky microfoam, textured to a glossy 62 degrees Celsius for natural sweetness without added sugar.',
    image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=800&q=80',
    tags: ['House Favorite', 'Velvety Foam', '6 oz Traditional'],
    tastingNotes: ['Almond Butter', 'Milk Chocolate', 'Toasted Graham'],
    origin: 'Colombia Huila & Brazil Cerrado Blend',
    calories: 140,
    allergens: ['Dairy (Oat/Almond alternative available)'],
    featured: true
  },
  {
    id: 'drink-mocha',
    name: 'Mocha',
    category: 'Chocolate',
    price: 5.25,
    description: '70% single-origin Dominican cacao ganache melted into a double espresso and velvety textured milk.',
    detailedDescription: 'A harmonious marriage of our two obsessions: dark craft cacao and specialty espresso. We melt organic direct-trade Zorzal chocolate in-house each morning, balancing sweetness and rich cocoa depth.',
    image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=800&q=80',
    tags: ['Craft Cacao', '70% Dark', 'Signature Blend'],
    tastingNotes: ['Dark Cocoa', 'Black Cherry', 'Molasses'],
    origin: 'Zorzal Reserve Cacao & Guatemala Antigua',
    calories: 260,
    allergens: ['Dairy (Oat/Almond alternative available)'],
    featured: true
  }
];

export const FULL_MENU: MenuItem[] = [
  ...SIGNATURE_DRINKS,
  {
    id: 'drink-pourover',
    name: 'Single-Origin Pour Over',
    category: 'Coffee',
    price: 5.00,
    description: 'Hand-poured using ceramic Kalita Wave. Clean cup profile highlighting terroir and seasonal harvest.',
    detailedDescription: 'Precision extraction with 200°F filtered spring water and a 1:16 ratio. Rotating seasonal coffees sourced directly from smallholder farms with transparent farm-gate pricing.',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    tags: ['Filtered', 'Slow Bar', 'Rotating Micro-Lot'],
    tastingNotes: ['Meyer Lemon', 'Apricot', 'Brown Sugar'],
    origin: 'Tarrazú, Costa Rica',
    calories: 2,
    allergens: []
  },
  {
    id: 'drink-flatwhite',
    name: 'Auckland Flat White',
    category: 'Coffee',
    price: 4.85,
    description: 'Double ristretto blended with thin textured milk for a strong, velvety espresso experience.',
    detailedDescription: 'A pure celebration of espresso strength with just enough micro-textured milk to soften acidity without diluting intensity. Served in a 5 oz ceramic tumbler.',
    image: 'https://images.unsplash.com/photo-1577968897966-3d4325b36b61?auto=format&fit=crop&w=800&q=80',
    tags: ['Double Ristretto', 'Dense Texture', '5 oz'],
    tastingNotes: ['Caramel Fudge', 'Hazelnut', 'Cedar'],
    origin: 'Sumatra Mandheling & Colombia Supremo',
    calories: 120,
    allergens: ['Dairy (Plant options available)']
  },
  {
    id: 'drink-coldbrew',
    name: '24-Hour Nitro Cold Brew',
    category: 'Cold Drinks',
    price: 5.10,
    description: 'Slow cold-steeped for 24 hours, nitrogen-infused for a creamy cascading pour with zero bitterness.',
    detailedDescription: 'Steeped in small 30-liter stainless vats using triple-filtered chilled water. Cascades like stout beer with a natural sweetness and thick creamy head without dairy.',
    image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=800&q=80',
    tags: ['Nitrogen Infused', 'Low Acidity', 'High Caffeine'],
    tastingNotes: ['Dark Chocolate', 'Malt', 'Blackberry'],
    origin: 'Cerrado Mineiro, Brazil',
    calories: 5,
    allergens: []
  },
  {
    id: 'drink-matcha',
    name: 'Ceremonial Uji Matcha',
    category: 'Tea',
    price: 5.50,
    description: 'First-harvest stone ground green tea from Kyoto whisked with steam-frosted oat milk.',
    detailedDescription: 'Single-estate tea leaves shade-grown for 25 days in Uji, Japan. Bamboo whisked to order and balanced with subtle unrefined cane sweetness.',
    image: 'https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=800&q=80',
    tags: ['Ceremonial Grade', 'Stone Ground', 'Kyoto Import'],
    tastingNotes: ['Umami', 'Fresh Sweet Grass', 'Toasted Pine'],
    origin: 'Uji, Kyoto Prefecture, Japan',
    calories: 110,
    allergens: []
  },
  {
    id: 'drink-earlgrey',
    name: 'Lavender Smoked Earl Grey',
    category: 'Tea',
    price: 4.25,
    description: 'Whole-leaf Ceylon black tea scented with cold-pressed Italian bergamot and French lavender buds.',
    detailedDescription: 'Hand-blended loose leaf tea brewed in cast iron pots at 95°C for exactly 4 minutes. Refreshing, aromatic, and deeply calming.',
    image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?auto=format&fit=crop&w=800&q=80',
    tags: ['Loose Leaf', 'Organic Bergamot', 'Whole Herb'],
    tastingNotes: ['Citrus Blossom', 'Wild Lavender', 'Malty Ceylon'],
    origin: 'Dimbula Estate, Sri Lanka',
    calories: 0,
    allergens: []
  },
  {
    id: 'drink-hotcocoa',
    name: 'Artisan Sipping Cocoa',
    category: 'Chocolate',
    price: 5.40,
    description: 'Thick, unadulterated hot chocolate prepared with 75% bean-to-bar Venezuelan chocolate and cinnamon.',
    detailedDescription: 'Crafted in the traditional European drinking chocolate style. Pure melted chocolate emulsion with warm organic whole milk and a touch of Madagascar bourbon vanilla.',
    image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?auto=format&fit=crop&w=800&q=80',
    tags: ['75% Venezuelan', 'Bean-to-Bar', 'European Style'],
    tastingNotes: ['Deep Cocoa', 'Vanilla Bean', 'Ceylon Cinnamon'],
    origin: 'Sur del Lago, Venezuela',
    calories: 310,
    allergens: ['Dairy (Plant options available)']
  },
  {
    id: 'pastry-croissant',
    name: 'Pain au Chocolat',
    category: 'Pastries',
    price: 4.50,
    description: 'Laminated with cultured Normandy butter and stuffed with two batons of Valrhona dark chocolate.',
    detailedDescription: 'Baked fresh every morning at 5:30 AM in our open prep station. 72 hours of sourdough fermentation for light honeycomb layers and a crisp, caramelized crust.',
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
    tags: ['Fresh Daily', 'Normandy Butter', '72h Ferment'],
    tastingNotes: ['Flaky Butter', 'Roasted Cocoa', 'Caramelized Sugar'],
    origin: 'House Patisserie',
    calories: 340,
    allergens: ['Gluten', 'Dairy', 'Eggs']
  },
  {
    id: 'pastry-brioche',
    name: 'Toasted Cardamom Brioche',
    category: 'Pastries',
    price: 4.25,
    description: 'Swedish-inspired braided enriched dough infused with freshly crushed green cardamom pods.',
    detailedDescription: 'Golden egg-washed brioche knotted by hand and sprinkled with coarse Swedish pearl sugar. Warm, floral spice that complements our espresso roast.',
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=800&q=80',
    tags: ['Hand Knotted', 'Swedish Style', 'Aromatic Spice'],
    tastingNotes: ['Cardamom', 'Sweet Butter', 'Pearl Sugar'],
    origin: 'House Patisserie',
    calories: 290,
    allergens: ['Gluten', 'Dairy', 'Eggs']
  },
  {
    id: 'drink-tonic',
    name: 'Espresso Citrus Tonic',
    category: 'Cold Drinks',
    price: 5.60,
    description: 'Sparkling botanical tonic water topped with a float of cold-extracted espresso and candied orange peel.',
    detailedDescription: 'A brisk, effervescent pick-me-up. Natural quinine bitterness lifts the bright citrus notes of our African coffee, garnished with fresh rosemary sprig.',
    image: 'https://images.unsplash.com/photo-1461023058943-07fcbe16d735?auto=format&fit=crop&w=800&q=80',
    tags: ['Sparkling', 'Refreshing', 'Botanical Tonic'],
    tastingNotes: ['Orange Zest', 'Crisp Tonic', 'Bright Espresso'],
    origin: 'House Creation',
    calories: 45,
    allergens: []
  }
];

export const EXPERIENCE_STEPS: ExperienceStep[] = [
  {
    id: 'step-beans',
    title: 'Small-Batch Roasting',
    subtitle: 'Step 01 / Sourcing & Terroir',
    description: 'Direct-trade green coffee beans harvested from volcanic soils across Ethiopia, Colombia, and Guatemala, roasted gently on a custom cast-iron drum.',
    detail: 'We honor micro-climates. Roasting profile logs are dialed daily to bring out terroir sweetness without charred or smoky defects.',
    image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&w=1200&q=80',
    accent: '#593E2B'
  },
  {
    id: 'step-brewing',
    title: 'Precision Extraction',
    subtitle: 'Step 02 / The Chemistry of Water',
    description: 'Water remineralized to 120 PPM with balanced magnesium and calcium ions, calibrated for optimal solute dissolution.',
    detail: 'Temperature stability within 0.5 degrees Celsius and gravimetric dose scales ensure every single cup matches our standard.',
    image: 'https://images.unsplash.com/photo-1518832553480-cd0e625ed3e6?auto=format&fit=crop&w=1200&q=80',
    accent: '#7D5836'
  },
  {
    id: 'step-barista',
    title: 'Barista Craftsmanship',
    subtitle: 'Step 03 / Skilled Hands',
    description: 'Our baristas train for over 200 hours in sensory evaluation, milk thermodynamics, and ergonomic extraction before touching the bar.',
    detail: 'Milk is micro-steamed to a silky wet paint sheen, aerated naturally to create delicate contrast and comfortable drinking temperature.',
    image: 'https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&w=1200&q=80',
    accent: '#3A281E'
  },
  {
    id: 'step-cup',
    title: 'The Finished Moment',
    subtitle: 'Step 04 / Mindful Pause',
    description: 'Poured into heavy Japanese ceramic cups that preserve thermal warmth, inviting you to put down your screen and slow down.',
    detail: 'Pair your cup with our small-batch bean-to-bar dark chocolate square served alongside every espresso order.',
    image: 'https://images.unsplash.com/photo-1507133750040-4a8f57021571?auto=format&fit=crop&w=1200&q=80',
    accent: '#241812'
  }
];

export const TESTIMONIALS: Review[] = [
  {
    id: 'review-1',
    name: 'Elena Vance',
    role: 'Local Architect',
    quote: 'The quietest sanctuary in the city. The cappuccino is textured like silk, and the dark wood space encourages real contemplation.',
    rating: 5,
    date: 'Regular Visitor'
  },
  {
    id: 'review-2',
    name: 'Marcus Sterling',
    role: 'Author & Lecturer',
    quote: 'Rarely do you find a coffee shop that treats cacao with the exact same scientific reverence as single-origin espresso. Truly exceptional.',
    rating: 5,
    date: 'Verified Guest'
  },
  {
    id: 'review-3',
    name: 'Dr. Sarah Lin',
    role: 'Biochemist',
    quote: 'Their water filtration and extraction consistency is remarkable. It is the only pour-over in town where you taste pure floral clarity.',
    rating: 5,
    date: 'Coffee Enthusiast'
  }
];

export const GALLERY_PHOTOS = [
  {
    url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=800&q=80',
    title: 'Artisan Bar Counter',
    caption: 'Natural ash wood and matte charcoal accents'
  },
  {
    url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80',
    title: 'Morning Extraction',
    caption: 'Steaming pour over in natural morning light'
  },
  {
    url: 'https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80',
    title: 'Slow Seating Area',
    caption: 'Dedicated reading nooks and quiet corners'
  },
  {
    url: 'https://images.unsplash.com/photo-1497636577773-f1231844b336?auto=format&fit=crop&w=800&q=80',
    title: 'Roastery Archive',
    caption: 'Single-origin burlap sacks resting post-import'
  }
];
