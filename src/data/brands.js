import daawatLogo from '../assets/brands/daawat-logo.png'
import daawatRice from '../assets/brands/daawat-rice.png'
import daawatPack from '../assets/brands/daawat-pack.png'
import indiaGateLogo from '../assets/brands/india-gate-logo.png'
import indiaGateLabel from '../assets/brands/india-gate-label.png'
import indiaGatePack from '../assets/brands/india-gate-pack.png'
import tetleyGreenTea from '../assets/brands/tetley-green-tea.svg'
import tetleyLogo from '../assets/brands/tetley-logo.png'
import tetleyPack from '../assets/brands/tetley-pack.png'

export const featuredBrands = [
  {
    id: 'daawat',
    name: 'Daawat',
    tagline: 'Cook Exotic Dishes',
    discount: 20,
    background: '#115414',
    taglineBackground: '#63b76d',
    images: [
      { src: daawatLogo, left: 20, top: 29, width: 123, height: 46 },
      { src: daawatRice, left: 213, top: 144, width: 110, height: 50 },
      { src: daawatPack, left: 229, top: 20, width: 160, height: 187 },
    ],
  },
  {
    id: 'india-gate',
    name: 'India Gate',
    tagline: 'World’s No.1 Rice',
    discount: 40,
    background: '#102861',
    taglineBackground: '#2a4d97',
    images: [
      { src: indiaGateLogo, left: 20, top: 12, width: 70, height: 77, crop: { w: 192.2, h: 106.28, l: -45.16, t: -6.28 } },
      { src: indiaGateLabel, left: 20, top: 41, width: 74, height: 48, crop: { w: 151.35, h: 233.33, l: -27.03, t: -64.58 } },
      { src: indiaGatePack, left: 247, top: 29, width: 131, height: 173 },
    ],
  },
  {
    id: 'tetley',
    name: 'Tetley',
    tagline: 'Green Tastea!',
    discount: 25,
    background: '#75b032',
    taglineBackground: '#8cbe5a',
    images: [
      { src: tetleyGreenTea, left: 28.66, top: 27.13, width: 66.261, height: 29.739 },
      { src: tetleyLogo, left: 14, top: 0, width: 96, height: 96 },
      { src: tetleyPack, left: 217, top: 40, width: 167, height: 167, crop: { w: 138.83, h: 100, l: -18.56, t: 0 } },
    ],
  },
]
