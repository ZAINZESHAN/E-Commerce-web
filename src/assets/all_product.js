import p1_img from "./product_1.png";
import p2_img from "./product_2.png";
import p3_img from "./product_3.png";
import p4_img from "./product_4.png";
import p5_img from "./product_5.png";
import p6_img from "./product_6.png";
import p7_img from "./product_7.png";
import p8_img from "./product_8.png";
import p9_img from "./product_9.png";
import p10_img from "./product_10.png";
import p11_img from "./product_11.png";
import p12_img from "./product_12.png";
import p13_img from "./product_13.png";
import p14_img from "./product_14.png";
import p15_img from "./product_15.png";
import p16_img from "./product_16.png";
import p17_img from "./product_17.png";
import p18_img from "./product_18.png";
import p19_img from "./product_19.png";
import p20_img from "./product_20.png";
import p21_img from "./product_21.png";
import p22_img from "./product_22.png";
import p23_img from "./product_23.png";
import p24_img from "./product_24.png";
import p25_img from "./product_25.png";
import p26_img from "./product_26.png";
import p27_img from "./product_27.png";
import p28_img from "./product_28.png";
import p29_img from "./product_29.png";
import p30_img from "./product_30.png";
import p31_img from "./product_31.png";
import p32_img from "./product_32.png";
import p33_img from "./product_33.png";
import p34_img from "./product_34.png";
import p35_img from "./product_35.png";
import p36_img from "./product_36.png";

