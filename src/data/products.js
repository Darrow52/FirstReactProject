import bNaturalJuice from '../assets/products/b-natural-juice.png'
import henFruitEggs from '../assets/products/hen-fruit-eggs.png'
import goCheese from '../assets/products/go-cheese.png'
import soanPapdi from '../assets/products/soan-papdi.png'
import cremicaSyrup from '../assets/products/cremica-syrup.png'
import tomato from '../assets/products/tomato.png'
import onion from '../assets/products/onion.png'
import potato from '../assets/products/potato.png'
import greenChilli from '../assets/products/green-chilli.png'
import ladyFinger from '../assets/products/lady-finger.png'
import coconutWater from '../assets/products/coconut-water.png'
import bisleri from '../assets/products/bisleri.png'
import sting from '../assets/products/sting.png'
import maaza from '../assets/products/maaza.png'
import chhedaGiftPack from '../assets/products/chheda-gift-pack.png'
import doritos from '../assets/products/doritos.png'
import lijjatPapad from '../assets/products/lijjat-papad.png'
import kurkure from '../assets/products/kurkure.png'
import mrMakhana from '../assets/products/mr-makhana.png'

const bNaturalJuiceProduct = {
  id: 'b-natural-juice',
  name: 'B Natural Mixed Fruit Juice',
  promo: 'Buy 1 Get 1 FREE',
  price: 130,
  oldPrice: 260,
  discount: 50,
  image: { src: bNaturalJuice, left: 17, top: 0, width: 177, height: 177 },
}

export const productSections = [
  {
    id: 'supersaver',
    title: 'Supersaver',
    accent: 'Up to 50% off',
    products: [
      bNaturalJuiceProduct,
      {
        id: 'hen-fruit-eggs',
        name: 'Hen Fruit White Protein Rich Eggs',
        price: 165,
        oldPrice: 99,
        discount: 40,
        image: {
          src: henFruitEggs,
          left: 12,
          top: 11,
          width: 196,
          height: 166,
          crop: { w: 110.2, h: 130.12, l: -6.12, t: -10.84 },
        },
      },
      {
        id: 'go-cheese',
        name: 'Go Cheese Slices',
        weight: '200 g',
        price: 125,
        oldPrice: 165,
        discount: 24,
        image: { src: goCheese, left: 24, top: 14, width: 167, height: 167 },
      },
      {
        id: 'soan-papdi',
        name: "Soan Papdi by Charlie's",
        weight: '200 g',
        price: 51,
        oldPrice: 96,
        discount: 46,
        image: { src: soanPapdi, left: 15, top: 3, width: 189, height: 189 },
      },
      {
        id: 'cremica-syrup',
        name: 'Cremica Chocolate Thicker Syrup',
        price: 194,
        oldPrice: 225,
        discount: 20,
        image: { src: cremicaSyrup, left: 20, top: 0, width: 177, height: 177 },
      },
    ],
  },
  {
    id: 'vegetables-fruits',
    title: 'Vegetables & Fruits',
    products: [
      {
        id: 'tomato',
        name: 'Hybrid Tomato',
        weight: '500 g',
        price: 20,
        oldPrice: 25,
        discount: 20,
        image: {
          src: tomato,
          left: 1,
          top: 11,
          width: 196,
          height: 166,
          crop: { w: 125, h: 147.59, l: -10.2, t: -22.29 },
        },
      },
      {
        id: 'onion',
        name: 'Onion',
        weight: '1 KG',
        price: 22,
        oldPrice: 27,
        discount: 18,
        image: {
          src: onion,
          left: 0,
          top: 0,
          width: 219,
          height: 205,
          crop: { w: 100, h: 106.83, l: 0, t: -6.83 },
        },
      },
      {
        id: 'potato',
        name: 'Potato',
        weight: '1 KG',
        price: 26,
        oldPrice: 29,
        discount: 10,
        image: { src: potato, left: 19, top: 0, width: 177, height: 177 },
      },
      {
        id: 'green-chilli',
        name: 'Green Chilli',
        weight: '100 g',
        price: 17,
        oldPrice: 20,
        discount: 19,
        image: {
          src: greenChilli,
          left: 12,
          top: 18,
          width: 196,
          height: 151,
          crop: { w: 117.86, h: 152.98, l: -9.18, t: -29.14 },
        },
      },
      {
        id: 'lady-finger',
        name: 'Lady Finger',
        weight: '250 g',
        price: 23,
        oldPrice: 27,
        discount: 14,
        image: {
          src: ladyFinger,
          left: 20,
          top: 24,
          width: 181,
          height: 139,
          crop: { w: 130.39, h: 169.78, l: -12.15, t: -29.5 },
        },
      },
    ],
  },
  {
    id: 'cold-drinks-juices',
    title: 'Cold Drinks & Juices',
    products: [
      bNaturalJuiceProduct,
      {
        id: 'coconut-water',
        name: 'Storia 100% Tender Coconut Water',
        price: 138,
        oldPrice: 170,
        discount: 18,
        image: { src: coconutWater, left: 21, top: 0, width: 177, height: 177 },
      },
      {
        id: 'bisleri',
        name: 'Bisleri Packaged Water',
        weight: '5 L',
        price: 70,
        image: { src: bisleri, left: 20, top: 0, width: 177, height: 177 },
      },
      {
        id: 'sting',
        name: 'Sting Energy Drink',
        weight: 'Pack of 2',
        price: 39,
        oldPrice: 40,
        image: { src: sting, left: 21, top: 0, width: 177, height: 177 },
      },
      {
        id: 'maaza',
        name: 'Maaza Mango Drink',
        weight: '1.2 L',
        price: 70,
        oldPrice: 75,
        image: { src: maaza, left: 21, top: 0, width: 177, height: 177 },
      },
    ],
  },
  {
    id: 'snacks-munchies',
    title: 'Snacks & Munchies',
    products: [
      {
        id: 'chheda-gift-pack',
        name: "Chheda's Maharaja",
        weight: 'Delight Gift Pack',
        price: 896,
        oldPrice: 900,
        image: { src: chhedaGiftPack, left: 0, top: 0, width: 219, height: 179 },
      },
      {
        id: 'doritos',
        name: 'Doritos Cheese Nachos',
        price: 30,
        image: { src: doritos, left: 20, top: 0, width: 179, height: 179 },
      },
      {
        id: 'lijjat-papad',
        name: 'Lijjat Plain Urad Papad',
        price: 68,
        image: { src: lijjatPapad, left: 18, top: 0, width: 179, height: 179 },
      },
      {
        id: 'kurkure',
        name: 'Kurkure Masala Munch Crisps X 3',
        price: 54,
        oldPrice: 60,
        discount: 10,
        image: { src: kurkure, left: 21, top: 1, width: 177, height: 177 },
      },
      {
        id: 'mr-makhana',
        name: 'Mr. Makhana Himalayan Salt & Pepper',
        price: 102,
        oldPrice: 120,
        discount: 15,
        image: { src: mrMakhana, left: 22, top: 1, width: 177, height: 177 },
      },
    ],
  },
]

export const allProducts = [
  ...new Map(productSections.flatMap((section) => section.products).map((product) => [product.id, product])).values(),
]

const productsById = new Map(allProducts.map((product) => [product.id, product]))

export const getProductById = (id) => productsById.get(id)
