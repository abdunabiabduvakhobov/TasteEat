import RawScallops from '../../assets/icons/ppp.png';
import SpringRoll from '../../assets/icons/lavash.png';
import TomatoBruschetta from  '../../assets/icons/sup.png';
import FrenchOnionSoup from '../../assets/icons/jo.png';
import FrenchOnion from '../../assets/icons/salat.png';
import Roast from '../../assets/icons/stek.png';
import Marrkesh from '../../assets/icons/senvich.png';
import Spicy from '../../assets/icons/sel.png';
import Apple from '../../assets/icons/pa.png';
import Lemon from '../../assets/icons/poliichka.png';
 export const menu = [
  { 
    name: 'Starters', 
    dishes: [
      {
        dishName: "Raw Scallops from Erquy", 
        description: "Shuck the scallop as you would for oysters", 
        image: RawScallops, 
        price: "$40"
      },
      {
        dishName: "Spring Roll", 
        description: "Add oil to a hot pan, sauté spring onion whites", 
        image:  SpringRoll , 
        price: "$20"
      },
      {
        dishName: "French Onion Soup", 
        description: "Wheat flour, apple cider vinegar, bread", 
        image:  TomatoBruschetta, 
        price: "$25"
      },

      {
        dishName: "Tomato Bruschetta", 
        description: "Bread, olive oil, garlic, black pepper", 
        image:  FrenchOnionSoup, 
        price: "$30"
      }
    ]
  },
  
  { 
    name: 'Main Dish', 
    dishes: [
      {
        dishName: "Grilled Salmon with Dill Sauce", 
        description: "Brown sugar, salmon fillet, Dijon mustard", 
        image: FrenchOnion, 
        price: "$40"
      },
      {
        dishName: "Roast Beef with Vegetable", 
        description: "Green beans, rib eye, olive oil, beef", 
        image: Roast, 
        price: "$20"
      },
      {
        dishName: "Marrkesh Vegetetarian Curruy", 
        description: "Sweet potato, eggplant, garbanzo bean", 
        image: Marrkesh, 
        price: "$25"
      },
      {
        dishName: "Spicy Vegan Potato Curry", 
        description: "Coconut milk, beans, potatoes, curry powder", 
        image: Spicy, 
        price: "$35"
      },
    ]
  },
  
  { 
    name: 'Dessert', 
    dishes: [
      {
        dishName: "Apple Pie with Cream", 
        description: "Whipping cream, egg white, cinnamon", 
        image: Apple, 
        price: "$15"
      },
      {
        dishName: "Lemon Meringue Pie", 
        description: "Frozen pie crust, meringue, lemon ", 
        image: Lemon, 
        price: "$30"
      }
    ]
  }
];
