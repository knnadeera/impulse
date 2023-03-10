import Image1 from "../assets/products/product1/product1.jpg";
import Image1_1 from "../assets/products/product1/image1.png";
import Image1_2 from "../assets/products/product1/image2.jpg";
import Image1_3 from "../assets/products/product1/image3.jpg";
import Image2 from "../assets/products/product2.jpg";
import Image3 from "../assets/products/product3.jpg";
import Image4 from "../assets/products/product4.jpg";
import Image5 from "../assets/products/product5.png";
import Image6 from "../assets/products/product6.png";
import Image7 from "../assets/products/product7.png";
import Image8 from "../assets/products/product8.png";

const productsList = [
  {
    id: 1,
    name: "Product name",
    image: [Image1, Image1_1, Image1_2, Image1_3],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 50,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 6,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 2,
    name: "Product name",
    image: [Image2],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "sandals",
    price: 60,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 0,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 3,
    name: "Product name",
    image: [Image3],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 55,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 4,
    name: "Product name",
    image: [Image4],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 65,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 5,
    name: "Product name",
    image: [Image5],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 50,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 6,
    name: "Product name",
    image: [Image6],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 60,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 7,
    name: "Product name",
    image: [Image7],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 55,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 8,
    name: "Product name",
    image: [Image8],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 65,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 9,
    name: "Product name",
    image: [Image1],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 50,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 10,
    name: "Product name",
    image: [Image2],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "sandals",
    price: 60,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 11,
    name: "Product name",
    image: [Image3],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 55,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 12,
    name: "Product name",
    image: [Image4],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 65,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 13,
    name: "Product name",
    image: [Image5],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 50,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 14,
    name: "Product name",
    image: [Image6],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 60,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 15,
    name: "Product name",
    image: [Image7],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 55,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
  {
    id: 16,
    name: "Product name",
    image: [Image8],
    description:
      "New for summer, pretty jewelled peep toe sandal CLARISSA is the occasion shoe of the season. In rich cream metallic brocade, trimmed with shimmering gold, embellished with a pearl and diamantÃ© trim, and set on our classic slim heel, Ruby Shoo CLARISSA matches perfectly to bag style TOULOUSEULOUSE",
    brand: "Brand",
    category: "heels",
    price: 65,
    size: [2, 3, 4, 5, 6, 7],
    countInStock: 5,
    rating: 4.5,
    numReviews: 12,
  },
];

export default productsList;
