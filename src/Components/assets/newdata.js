import mouseImg1 from "./logitech-mouse1.jpg";
import mouseImg2 from "./logitech-mouse2.jpg";
import mouseImg3 from "./logitech-mouse3.jpg";
import mouseImg4 from "./logitech-mouse4.jpg";
import MSMouse1 from "./microsoft-mouse1.jpg";
import MSMouse2 from "./microsoft-mouse2.jpg";
import MSMouse3 from "./microsoft-mouse3.jpg";
import MSMouse4 from "./microsoft-mouse4.jpg";
import KeyboardMulti1 from "./teclado-multi1.jpg";
import KeyboardMulti2 from "./teclado-multi2.jpg";
import KeyboardMulti3 from "./teclado-multi3.jpg";
import KeyboardLogi1 from "./logitech-keyboard1.jpg";
import KeyboardLogi2 from "./logitech-keyboard2.jpg";
import KeyboardLogi3 from "./logitech-keyboard3.jpg";
import KeyboardLogi4 from "./logitech-keyboard4.jpg";
import SoundBoxMulti1 from "./sound-box1.jpg"
import SoundBoxMulti2 from "./sound-box2.jpg"
import SoundBoxMulti3 from "./sound-box3.jpg"
import Screen4k1 from "./screen1.jpg"
import Screen4k2 from "./screen2.jpg"
import Screen4k3 from "./screen3.jpg"
import Screen4k4 from "./screen4.jpg"

