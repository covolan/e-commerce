import mp1 from "./man-pic-1.png";
import mp2 from "./man-pic-2.png";
import mp3 from "./man-pic-3.png";
import mp4 from "./man-pic-4.png";
import mp5 from "./man-pic-5.png";
import wp1 from "./woman-pic-1.png";
import wp2 from "./woman-pic-2.png";
import wp3 from "./woman-pic-3.png";
import wp4 from "./woman-pic-4.png";
import wp5 from "./woman-pic-5.png";

let comments = [
  {
    id: 1,
    comments: [
      {
        name: "John Anderson",
        image: mp1,
        rating: 4,
        comment:
          "Excellent quality! The Logitech mouse is extremely comfortable and responsive. Perfect for long work or gaming sessions.",
      },
      {
        name: "Emily Roberts",
        image: wp1,
        rating: 5,
        comment:
          "Ergonomic design and impeccable precision. This mouse exceeds all my expectations. I recommend it to everyone!",
      },
      {
        name: "Michael Thompson",
        image: mp2,
        rating: 4,
        comment:
          "The battery life is impressive. I don't have to worry about recharging all the time. Logitech hit the mark with this model!",
      },
      {
        name: "Sophia Martinez",
        image: wp3,
        rating: 4,
        comment:
          "Works perfectly on different surfaces and the wireless connection is stable and fast. Best investment I've made in peripherals.",
      },
      {
        name: "David Wilson",
        image: mp5,
        rating: 5,
        comment:
          "Besides being super stylish, the mouse is very quiet and smooth. Ideal for those who work in environments that require silence. Logitech really knows how to please its customers.",
      },
    ],
  },
  {
    id: 2,
    comments: [
      {
        name: "Anna Johnson",
        image: wp2,
        rating: 5,
        comment:
          "This office mouse is fantastic! The ergonomic design makes it comfortable for all-day use, and the precision is top-notch. Highly recommended!",
      },
      {
        name: "Mark Davis",
        image: mp2,
        rating: 4,
        comment:
          "Great office mouse with excellent battery life. It's very responsive and works smoothly on various surfaces. Definitely worth the purchase.",
      },
      {
        name: "Sarah Lee",
        image: wp1,
        rating: 5,
        comment:
          "I love this mouse! It's super quiet and perfect for a shared office space. The sleek design also adds a nice touch to my desk setup.",
      },
      {
        name: "James Wilson",
        image: mp5,
        rating: 4,
        comment:
          "Solid performance and comfortable to use. The wireless connectivity is reliable and quick. A great addition to my office equipment.",
      },
      {
        name: "Karen Mitchell",
        image: wp3,
        rating: 3,
        comment:
          "The mouse is decent for everyday office tasks. It's not the most comfortable I've used, but it gets the job done. Could be better for long hours of use.",
      },
    ],
  },
  {
    id: 3,
    comments: [
      {
        name: "Jessica Brown",
        image: wp4,
        rating: 3,
        comment:
          "The keyboard is decent for daily office tasks. It's functional but doesn't have any standout features. Good for basic use.",
      },
      {
        name: "Daniel Smith",
        image: mp2,
        rating: 3,
        comment:
          "It's an average keyboard. The keys are a bit stiff, but it works fine for typing. Could be more comfortable for extended use.",
      },
      {
        name: "Laura Evans",
        image: wp3,
        rating: 3,
        comment:
          "This keyboard gets the job done, but there's nothing special about it. It's reliable, but I wish the keys were quieter.",
      },
      {
        name: "Robert Garcia",
        image: mp1,
        rating: 3,
        comment:
          "An okay keyboard for office work. The design is simple and it performs adequately. Not the best for long typing sessions.",
      },
      {
        name: "Megan Lee",
        image: wp1,
        rating: 2,
        comment:
          "I'm not very satisfied with this keyboard. The keys are too hard to press and it feels cheap. Would not recommend for heavy use.",
      },
    ],
  },
  {
    id: 4,
    comments: [
      {
        name: "Oliver Williams",
        image: mp2,
        rating: 5,
        comment:
          "This keyboard is fantastic! The keys are incredibly responsive and the overall build quality is excellent. Perfect for long hours of work.",
      },
      {
        name: "Emma Johnson",
        image: wp2,
        rating: 4,
        comment:
          "Great keyboard for office use. It's comfortable and the keys have a nice tactile feel. A great addition to my workspace.",
      },
      {
        name: "Liam Brown",
        image: mp4,
        rating: 5,
        comment:
          "I love this keyboard! The design is sleek, and it feels very sturdy. Typing on it is a pleasure, and it's very quiet too.",
      },
      {
        name: "Sophia Taylor",
        image: wp4,
        rating: 4,
        comment:
          "Very good keyboard with smooth keystrokes. It's well-designed and looks great on my desk. Highly recommend for any office setting.",
      },
      {
        name: "Mason Davis",
        image: mp1,
        rating: 3,
        comment:
          "This keyboard is decent for everyday use. It's comfortable enough, but there are better options out there for the price. Overall, it's an okay product.",
      },
    ],
  },
  {
    id: 5,
    comments: [
      {
        name: "Ethan Roberts",
        image: mp2,
        rating: 3,
        comment:
          "The speakers are okay for casual listening. The sound quality is decent but lacks bass. Good enough for basic use.",
      },
      {
        name: "Chloe Harris",
        image: wp2,
        rating: 3,
        comment:
          "These speakers are average. They work well for video calls and light music, but they don't excel in any particular area. An acceptable choice for the price.",
      },
      {
        name: "Aiden Clark",
        image: mp3,
        rating: 3,
        comment:
          "The sound is clear, but the volume doesn't get very high. They're fine for an office setting but not great for immersive audio experiences.",
      },
      {
        name: "Ella White",
        image: wp3,
        rating: 3,
        comment:
          "An adequate set of speakers for the office. The build quality is good, but the audio lacks depth. Overall, they do the job.",
      },
      {
        name: "Lucas Martinez",
        image: mp4,
        rating: 2,
        comment:
          "I'm disappointed with these speakers. The sound quality is subpar, and there's noticeable distortion at higher volumes. I wouldn't recommend them.",
      },
    ],
  },
  {
    id: 6,
    comments: [
      {
        name: "Alex Johnson",
        image: mp2,
        rating: 5,
        comment:
          "The 4K display is stunning! The picture quality is crystal clear, and the colors are incredibly vibrant. Perfect for both work and entertainment.",
      },
      {
        name: "Natalie Brown",
        image: wp2,
        rating: 5,
        comment:
          "Absolutely love this 4K monitor! The resolution is amazing, and the screen real estate is perfect for multitasking. Highly recommended!",
      },
      {
        name: "Ethan Smith",
        image: mp5,
        rating: 5,
        comment:
          "This 4K display exceeded my expectations. The sharpness and detail are remarkable, making it ideal for graphic design and video editing.",
      },
      {
        name: "Olivia Williams",
        image: wp5,
        rating: 5,
        comment:
          "Fantastic 4K display! The colors are true to life, and the brightness is perfect. Great for watching movies and playing games.",
      },
      {
        name: "Liam Davis",
        image: mp1,
        rating: 4,
        comment:
          "Very pleased with this 4K monitor. The picture quality is outstanding, and it has really enhanced my productivity. A great investment!",
      },
    ],
  },
  {
    id: 7,
    comments: [
      {
        name: "John Anderson",
        image: mp1,
        rating: 4,
        comment:
          "Excellent quality! The Logitech mouse is extremely comfortable and responsive. Perfect for long work or gaming sessions.",
      },
      {
        name: "Emily Roberts",
        image: wp1,
        rating: 5,
        comment:
          "Ergonomic design and impeccable precision. This mouse exceeds all my expectations. I recommend it to everyone!",
      },
      {
        name: "Michael Thompson",
        image: mp2,
        rating: 4,
        comment:
          "The battery life is impressive. I don't have to worry about recharging all the time. Logitech hit the mark with this model!",
      },
      {
        name: "Sophia Martinez",
        image: wp3,
        rating: 4,
        comment:
          "Works perfectly on different surfaces and the wireless connection is stable and fast. Best investment I've made in peripherals.",
      },
      {
        name: "David Wilson",
        image: mp5,
        rating: 5,
        comment:
          "Besides being super stylish, the mouse is very quiet and smooth. Ideal for those who work in environments that require silence. Logitech really knows how to please its customers.",
      },
    ],
  },
  {
    id: 8,
    comments: [
      {
        name: "Anna Johnson",
        image: wp2,
        rating: 5,
        comment:
          "This office mouse is fantastic! The ergonomic design makes it comfortable for all-day use, and the precision is top-notch. Highly recommended!",
      },
      {
        name: "Mark Davis",
        image: mp2,
        rating: 4,
        comment:
          "Great office mouse with excellent battery life. It's very responsive and works smoothly on various surfaces. Definitely worth the purchase.",
      },
      {
        name: "Sarah Lee",
        image: wp1,
        rating: 5,
        comment:
          "I love this mouse! It's super quiet and perfect for a shared office space. The sleek design also adds a nice touch to my desk setup.",
      },
      {
        name: "James Wilson",
        image: mp5,
        rating: 4,
        comment:
          "Solid performance and comfortable to use. The wireless connectivity is reliable and quick. A great addition to my office equipment.",
      },
      {
        name: "Karen Mitchell",
        image: wp3,
        rating: 3,
        comment:
          "The mouse is decent for everyday office tasks. It's not the most comfortable I've used, but it gets the job done. Could be better for long hours of use.",
      },
    ],
  },
  {
    id: 9,
    comments: [
      {
        name: "Jessica Brown",
        image: wp4,
        rating: 3,
        comment:
          "The keyboard is decent for daily office tasks. It's functional but doesn't have any standout features. Good for basic use.",
      },
      {
        name: "Daniel Smith",
        image: mp2,
        rating: 3,
        comment:
          "It's an average keyboard. The keys are a bit stiff, but it works fine for typing. Could be more comfortable for extended use.",
      },
      {
        name: "Laura Evans",
        image: wp3,
        rating: 3,
        comment:
          "This keyboard gets the job done, but there's nothing special about it. It's reliable, but I wish the keys were quieter.",
      },
      {
        name: "Robert Garcia",
        image: mp1,
        rating: 3,
        comment:
          "An okay keyboard for office work. The design is simple and it performs adequately. Not the best for long typing sessions.",
      },
      {
        name: "Megan Lee",
        image: wp1,
        rating: 2,
        comment:
          "I'm not very satisfied with this keyboard. The keys are too hard to press and it feels cheap. Would not recommend for heavy use.",
      },
    ],
  },
  {
    id: 10,
    comments: [
      {
        name: "Oliver Williams",
        image: mp2,
        rating: 5,
        comment:
          "This keyboard is fantastic! The keys are incredibly responsive and the overall build quality is excellent. Perfect for long hours of work.",
      },
      {
        name: "Emma Johnson",
        image: wp2,
        rating: 4,
        comment:
          "Great keyboard for office use. It's comfortable and the keys have a nice tactile feel. A great addition to my workspace.",
      },
      {
        name: "Liam Brown",
        image: mp4,
        rating: 5,
        comment:
          "I love this keyboard! The design is sleek, and it feels very sturdy. Typing on it is a pleasure, and it's very quiet too.",
      },
      {
        name: "Sophia Taylor",
        image: wp4,
        rating: 4,
        comment:
          "Very good keyboard with smooth keystrokes. It's well-designed and looks great on my desk. Highly recommend for any office setting.",
      },
      {
        name: "Mason Davis",
        image: mp1,
        rating: 3,
        comment:
          "This keyboard is decent for everyday use. It's comfortable enough, but there are better options out there for the price. Overall, it's an okay product.",
      },
    ],
  },
  {
    id: 11,
    comments: [
      {
        name: "Ethan Roberts",
        image: mp2,
        rating: 3,
        comment:
          "The speakers are okay for casual listening. The sound quality is decent but lacks bass. Good enough for basic use.",
      },
      {
        name: "Chloe Harris",
        image: wp2,
        rating: 3,
        comment:
          "These speakers are average. They work well for video calls and light music, but they don't excel in any particular area. An acceptable choice for the price.",
      },
      {
        name: "Aiden Clark",
        image: mp3,
        rating: 3,
        comment:
          "The sound is clear, but the volume doesn't get very high. They're fine for an office setting but not great for immersive audio experiences.",
      },
      {
        name: "Ella White",
        image: wp3,
        rating: 3,
        comment:
          "An adequate set of speakers for the office. The build quality is good, but the audio lacks depth. Overall, they do the job.",
      },
      {
        name: "Lucas Martinez",
        image: mp4,
        rating: 2,
        comment:
          "I'm disappointed with these speakers. The sound quality is subpar, and there's noticeable distortion at higher volumes. I wouldn't recommend them.",
      },
    ],
  },
  {
    id: 12,
    comments: [
      {
        name: "Alex Johnson",
        image: mp2,
        rating: 5,
        comment:
          "The 4K display is stunning! The picture quality is crystal clear, and the colors are incredibly vibrant. Perfect for both work and entertainment.",
      },
      {
        name: "Natalie Brown",
        image: wp2,
        rating: 5,
        comment:
          "Absolutely love this 4K monitor! The resolution is amazing, and the screen real estate is perfect for multitasking. Highly recommended!",
      },
      {
        name: "Ethan Smith",
        image: mp5,
        rating: 5,
        comment:
          "This 4K display exceeded my expectations. The sharpness and detail are remarkable, making it ideal for graphic design and video editing.",
      },
      {
        name: "Olivia Williams",
        image: wp5,
        rating: 5,
        comment:
          "Fantastic 4K display! The colors are true to life, and the brightness is perfect. Great for watching movies and playing games.",
      },
      {
        name: "Liam Davis",
        image: mp1,
        rating: 4,
        comment:
          "Very pleased with this 4K monitor. The picture quality is outstanding, and it has really enhanced my productivity. A great investment!",
      },
    ],
  },
  {
    id: 13,
    comments: [
      {
        name: "David Smith",
        image: mp5,
        rating: 5,
        comment:
          "The Fortrek gaming headset is amazing! The sound quality is crystal clear and the bass is powerful. It's perfect for immersive gaming experiences.",
      },
      {
        name: "Emma Thompson",
        image: wp4,
        rating: 4,
        comment:
          "Great headset for gaming! The comfort level is top-notch, and the microphone clarity is excellent. Definitely a great value for the price.",
      },
      {
        name: "Lucas Brown",
        image: mp3,
        rating: 5,
        comment:
          "I love this Fortrek gaming headset! The surround sound enhances my gameplay, and the build quality feels premium. Highly recommend!",
      },
      {
        name: "Sophia Garcia",
        image: wp2,
        rating: 5,
        comment:
          "This headset exceeded my expectations. The noise-canceling feature is fantastic, and it's super comfortable for long gaming sessions.",
      },
      {
        name: "Noah Martinez",
        image: mp1,
        rating: 4,
        comment:
          "Very satisfied with this Fortrek headset. The sound is rich and detailed, and the design is stylish and comfortable. Great for both gaming and music.",
      },
    ],
  },
  {
    id: 14,
    comments: [
      {
        name: "Emily Johnson",
        image: wp1,
        rating: 5,
        comment:
          "The HyperX gaming keyboard is phenomenal! The mechanical switches are responsive and the RGB lighting is stunning. A must-have for any gamer.",
      },
      {
        name: "Daniel Brown",
        image: mp1,
        rating: 5,
        comment:
          "Absolutely love this HyperX keyboard! The build quality is exceptional, and the customizable keys make gaming sessions a breeze. Highly recommended!",
      },
      {
        name: "Sophia Lee",
        image: wp5,
        rating: 5,
        comment:
          "This HyperX gaming keyboard is top-tier! The key feedback is perfect for fast-paced gaming, and the design is sleek. I'm impressed!",
      },
      {
        name: "Jack Wilson",
        image: mp4,
        rating: 5,
        comment:
          "Fantastic gaming keyboard from HyperX! The anti-ghosting feature is great for competitive gaming, and the keys are durable. Worth every penny!",
      },
      {
        name: "Olivia Martinez",
        image: wp3,
        rating: 4,
        comment:
          "Very pleased with this HyperX keyboard. The tactile feel is excellent, and the build quality is solid. A great addition to my gaming setup!",
      },
    ],
  },

  {
    id: 15,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 16,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 17,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 18,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 19,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 20,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 21,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 22,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 23,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 24,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 25,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 26,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 27,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 28,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 29,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 30,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 31,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 32,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 33,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 34,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 35,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 36,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 37,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 38,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 39,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 40,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
  {
    id: 41,
    comments: [
      {
        name: "Lucas Silva",
        image: mp2,
        rating: 5,
        comment:
          "The Intelbras 1080p webcam is fantastic! The video quality is crisp and clear, perfect for video calls and streaming. Highly recommend!",
      },
      {
        name: "Isabella Santos",
        image: wp3,
        rating: 5,
        comment:
          "Love this Intelbras webcam! The autofocus works flawlessly, and the microphone captures clear audio. Great for remote work and virtual meetings.",
      },
      {
        name: "Pedro Costa",
        image: mp5,
        rating: 5,
        comment:
          "Impressed with the Intelbras 1080p webcam! The wide-angle lens is great for group calls, and the setup was easy. A must-have for home office setups.",
      },
      {
        name: "Juliana Oliveira",
        image: wp4,
        rating: 5,
        comment:
          "This Intelbras webcam exceeded my expectations. The image quality is sharp even in low light conditions, and the software is user-friendly.",
      },
      {
        name: "Felipe Almeida",
        image: mp3,
        rating: 4,
        comment:
          "Very satisfied with this Intelbras webcam. The video is clear and the microphone is decent. A reliable choice for online communication.",
      },
    ],
  },
];

export default comments;
