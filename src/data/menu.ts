import imageDemo from '@assets/images/1.jpg';

export const menu = {
  appetizers: [
    {
      name: 'Garden Bruschetta',
      dietaryInfo: ['Vegan'],
      description: 'Freshly diced tomatoes, basil, and balsamic glaze on a bed of toasted whole-grain bread.',
      price: 8.99,
      image: imageDemo,
      story:
        'Our Garden Bruschetta is a celebration of flavors sourced from local farms. Each tomato is handpicked to ensure freshness, and the basil is selected for its aromatic intensity. The combination of these simple ingredients creates a burst of summer in every bite.',
    },
    {
      name: 'Avocado Spring Rolls',
      dietaryInfo: ['Gluten-Free', 'Vegan'],
      description: 'Crisp rice paper filled with creamy avocado, julienned vegetables, and a zesty dipping sauce.',
      price: 10.99,
      image: imageDemo,
      story:
        "Our Avocado Spring Rolls are a dance of textures and flavors. The creamy avocado blends harmoniously with the crispness of the rice paper, while the zesty dipping sauce adds a touch of brightness. It's a refreshing start to your dining experience.",
    },
    {
      name: 'Quinoa Stuffed Mushrooms',
      dietaryInfo: [],
      description: 'Quinoa, spinach, and feta-stuffed mushrooms baked to perfection, served with a light herb drizzle.',
      price: 12.99,
      image: imageDemo,
      story:
        "Indulge in the wholesome goodness of our Quinoa Stuffed Mushrooms. Each mushroom is carefully selected to cradle a filling of quinoa, spinach, and feta, creating a savory explosion of flavors. Drizzled with a light herb sauce, it's a delightful journey for your taste buds.",
    },
  ],
  mainCourses: [
    {
      name: 'Grilled Salmon Power Bowl',
      dietaryInfo: [],
      description:
        'Grilled salmon fillet on a bed of quinoa, kale, roasted sweet potatoes, and a tangy citrus vinaigrette.',
      price: 22.99,
      image: imageDemo,
      story:
        "Experience a powerhouse of nutrients with our Grilled Salmon Power Bowl. The succulent salmon is paired with nutrient-rich quinoa, kale, and roasted sweet potatoes. Drizzled with a tangy citrus vinaigrette, it's a wholesome and flavorful feast.",
    },
    {
      name: 'Zucchini Noodle Primavera',
      dietaryInfo: ['Vegetarian'],
      description:
        'Fresh zucchini noodles tossed with cherry tomatoes, broccoli, and pesto, topped with Parmesan shavings.',
      price: 18.99,
      image: imageDemo,
      story:
        "Delight in the freshness of our Zucchini Noodle Primavera. Handcrafted zucchini noodles mingle with vibrant cherry tomatoes, crisp broccoli, and aromatic pesto. Topped with Parmesan shavings, it's a celebration of garden-fresh goodness.",
    },
    {
      name: 'Protein-Packed Chickpea Salad',
      dietaryInfo: ['Vegan', 'Gluten-Free'],
      description:
        'A hearty salad featuring chickpeas, mixed greens, cherry tomatoes, cucumber, and a lemon tahini dressing.',
      price: 15.99,
      image: imageDemo,
      story:
        "Nourish your body with our Protein-Packed Chickpea Salad. A medley of chickpeas, mixed greens, cherry tomatoes, and cucumber is harmonized with a zesty lemon tahini dressing. It's a satisfying and wholesome choice for a vibrant meal.",
    },
  ],
  desserts: [
    {
      name: 'Fresh Berry Parfait',
      dietaryInfo: ['Vegetarian'],
      description: 'Layers of Greek yogurt, mixed berries, and granola for a refreshing and guilt-free treat.',
      price: 9.99,
      image: imageDemo,
      story:
        "Indulge your sweet tooth guilt-free with our Fresh Berry Parfait. Layers of creamy Greek yogurt, vibrant mixed berries, and crunchy granola create a symphony of textures and flavors. It's a delightful finale to your dining experience.",
    },
    {
      name: 'Dark Chocolate Avocado Mousse',
      dietaryInfo: ['Vegan', 'Gluten-Free'],
      description: 'Silky avocado-based chocolate mousse topped with a sprinkle of crushed pistachios.',
      price: 11.99,
      image: imageDemo,
      story:
        "Experience the decadence of our Dark Chocolate Avocado Mousse. Silky smooth and indulgent, this dessert is crafted with ripe avocados for a velvety texture. Topped with a sprinkle of crushed pistachios, it's a luscious treat for chocolate lovers.",
    },
    {
      name: 'Lemon Chia Seed Pudding',
      dietaryInfo: ['Vegan', 'Gluten-Free'],
      description: 'Zesty lemon-infused chia seed pudding served with a dollop of coconut whipped cream.',
      price: 8.99,
      image: imageDemo,
      story:
        "Savor the refreshing tang of our Lemon Chia Seed Pudding. Infused with zesty lemon, this pudding is a delightful blend of flavors and textures. Topped with a dollop of coconut whipped cream, it's a light and satisfying conclusion to your meal.",
    },
  ],
  drinks: [
    {
      name: 'Cucumber Mint Sparkler',
      dietaryInfo: [],
      description: 'Refreshing blend of cucumber, mint, and sparkling water for a cool and revitalizing experience.',
      price: 4.99,
      image: imageDemo,
      story:
        "Quench your thirst with our Cucumber Mint Sparkler. A refreshing blend of crisp cucumber and invigorating mint, combined with sparkling water, creates a revitalizing experience for your senses. It's the perfect companion to your meal.",
    },
    {
      name: 'Tropical Green Smoothie',
      dietaryInfo: ['Vegan', 'Gluten-Free'],
      description: 'A tropical medley of pineapple, mango, spinach, and coconut water, blended to perfection.',
      price: 5.99,
      image: imageDemo,
      story:
        "Transport yourself to a tropical paradise with our Tropical Green Smoothie. A vibrant medley of pineapple, mango, and spinach blended with coconut water, it's a refreshing and nutrient-packed beverage that transports you to an island getaway.",
    },
    {
      name: 'Blueberry Basil Lemonade',
      dietaryInfo: [],
      description: 'A vibrant twist on classic lemonade with the added flavors of blueberry and basil.',
      price: 3.99,
      image: imageDemo,
      story:
        "Experience a burst of flavors with our Blueberry Basil Lemonade. A vibrant twist on classic lemonade, this refreshing beverage combines the sweetness of blueberries with the aromatic essence of basil. It's a delightful sip of summer in every glass.",
    },
  ],
  coffeeOptions: [
    {
      name: 'Hazelnut Cold Brew',
      dietaryInfo: [],
      description: 'Cold-brewed coffee infused with the rich and nutty flavor of hazelnut.',
      price: 6.99,
      image: imageDemo,
      story:
        "Awaken your senses with our Hazelnut Cold Brew. Cold-brewed to perfection, this coffee is infused with the rich and nutty flavor of hazelnut. It's a delightful pick-me-up for coffee enthusiasts.",
    },
    {
      name: 'Matcha Latte',
      dietaryInfo: [],
      description:
        'A velvety blend of ceremonial-grade matcha and steamed almond milk for a comforting, antioxidant-rich beverage.',
      price: 5.99,
      image: imageDemo,
      story:
        "Indulge in the tranquility of our Matcha Latte. Crafted with ceremonial-grade matcha and steamed almond milk, this velvety beverage offers a comforting and antioxidant-rich experience. It's a moment of serenity in every sip.",
    },
    {
      name: 'Espresso Affogato',
      dietaryInfo: [],
      description: 'A shot of freshly brewed espresso poured over a scoop of vanilla bean gelato.',
      price: 7.99,
      image: imageDemo,
      story:
        "Elevate your coffee experience with our Espresso Affogato. A shot of freshly brewed espresso poured over a luscious scoop of vanilla bean gelato, creating a harmonious blend of warmth and indulgence. It's a decadent finale to your dining journey.",
    },
  ],
};