let productData = [
  {
    id: 1,
    productName: "Mouse",
    price: 29,
    prevPrice: 35,
    image: [mouseImg1, mouseImg2, mouseImg3, mouseImg4],
    popular: true,
    category: "office",
    rating: 4,
    description:
      "Upgrade your workspace with our dependable and comfortable office mouse, designed to enhance your productivity and comfort throughout the workday. This sleek and modern mouse combines functionality with an ergonomic design, ensuring a pleasant user experience.",
  },
  {
    id: 2,
    productName: "Mouse MS",
    price: 50,
    prevPrice: 70,
    image: [MSMouse1, MSMouse2, MSMouse3, MSMouse4],
    popular: true,
    category: "office",
    rating: 4,
    description:
      "Upgrade your workspace with our dependable and comfortable office mouse, designed to enhance your productivity and comfort throughout the workday. This sleek and modern mouse combines functionality with an ergonomic design, ensuring a pleasant user experience.",
  },
  {
    id: 3,
    productName: "Keyboard Multi",
    price: 20,
    prevPrice: 0,
    image: [KeyboardMulti1, KeyboardMulti2, KeyboardMulti3],
    popular: true,
    category: "office",
    rating: 3,
    description:
      "This keyboard is ideal for providing high quality, practicality, and simplicity to your daily life. With Plug and Play connection technology, simply plug in the USB input and start using it. The keyboard is water-resistant and features a compact design to take up less space.",
  },
  {
    id: 4,
    productName: "Logitech Keyboard",
    price: 65,
    prevPrice: 80,
    image: [KeyboardLogi1, KeyboardLogi2, KeyboardLogi3, KeyboardLogi4],
    popular: true,
    category: "office",
    rating: 4,
    description:
      "The Logitech K120 Wired Keyboard offers a comfortable typing experience with low-profile, quiet keys and a full-size layout including F-keys and a numeric keypad. It features a spill-resistant design, durable keys, and plug-and-play USB connectivity for easy setup on desktops, laptops, or notebooks. The keyboard's slim profile adds elegance to your workspace while maintaining comfort with adjustable tilt legs. Bright white characters ensure readability and durability, backed by Logitech's reliability and a three-year warranty.",
  },
  {
    id: 5,
    productName: "Sound Box Multi",
    price: 44,
    prevPrice: 60,
    image: [SoundBoxMulti1, SoundBoxMulti2, SoundBoxMulti3],
    popular: true,
    category: "office",
    rating: 3,
    description:
      "Bring more sound quality to your home! Discreet and compact, the Multilaser SP093 Speakers perfectly complement your computer. They feature USB connectivity, 1W RMS power, and a distinctive look. They offer easy connection to notebooks, ultrabooks, or PCs, while taking up minimal space on desks or work areas.",
  },
  {
    id: 6,
    productName: "4k Screen",
    price: 1500,
    prevPrice: 0,
    image: [Screen4k1, Screen4k2, Screen4k3, Screen4k4],
    popular: true,
    category: "office",
    rating: 5,
    description: "The LG 27-Inch UHD 4K Professional Monitor delivers an exceptional visual experience with HDR support, including VESA DisplayHDR 400, providing enhanced brightness and contrast. It improves tone mapping and lighting of SDR content for an HDR-like experience. Perfect for gaming, the 27UP650-W monitor includes technologies such as AMD FreeSync, Game Mode, Black Stabilizer, and Dynamic Action Sync, ensuring superior image quality and optimized performance. Additionally, FreeSync Premium technology ensures smooth and fluid movements, minimizing blurs and screen tearing.",
    },
    {
      id: 7,
      productName: "Mouse",
      price: 29,
      prevPrice: 35,
      image: [mouseImg1, mouseImg2, mouseImg3, mouseImg4],
      popular: false,
      category: "gaming",
      rating: 4,
      description:
        "Upgrade your workspace with our dependable and comfortable office mouse, designed to enhance your productivity and comfort throughout the workday. This sleek and modern mouse combines functionality with an ergonomic design, ensuring a pleasant user experience.",
    },
    {
      id: 8,
      productName: "Mouse MS",
      price: 50,
      prevPrice: 70,
      image: [MSMouse1, MSMouse2, MSMouse3, MSMouse4],
      popular: false,
      category: "gaming",
      rating: 4,
      description:
        "Upgrade your workspace with our dependable and comfortable office mouse, designed to enhance your productivity and comfort throughout the workday. This sleek and modern mouse combines functionality with an ergonomic design, ensuring a pleasant user experience.",
    },
    {
      id: 9,
      productName: "Keyboard Multi",
      price: 20,
      prevPrice: 0,
      image: [KeyboardMulti1, KeyboardMulti2, KeyboardMulti3],
      popular: false,
      category: "gaming",
      rating: 3,
      description:
        "This keyboard is ideal for providing high quality, practicality, and simplicity to your daily life. With Plug and Play connection technology, simply plug in the USB input and start using it. The keyboard is water-resistant and features a compact design to take up less space.",
    },
    {
      id: 10,
      productName: "Logitech Keyboard",
      price: 65,
      prevPrice: 80,
      image: [KeyboardLogi1, KeyboardLogi2, KeyboardLogi3, KeyboardLogi4],
      popular: false,
      category: "gaming",
      rating: 4,
      description:
        "The Logitech K120 Wired Keyboard offers a comfortable typing experience with low-profile, quiet keys and a full-size layout including F-keys and a numeric keypad. It features a spill-resistant design, durable keys, and plug-and-play USB connectivity for easy setup on desktops, laptops, or notebooks. The keyboard's slim profile adds elegance to your workspace while maintaining comfort with adjustable tilt legs. Bright white characters ensure readability and durability, backed by Logitech's reliability and a three-year warranty.",
    },
    {
      id: 11,
      productName: "Sound Box Multi",
      price: 44,
      prevPrice: 60,
      image: [SoundBoxMulti1, SoundBoxMulti2, SoundBoxMulti3],
      popular: false,
      category: "gaming",
      rating: 3,
      description:
        "Bring more sound quality to your home! Discreet and compact, the Multilaser SP093 Speakers perfectly complement your computer. They feature USB connectivity, 1W RMS power, and a distinctive look. They offer easy connection to notebooks, ultrabooks, or PCs, while taking up minimal space on desks or work areas.",
    },
    {
      id: 12,
      productName: "4k Screen",
      price: 1500,
      prevPrice: 0,
      image: [Screen4k1, Screen4k2, Screen4k3, Screen4k4],
      popular: false,
      category: "gaming",
      rating: 5,
      description: "The LG 27-Inch UHD 4K Professional Monitor delivers an exceptional visual experience with HDR support, including VESA DisplayHDR 400, providing enhanced brightness and contrast. It improves tone mapping and lighting of SDR content for an HDR-like experience. Perfect for gaming, the 27UP650-W monitor includes technologies such as AMD FreeSync, Game Mode, Black Stabilizer, and Dynamic Action Sync, ensuring superior image quality and optimized performance. Additionally, FreeSync Premium technology ensures smooth and fluid movements, minimizing blurs and screen tearing.",
      }
];

export default productData
