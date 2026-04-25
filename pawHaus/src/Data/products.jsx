import fresh from "../assets/13.png";
import pink from "../assets/12.png";
import collar from "../assets/11.png";
import slowFeeder from "../assets/9.png";
import ball from "../assets/10.png";
import leash from "../assets/8.png";

export const products = [
  {
    id: 1,
    category: "TREAT",
    name: "FRESH KISSES",
    desc: "Healthy. Tasty. Rewarding.",
    fullDesc:
      "Fresh Kisses dog treats help keep breath clean while giving your dog a satisfying chew. Made with safe ingredients and a firm texture that supports dental health.",
    price: "$16.00",
    img: fresh,

    infoTitle: "KEY INGREDIENTS",
    infoContent: "Chicken, mint, parsley, sweet potato"
  },
  {
    id: 2,
    category: "TOY",
    name: "PINK",
    desc: "Playtime made better.",
    fullDesc:
      "A fun and durable toy designed to keep your pet entertained for hours. Safe materials, bright colors, and a design dogs love.",
    price: "$25.00",
    img: pink,

    infoTitle: "MATERIAL & DURABILITY",
    infoContent: "Non-toxic rubber, durable and safe for daily chewing"
  },
  {
    id: 3,
    category: "ACCESSORY",
    name: "LEATHER COLLAR",
    desc: "Real leather, made personal.",
    fullDesc:
      "Premium real leather collar crafted for comfort and durability. Adjustable fit with a secure buckle for dogs of all sizes.",
    price: "$50.00",
    img: collar,

    infoTitle: "DETAILS & FIT",
    infoContent: "Adjustable strap, premium leather, secure metal buckle"
  },
  {
    id: 4,
    category: "TOY",
    name: "SLOW FEEDER",
    desc: "Keeps them engaged.",
    fullDesc:
      "Slow feeder bowl that makes mealtime fun and healthy. Reduces bloating and keeps your dog mentally stimulated.",
    price: "$12.00",
    img: slowFeeder,

    infoTitle: "MATERIAL & DURABILITY",
    infoContent: "Non-toxic rubber, durable and safe for daily chewing"
  },
  {
    id: 5,
    category: "TOY",
    name: "BALL",
    desc: "Durable fetch fun.",
    fullDesc:
      "Durable rubber ball built for endless fetch sessions. Floats in water and bounces unpredictably for extra excitement.",
    price: "$5.00",
    img: ball,

    infoTitle: "MATERIAL & DURABILITY",
    infoContent: "Non-toxic rubber, durable and safe for daily chewing"
  },
  {
    id: 6,
    category: "ACCESSORY",
    name: "LEASH",
    desc: "Strong, secure control.",
    fullDesc:
      "Strong and secure leash made from premium materials. Comfortable grip handle with a reliable clip for safe walks.",
    price: "$10.00",
    img: leash,

    infoTitle: "DETAILS & FIT",
    infoContent: "Adjustable strap, premium leather, secure metal buckle"
  },
];

export const filters = ["SHOP ALL", "TREAT", "TOY", "ACCESSORY"];