
const imagePath = (filename) =>
    `${import.meta.env.BASE_URL}images/${filename}`;

export const categories = [
    {
        id: "shawarma",
        name: "Shawarma",
        image: imagePath("shawarma.png"),
        description: "Freshly prepared, juicy and delicious shawarma.",
        path: "/shawarma",
    },
    {
        id: "fried-chicken",
        name: "Fried Chicken",
        image: imagePath("fried-chicken.png"),
        description: "Crispy, golden and flavourful chicken.",
        path: "/fried-chicken",
    },
    {
        id: "chicken-pizza",
        name: "Chicken Pizza",
        image: imagePath("chicken-pizza.png"),
        description: "Cheesy pizza loaded with chicken.",
        path: "/chicken-pizza",
    },
    {
        id: "chicken-burger",
        name: "Chicken Burger",
        image: imagePath("chicken-burger.png"),
        description: "Juicy chicken burgers made fresh.",
        path: "/chicken-burger",
    },
    {
        id: "chicken-sandwich",
        name: "Chicken Sandwich",
        image: imagePath("chicken-sandwich.png"),
        description: "Delicious sandwiches with tasty fillings.",
        path: "/chicken-sandwich",
    },
    {
        id: "french-fries",
        name: "French Fries",
        image: imagePath("french-fries.png"),
        description: "Hot, crispy and perfectly seasoned fries.",
        path: "/french-fries",
    },
    {
        id: "fried-momos",
        name: "Fried Momos",
        image: imagePath("fried-momos.png"),
        description: "Crispy momos served with delicious chutney.",
        path: "/fried-momos",
    },
    {
        id: "grilled-chicken",
        name: "Grilled Chicken",
        image: imagePath("grilled-chicken-skewers.png"),
        description: "Smoky and flavourful grilled chicken.",
        path: "/grilled-chicken",
    },
];

