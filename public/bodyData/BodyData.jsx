import { BadgeCheck, CarFront, Handshake, UserStar } from "lucide-react";

export const footerMenu = [
  //first div company menu (1-6)
  {
    menuTitle: "About Us",
    menuPath: "/about-us",
  },
  {
    menuTitle: "Blog",
    menuPath: "/blog",
  },
  {
    menuTitle: "Services",
    menuPath: "/services",
  },
  {
    menuTitle: "FAQs",
    menuPath: "/faqs",
  },
  {
    menuTitle: "Terms",
    menuPath: "/terms",
  },
  {
    menuTitle: "Contact Us",
    menuPath: "/contact-us",
  },
  //second div quic links menu(7-10)
  {
    menuTitle: "Get in Touch",
    menuPath: "/get-in-touch",
  },
  {
    menuTitle: "Help center",
    menuPath: "/help-center",
  },
  {
    menuTitle: "Live Chat",
    menuPath: "/live-chat",
  },
  {
    menuTitle: "How it works",
    menuPath: "/how-it-works",
  },
  // third div our brands menu
  {
    menuTitle: "Toyota",
    menuPath: "/toyota",
  },
  {
    menuTitle: "Honda",
    menuPath: "/honda",
  },
  {
    menuTitle: "Tesla",
    menuPath: "/tesla",
  },
  {
    menuTitle: "BMW",
    menuPath: "/bmw",
  },
  {
    menuTitle: "Mercedes-Benz",
    menuPath: "/mercedes-benz",
  },
  {
    menuTitle: "Hyundai",
    menuPath: "/hyundai",
  },
  {
    menuTitle: "Ford",
    menuPath: "/ford",
  },
  {
    menuTitle: "Audi",
    menuPath: "/audi",
  },
];

export const heroBannerData = [
  {
    img: "images/hero-bg-1.jpg",
  },
  {
    img: "images/hero-bg-2.jpg",
  },
  {
    img: "images/hero-bg-3.jpg",
  },
];

export const counterData = [
  {
    start: 600,
    end: 836,
    label: "CARS FOR SALE",
    icon: <CarFront className="w-9 h-9 text-gray-700" />,
  },
  {
    start: 500,
    end: 738,
    label: "DEALER REVIEWS",
    icon: <Handshake className="w-9 h-9 text-gray-700" />,
  },
  {
    start: 700,
    end: 900,
    label: "VISITORS PER DAY",
    icon: <UserStar className="w-9 h-9 text-gray-700" />,
  },
  {
    start: 200,
    end: 450,
    label: "VERIFIED DEALERS",
    icon: <BadgeCheck className="w-9 h-9 text-gray-700" />,
  },
];
