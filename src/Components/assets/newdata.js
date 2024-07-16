import mouseImg1 from "./images/logitech-mouse1.jpg";
import mouseImg2 from "./images/logitech-mouse2.jpg";
import mouseImg3 from "./images/logitech-mouse3.jpg";
import mouseImg4 from "./images/logitech-mouse4.jpg";
import MSMouse1 from "./images/microsoft-mouse1.jpg";
import MSMouse2 from "./images/microsoft-mouse2.jpg";
import MSMouse3 from "./images/microsoft-mouse3.jpg";
import MSMouse4 from "./images/microsoft-mouse4.jpg";
import KeyboardMulti1 from "./images/teclado-multi1.jpg";
import KeyboardMulti2 from "./images/teclado-multi2.jpg";
import KeyboardMulti3 from "./images/teclado-multi3.jpg";
import KeyboardLogi1 from "./images/logitech-keyboard1.jpg";
import KeyboardLogi2 from "./images/logitech-keyboard2.jpg";
import KeyboardLogi3 from "./images/logitech-keyboard3.jpg";
import KeyboardLogi4 from "./images/logitech-keyboard4.jpg";
import SoundBoxMulti1 from "./images/sound-box1.jpg";
import SoundBoxMulti2 from "./images/sound-box2.jpg";
import SoundBoxMulti3 from "./images/sound-box3.jpg";
import Screen4k1 from "./images/screen1.jpg";
import Screen4k2 from "./images/screen2.jpg";
import Screen4k3 from "./images/screen3.jpg";
import Screen4k4 from "./images/screen4.jpg";
import FortrekHeadset1 from "./images/fortrek-headphone1.jpg";
import FortrekHeadset2 from "./images/fortrek-headphone2.jpg";
import FortrekHeadset3 from "./images/fortrek-headphone3.jpg";
import KBDHyperx1 from "./images/keyboard-hyperx1.jpg";
import KBDHyperx2 from "./images/keyboard-hyperx2.jpg";
import KBDHyperx3 from "./images/keyboard-hyperx3.jpg";
import KBDHyperx4 from "./images/keyboard-hyperx4.jpg";
import IntelWebcam1 from "./images/intelbras-webcam1.jpg";
import IntelWebcam2 from "./images/intelbras-webcam2.jpg";
import IntelWebcam3 from "./images/intelbras-webcam3.jpg";
import Placeholder from "./images/placeholder.jpg";

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
      "Upgrade your workspace with our dependable and comfortable office mouse, designed to enhance your productivity and comfort throughout the workday.\n This sleek and modern mouse combines functionality with an ergonomic design, ensuring a pleasant user experience.",
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
      "The Logitech K120 Wired Keyboard offers a comfortable typing experience with low-profile, quiet keys and a full-size layout including F-keys and a numeric keypad. It features a spill-resistant design, durable keys, and plug-and-play USB connectivity for easy setup on desktops, laptops, or notebooks.\n The keyboard's slim profile adds elegance to your workspace while maintaining comfort with adjustable tilt legs. Bright white characters ensure readability and durability, backed by Logitech's reliability and a three-year warranty.",
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
    description:
      "The LG 27-Inch UHD 4K Professional Monitor delivers an exceptional visual experience with HDR support, including VESA DisplayHDR 400, providing enhanced brightness and contrast. It improves tone mapping and lighting of SDR content for an HDR-like experience.\n Perfect for gaming, the 27UP650-W monitor includes technologies such as AMD FreeSync, Game Mode, Black Stabilizer, and Dynamic Action Sync, ensuring superior image quality and optimized performance. Additionally, FreeSync Premium technology ensures smooth and fluid movements, minimizing blurs and screen tearing.",
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
      "The Logitech K120 Wired Keyboard offers a comfortable typing experience with low-profile, quiet keys and a full-size layout including F-keys and a numeric keypad. It features a spill-resistant design, durable keys, and plug-and-play USB connectivity for easy setup on desktops, laptops, or notebooks.\n The keyboard's slim profile adds elegance to your workspace while maintaining comfort with adjustable tilt legs. Bright white characters ensure readability and durability, backed by Logitech's reliability and a three-year warranty.",
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
    description:
      "The LG 27-Inch UHD 4K Professional Monitor delivers an exceptional visual experience with HDR support, including VESA DisplayHDR 400, providing enhanced brightness and contrast. It improves tone mapping and lighting of SDR content for an HDR-like experience.\n Perfect for gaming, the 27UP650-W monitor includes technologies such as AMD FreeSync, Game Mode, Black Stabilizer, and Dynamic Action Sync, ensuring superior image quality and optimized performance. Additionally, FreeSync Premium technology ensures smooth and fluid movements, minimizing blurs and screen tearing.",
  },
  {
    id: 13,
    productName: "Headset Fortrek",
    price: 199,
    prevPrice: 255,
    image: [FortrekHeadset1, FortrekHeadset2, FortrekHeadset3],
    popular: true,
    category: "gaming",
    rating: 5,
    description:
      "Introducing the Fortrek PRO H2 Gaming Headset, an ideal choice for gamers seeking professional performance. Equipped with flexible bands and cushioned earphones, it provides comfort during long gaming sessions.\n The modern design includes blue LED lighting on the sides, while the noise-canceling microphone ensures clear communication without external interference. The integrated volume controller, discreetly located behind the left earphone, offers additional convenience for adjusting audio during gameplay.\n Lightweight and comfortable, weighing only 318 grams, the Fortrek PRO H2 headset is a pleasant choice for any gamer. Additionally, its 2-meter braided cable provides exceptional durability and freedom of movement, eliminating concerns about distance.\n Elevate your gaming experience with the Fortrek PRO H2 Gaming Headset and immerse yourself in superior quality audio.",
  },
  {
    id: 14,
    productName: "Keyboard HyperX",
    price: 99,
    prevPrice: 150,
    image: [KBDHyperx1, KBDHyperx2, KBDHyperx3, KBDHyperx4],
    popular: true,
    category: "gaming",
    rating: 5,
    description:
      "Illuminate your gaming setup with radiant per-key lighting and dynamic effects that add a touch of style to your PC setup. Durable Aluminum Frame The Alloy MKW100 features a solid aluminum frame designed to provide stability during intense typing sessions.\n The removable wrist rest helps reduce fatigue during long gaming or work sessions. Responsive and Reliable Dust-Proof Switches Equipped with dust-proof mechanical switches rated for up to 50 million keystrokes, the Alloy MKW100 ensures lasting reliability and quiet operation. The gold-plated USB connector prevents corrosion, while the braided fabric enhances cable longevity for years of dependable use.\n Customize the RGB light show of the Alloy MKW100 with the powerful and user-friendly HyperX NGENUITY software.Experience superior performance and style with the HyperX Alloy MKW100 Keyboard.",
  },

  {
    id: 15,
    productName: "IntellBrass Webcam",
    price: 144,
    prevPrice: 290,
    image: [IntelWebcam1, IntelWebcam2, IntelWebcam3],
    popular: true,
    category: "office",
    rating: 5,
    description:
      "Experience high-quality visuals with Full HD (1080p) resolution. The CAM 1080p delivers sharper videos and more vibrant colors with processed and balanced images. Beamforming Audio Technology This advanced technology focuses audio capture on the focal point, providing clearer sound with less environmental interference.\n Enhanced Security with Privacy Shutter Ensure your privacy with a built-in privacy shutter that covers the lens when the camera is not in use. Additionally, an LED indicator shows when the camera is active. Flexibility and Performance The CAM 1080p is compatible with videoconferencing apps and can be easily mounted on a tripod.\n It also features a 360º horizontal and 90° vertical adjustable mount, along with a 2.1 m independent USB cable for optimal positioning and convenience. Elevate your audiovisual experience with the CAM 1080p, designed for superior video quality and secure, clear audio.",
  },
  {
    id: 16,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 17,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 18,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 19,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 20,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 21,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 22,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 23,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 24,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 25,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 26,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 27,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 28,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "gaming",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 29,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 30,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 31,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 32,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 33,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 34,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 35,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 36,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 37,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 38,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 39,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 40,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
  {
    id: 41,
    productName: "Placeholder Item",
    price: 1,
    prevPrice: 0,
    image: [Placeholder, Placeholder, Placeholder, Placeholder],
    popular: false,
    category: "office",
    rating: 4,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum justo id neque sodales, nec rhoncus velit consectetur. Integer et ex magna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed consectetur facilisis dui, eu finibus mauris malesuada quis.\n Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus consequat elementum elementum. Donec nisl felis, eleifend eget quam sit amet, porttitor tincidunt sem. Curabitur vulputate est volutpat ante hendrerit interdum. Mauris ullamcorper varius ullamcorper. Integer dapibus fermentum mi sit amet feugiat.\n In dictum nec felis id euismod. Nullam eleifend placerat urna, sit amet tincidunt tortor laoreet vitae. Donec in urna nec tortor sagittis cursus at sed magna. Nam id tellus id elit bibendum sollicitudin. In porttitor enim ante, id imperdiet libero pellentesque eget.",
  },
];

export default productData;