let all_product = [
  {
    id: 1,
    name: 'Striped Fluter Sleve Collar Blouse',
    category: "women",
    image: p1_img,
    new_price: 50.0,
    old_price: 80.5,
    description: "This stylish blouse features flutter sleeves and a playful striped design, perfect for a chic day out.",
    reviews: 122
  },
  {
    id: 2,
    name: "Elegant Blue Flutter Sleeve Peplum Top",
    category: "women",
    image: p2_img,
    new_price: 92.0,
    old_price: 130.5,
    description: "Elevate your wardrobe with this elegant blue peplum top, combining sophistication with a flattering fit.",
    reviews: 98
  },
  {
    id: 3,
    name: "Chic Red Ruffled Sleeve Blouse",
    category: "women",
    image: p3_img,
    new_price: 60.0,
    old_price: 100.5,
    description: "Make a bold statement in this chic red blouse, featuring ruffled sleeves that add a touch of flair.",
    reviews: 75
  },
  {
    id: 4,
    name: "Floral Print Green Peplum Top",
    category: "women",
    image: p4_img,
    new_price: 100.0,
    old_price: 150.0,
    description: "Brighten your day with this floral print peplum top, perfect for spring outings and casual gatherings.",
    reviews: 150
  },
  {
    id: 5,
    name: "Trendy Off-Shoulder Yellow Blouse",
    category: "women",
    image: p5_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Stay on-trend with this off-shoulder yellow blouse, ideal for warm weather and summer events.",
    reviews: 110
  },
  {
    id: 6,
    name: "Casual V-Neck Black Blouse",
    category: "women",
    image: p6_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This versatile black blouse features a casual V-neck design, perfect for both work and play.",
    reviews: 85
  },
  {
    id: 7,
    name: "Classic Button-Up White Blouse",
    category: "women",
    image: p7_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A wardrobe staple, this classic white button-up blouse offers timeless elegance for any occasion.",
    reviews: 95
  },
  {
    id: 8,
    name: "Sophisticated Pink Peplum Blouse",
    category: "women",
    image: p8_img,
    new_price: 115.0,
    old_price: 140.5,
    description: "Add a touch of sophistication to your outfit with this pink peplum blouse, designed to flatter.",
    reviews: 88
  },
  {
    id: 9,
    name: "Stylish High-Low Purple Blouse",
    category: "women",
    image: p9_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This stylish high-low blouse in purple is perfect for layering and adds a unique twist to your look.",
    reviews: 76
  },
  {
    id: 10,
    name: "Modern Wrap Gray Blouse",
    category: "women",
    image: p10_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Embrace modern fashion with this wrap gray blouse, offering both comfort and elegance.",
    reviews: 102
  },
  {
    id: 11,
    name: "Charming Bell Sleeve Teal Blouse",
    category: "women",
    image: p11_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This charming teal blouse features bell sleeves, perfect for adding a touch of whimsy to your outfit.",
    reviews: 90
  },
  {
    id: 12,
    name: "Luxe Satin Orange Peplum Top",
    category: "women",
    image: p12_img,
    new_price: 120.0,
    old_price: 160.5,
    description: "Shine bright in this luxe satin orange peplum top, designed for those special occasions.",
    reviews: 115
  },
  {
    id: 13,
    name: "Men's Green Solid Zippered Bomber Jacket",
    category: "men",
    image: p13_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This solid green bomber jacket is a versatile piece that adds a sporty edge to any outfit.",
    reviews: 80
  },
  {
    id: 14,
    name: "Men's Casual Navy Bomber Jacket",
    category: "men",
    image: p14_img,
    new_price: 110.0,
    old_price: 140.5,
    description: "Stay stylish and comfortable in this casual navy bomber jacket, perfect for everyday wear.",
    reviews: 70
  },
  {
    id: 15,
    name: "Men's Stylish Black Bomber Jacket",
    category: "men",
    image: p15_img,
    new_price: 185.0,
    old_price: 220.5,
    description: "This stylish black bomber jacket is a timeless piece that complements any casual ensemble.",
    reviews: 95
  },
  {
    id: 16,
    name: "Men's Trendy Red Bomber Jacket",
    category: "men",
    image: p16_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Make a statement with this trendy red bomber jacket, designed for the fashion-forward man.",
    reviews: 110
  },
  {
    id: 17,
    name: "Men's Classic Gray Bomber Jacket",
    category: "men",
    image: p17_img,
    new_price: 115.0,
    old_price: 150.5,
    description: "A classic gray bomber jacket that offers a perfect blend of style and comfort for any occasion.",
    reviews: 85
  },
  {
    id: 18,
    name: "Men's Urban Brown Bomber Jacket",
    category: "men",
    image: p18_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This urban brown bomber jacket is ideal for a rugged look while providing warmth and style.",
    reviews: 76
  },
  {
    id: 19,
    name: "Men's Fashion Orange Bomber Jacket",
    category: "men",
    image: p19_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Stand out in this fashion-forward orange bomber jacket, perfect for adding a pop of color.",
    reviews: 92
  },
  {
    id: 20,
    name: "Men's Casual Fit White Bomber Jacket",
    category: "men",
    image: p20_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This casual fit white bomber jacket is a versatile addition to your wardrobe, suitable for any season.",
    reviews: 78
  },
  {
    id: 21,
    name: "Men's Lightweight Yellow Bomber Jacket",
    category: "men",
    image: p21_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Brighten up your outfit with this lightweight yellow bomber jacket, perfect for layering.",
    reviews: 67
  },
  {
    id: 22,
    name: "Men's Versatile Blue Bomber Jacket",
    category: "men",
    image: p22_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This versatile blue bomber jacket is a must-have for any man's wardrobe, offering style and comfort.",
    reviews: 84
  },
  {
    id: 23,
    name: "Men's Essential Green Bomber Jacket",
    category: "men",
    image: p23_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "An essential green bomber jacket that pairs well with almost anything, perfect for casual outings.",
    reviews: 90
  },
  {
    id: 24,
    name: "Men's Premium Purple Bomber Jacket",
    category: "men",
    image: p24_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This premium purple bomber jacket adds a stylish touch to any outfit, making it a standout piece.",
    reviews: 115
  },
  {
    id: 25,
    name: "Boys Orange Colourblocked Hooded Sweatshirt",
    category: "kid",
    image: p25_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Keep your little one cozy in this vibrant orange colourblocked hoodie, perfect for playtime.",
    reviews: 65
  },
  {
    id: 26,
    name: "Boys Bright Yellow Colourblocked Hoodie",
    category: "kid",
    image: p26_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This bright yellow colourblocked hoodie is sure to brighten up any day for your active boy.",
    reviews: 72
  },
  {
    id: 27,
    name: "Boys Neon Green Colourblocked Hoodie",
    category: "kid",
    image: p27_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Let your child shine in this neon green colourblocked hoodie, perfect for outdoor adventures.",
    reviews: 80
  },
  {
    id: 28,
    name: "Boys Stylish Blue Colourblocked Sweatshirt",
    category: "kid",
    image: p28_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This stylish blue colourblocked sweatshirt is great for layering and adds a trendy touch.",
    reviews: 75
  },
  {
    id: 29,
    name: "Boys Cool Red Colourblocked Hoodie",
    category: "kid",
    image: p29_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Your boy will love this cool red colourblocked hoodie, perfect for casual outings and school.",
    reviews: 68
  },
  {
    id: 30,
    name: "Boys Trendy Purple Colourblocked Sweater",
    category: "kid",
    image: p30_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This trendy purple colourblocked sweater is a stylish choice for chilly days.",
    reviews: 90
  },
  {
    id: 31,
    name: "Boys Fun Pink Colourblocked Hoodie",
    category: "kid",
    image: p31_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "Add some fun to your child's wardrobe with this playful pink colourblocked hoodie.",
    reviews: 77
  },
  {
    id: 32,
    name: "Boys Sporty Gray Colourblocked Sweatshirt",
    category: "kid",
    image: p32_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This sporty gray colourblocked sweatshirt is perfect for active boys on the go.",
    reviews: 82
  },
  {
    id: 33,
    name: "Boys Classic Teal Colourblocked Hoodie",
    category: "kid",
    image: p33_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "A classic teal colourblocked hoodie that combines comfort and style for everyday wear.",
    reviews: 71
  },
  {
    id: 34,
    name: "Boys Unique Orange Colourblocked Sweatshirt",
    category: "kid",
    image: p34_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This unique orange colourblocked sweatshirt is perfect for making a bold fashion statement.",
    reviews: 86
  },
  {
    id: 35,
    name: "Boys Ultimate Brown Colourblocked Hoodie",
    category: "kid",
    image: p35_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "The ultimate brown colourblocked hoodie for boys, combining style and comfort effortlessly.",
    reviews: 89
  },
  {
    id: 36,
    name: "Boys Stylish Black Colourblocked Sweatshirt",
    category: "kid",
    image: p36_img,
    new_price: 85.0,
    old_price: 120.5,
    description: "This stylish black colourblocked sweatshirt is versatile and perfect for any casual occasion.",
    reviews: 95
  },
];






export default all_product;
