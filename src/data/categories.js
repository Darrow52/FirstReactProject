import fruits1 from '../assets/categories/fruits-1.png'
import fruits2 from '../assets/categories/fruits-2.png'
import dairy1 from '../assets/categories/dairy-1.png'
import dairy2 from '../assets/categories/dairy-2.png'
import egg1 from '../assets/categories/egg-1.png'
import egg2 from '../assets/categories/egg-2.png'
import bath1 from '../assets/categories/bath-1.png'
import bath2 from '../assets/categories/bath-2.png'
import drinks1 from '../assets/categories/drinks-1.png'
import drinks2 from '../assets/categories/drinks-2.png'
import snacks1 from '../assets/categories/snacks-1.png'
import snacks2 from '../assets/categories/snacks-2.png'
import icy1 from '../assets/categories/icy-1.png'
import icy2 from '../assets/categories/icy-2.png'

export const navCategories = [
  {
    id: 'fruits-vegetables',
    name: 'Fruits & Vegetables',
    sectionId: 'vegetables-fruits',
    subcategories: ['Fresh Vegetables', 'Fresh Fruits', 'Exotic Fruits', 'Herbs & Seasonings', 'Organic'],
  },
  {
    id: 'dairy-breakfast',
    name: 'Dairy & Breakfasts',
    subcategories: ['Milk', 'Bread & Pav', 'Eggs', 'Butter & Cheese', 'Paneer & Curd', 'Breakfast Cereals'],
  },
  {
    id: 'egg-meat-fish',
    name: 'Egg, Meat & Fish',
    subcategories: ['Eggs', 'Chicken', 'Mutton', 'Fish & Seafood'],
  },
  {
    id: 'bath-body',
    name: 'Bath & Body',
    subcategories: ['Soaps & Body Wash', 'Shampoo & Conditioner', 'Skin Care', 'Oral Care'],
  },
  {
    id: 'cold-drinks-juices',
    name: 'Cold drinks & Juices',
    sectionId: 'cold-drinks-juices',
    subcategories: ['Soft Drinks', 'Fruit Juices', 'Energy Drinks', 'Water & Soda'],
  },
  {
    id: 'snacks-munchies',
    name: 'Snacks & Munchies',
    sectionId: 'snacks-munchies',
    subcategories: ['Chips & Crisps', 'Namkeen', 'Biscuits & Cookies', 'Chocolates & Sweets'],
  },
  {
    id: 'icy-delights',
    name: 'Icy Delights',
    subcategories: ['Ice Cream Tubs', 'Cones & Sticks', 'Kulfi', 'Frozen Desserts'],
  },
]

export const topCategories = [
  {
    id: 'fruits-vegetables',
    label: 'Fruits &\nVegetables',
    images: [
      { src: fruits1, left: 0, top: 59, width: 132, height: 112, crop: { w: 104.55, h: 100.01, l: -4.55, t: 0 } },
      { src: fruits2, left: 28, top: 20, width: 116, height: 157, crop: { w: 104.11, h: 100, l: -0.33, t: 0 } },
    ],
  },
  {
    id: 'dairy-breakfast',
    label: 'Dairy &\nBreakfast',
    images: [
      { src: dairy1, left: 0, top: 13, width: 95, height: 158, crop: { w: 111.33, h: 100, l: -10.93, t: 0 } },
      { src: dairy2, left: 38, top: 72, width: 99, height: 105 },
    ],
  },
  {
    id: 'egg-meat-fish',
    label: 'Egg, Meat\n& Fish',
    images: [
      { src: egg1, left: 0, top: 28, width: 124, height: 132, crop: { w: 106.45, h: 100, l: -6.45, t: 0 } },
      { src: egg2, left: 30, top: 80, width: 107, height: 94, crop: { w: 100, h: 113.83, l: 0, t: 0 } },
    ],
  },
  {
    id: 'bath-body',
    label: 'Bath &\nBody',
    images: [
      { src: bath1, left: 0, top: 13, width: 113, height: 148, crop: { w: 130.97, h: 100, l: -30.97, t: 0 } },
      { src: bath2, left: 30, top: 87, width: 108, height: 86 },
    ],
  },
  {
    id: 'cold-drinks-juices',
    label: 'Cold drinks\n& Juices',
    images: [
      { src: drinks1, left: 20, top: 13, width: 52, height: 170 },
      { src: drinks2, left: 40, top: 51, width: 104, height: 123, crop: { w: 118.27, h: 100, l: 0, t: 0 } },
    ],
  },
  {
    id: 'snacks-munchies',
    label: 'Snacks &\nMunchies',
    images: [
      { src: snacks1, left: 8, top: 24, width: 94, height: 137 },
      { src: snacks2, left: 36, top: 59, width: 106, height: 124 },
    ],
  },
  {
    id: 'icy-delights',
    label: 'Icy Delights',
    images: [
      { src: icy1, left: 0, top: 13, width: 134, height: 148, crop: { w: 147.76, h: 100.05, l: -25.37, t: -0.03 } },
      { src: icy2, left: 34, top: 78, width: 105, height: 105 },
    ],
  },
]
