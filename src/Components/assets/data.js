import keyboardImage from "./keyboard.png";
import mouseImage from "./mouse.jpeg";

let productData = [
  {
    id: 1,
    productName: "Keyboard",
    image: keyboardImage,
    price: 99,
    prevPrice: 120,
    popular: false,
    category: "office"
  },
  {
    id: 2,
    productName: "Mouse",
    image: mouseImage,
    price: 46.5,
    prevPrice: 60,
    popular: true,
    category: "gaming"
  },
];

export default productData;