export const menuData = {

    shawarma: [
        {
            id: "salad-shawarma",
            name: "Salad Shawarma",
            description: "Fresh salad, crunchy vegetables and creamy sauce.",
            price: 100,
            image: imagePath("salad-shawarma.png"),
        },
        {
            id: "chicken-shawarma",
            name: "Chicken Shawarma",
            description: "Juicy chicken with fresh vegetables and garlic sauce.",
            price: 130,
            image: imagePath("chicken-shawarma.png"),
        },
        {
            id: "large-shawarma",
            name: "Large Shawarma",
            description: "A generous, filling shawarma for bigger cravings.",
            price: 160,
            image: imagePath("large-shawarma.png"),
        },
        {
            id: "paneer-shawarma",
            name: "Paneer Shawarma",
            description: "Spiced paneer, fresh vegetables and signature sauce.",
            price: 180,
            image: imagePath("paneer-shawarma.png"),
        },
        {
            id: "cheese-shawarma",
            name: "Cheese Shawarma",
            description: "Rich cheesy filling with delicious creamy flavours.",
            price: 180,
            image: imagePath("cheese-shawarma.png"),
        },
    ],



    "fried-chicken": [
        {
            id: "chicken-wings",
            name: "Chicken Wings",
            description: "4 pieces of crispy, juicy fried chicken wings.",
            price: 160,
            image: imagePath("chicken-wings.png"),
        },
        {
            id: "chicken-thighs",
            name: "Chicken Thighs",
            description: "2 pieces of tender chicken with a crispy coating.",
            price: 180,
            image: imagePath("chicken-thighs.png"),
        },
        {
            id: "chicken-legs",
            name: "Chicken Legs",
            description: "3 pieces of crunchy, flavourful chicken drumsticks.",
            price: 180,
            image: imagePath("chicken-legs.png"),
        },
        {
            id: "chicken-full-bucket",
            name: "Chicken Full Bucket",
            description: "A generous bucket of crispy fried chicken to share.",
            price: 499,
            image: imagePath("chicken-full-bucket.png"),
        },
    ],


    
"chicken-pizza": [
  {
    id: "veg-pizza",
    name: "Veg Pizza",
    description: "Fresh vegetables, rich tomato sauce and melted cheese.",
    price: 180,
    image: imagePath("veg-pizza.png"),
  },
  {
    id: "paneer-pizza",
    name: "Paneer Pizza",
    description: "Spiced paneer, capsicum and delicious melted cheese.",
    price: 200,
    image: imagePath("paneer-pizza.png"),
  },
  {
    id: "chicken-pizza",
    name: "Chicken Pizza",
    description: "Juicy chicken, mozzarella and flavourful toppings.",
    price: 220,
    image: imagePath("chicken-pizza.png"),
  },
],


    
"chicken-burger": [
  {
    id: "veg-burger",
    name: "Veg Burger",
    description: "Crispy vegetable patty with fresh lettuce and sauce.",
    price: 100,
    image: imagePath("veg-burger.png"),
  },
  {
    id: "cheese-burger",
    name: "Cheese Burger",
    description: "Melted cheese, toasted bun and creamy signature sauce.",
    price: 130,
    image: imagePath("cheese-burger.png"),
  },
  {
    id: "paneer-burger",
    name: "Paneer Burger",
    description: "Spiced paneer patty with fresh vegetables and sauce.",
    price: 150,
    image: imagePath("paneer-burger.png"),
  },
  {
    id: "chicken-burger",
    name: "Chicken Burger",
    description: "Juicy chicken patty with lettuce and signature sauce.",
    price: 130,
    image: imagePath("chicken-burger.png"),
  },
],


    
"chicken-sandwich": [
  {
    id: "veg-sandwich",
    name: "Veg Sandwich",
    description: "Fresh vegetables and signature sauce in toasted bread.",
    price: 100,
    image: imagePath("veg-sandwich.png"),
  },
  {
    id: "cheese-sandwich",
    name: "Cheese Sandwich",
    description: "Golden toasted bread with rich melted cheese.",
    price: 110,
    image: imagePath("cheese-sandwich.png"),
  },
  {
    id: "egg-sandwich",
    name: "Egg Sandwich",
    description: "Delicious egg filling with fresh vegetables and sauce.",
    price: 110,
    image: imagePath("egg-sandwich.png"),
  },
  {
    id: "paneer-sandwich",
    name: "Paneer Sandwich",
    description: "Spiced paneer, crunchy vegetables and creamy sauce.",
    price: 140,
    image: imagePath("paneer-sandwich.png"),
  },
  {
    id: "chicken-sandwich",
    name: "Chicken Sandwich",
    description: "Juicy chicken, fresh vegetables and signature sauce.",
    price: 130,
    image: imagePath("chicken-sandwich.png"),
  },
],


    
"french-fries": [
  {
    id: "french-fries-salty-small",
    name: "French Fries - Salty (Small)",
    description: "Golden crispy fries with a classic salted finish.",
    price: 60,
    image: imagePath("fries-salty-small.png"),
  },
  {
    id: "french-fries-peri-peri-small",
    name: "French Fries - Peri Peri (Small)",
    description: "Crispy fries tossed in spicy peri peri seasoning.",
    price: 70,
    image: imagePath("fries-peri-peri-small.png"),
  },
  {
    id: "french-fries-salty-large",
    name: "French Fries - Salty (Large)",
    description: "A generous portion of golden salted crispy fries.",
    price: 100,
    image: imagePath("fries-salty-large.png"),
  },
  {
    id: "french-fries-peri-peri-large",
    name: "French Fries - Peri Peri (Large)",
    description: "A large portion of fries with bold peri peri spice.",
    price: 110,
    image: imagePath("fries-peri-peri-large.png"),
  },
],


    
"fried-momos": [
  {
    id: "steam-chicken-momos",
    name: "Steamed Chicken Momos - 10 pcs",
    description: "10 pieces of tender chicken momos, freshly steamed.",
    price: 160,
    image: imagePath("steam-chicken-momos.png"),
  },
  {
    id: "fried-chicken-momos",
    name: "Fried Chicken Momos - 6 pcs",
    description: "6 pieces of crispy golden chicken momos.",
    price: 150,
    image: imagePath("fried-chicken-momos.png"),
  },
  {
    id: "steam-veg-momos",
    name: "Steamed Veg Momos - 10 pcs",
    description: "10 pieces of soft steamed momos with veggie filling.",
    price: 160,
    image: imagePath("steam-veg-momos.png"),
  },
  {
    id: "fried-veg-momos",
    name: "Fried Veg Momos - 6 pcs",
    description: "6 pieces of crunchy fried momos with veggie filling.",
    price: 150,
    image: imagePath("fried-veg-momos.png"),
  },
],


    "grilled-chicken": [
        {
            id: "grilled-half",
            name: "Grilled Chicken - Single",
            description: "Smoky grilled chicken, half portion.",
            price: 100,
            image: imagePath("grilled-chicken-skewers.png"),
        },
        {
            id: "grilled-full",
            name: "Grilled Chicken - Full",
            description: "Smoky grilled chicken, full portion.",
            price: 199,
            image: imagePath("grilled-chicken-skewers.png"),
        },
    ],
};
