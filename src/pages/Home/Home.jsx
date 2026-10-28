import HeroBanner from '../../components/HeroBanner/HeroBanner.jsx'
import TopCategories from '../../components/TopCategories/TopCategories.jsx'
import ProductSection from '../../components/ProductSection/ProductSection.jsx'
import FeaturedBrands from '../../components/FeaturedBrands/FeaturedBrands.jsx'
import { productSections } from '../../data/products.js'

const [supersaver, vegetablesFruits, coldDrinksJuices, snacksMunchies] = productSections

export default function Home() {
  return (
    <>
      <HeroBanner />
      <TopCategories />
      <ProductSection section={supersaver} />
      <ProductSection section={vegetablesFruits} />
      <FeaturedBrands />
      <ProductSection section={coldDrinksJuices} />
      <ProductSection section={snacksMunchies} />
    </>
  )
}
