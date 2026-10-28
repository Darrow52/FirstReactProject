import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import ProductCard from '../ProductCard/ProductCard.jsx'
import './ProductSection.css'

export default function ProductSection({ section }) {
  const titleId = `${section.id}-title`

  return (
    <section className="product-section" id={section.id} aria-labelledby={titleId}>
      <div className="container">
        <SectionTitle id={titleId} title={section.title} accent={section.accent} viewAllHref={`#${section.id}`} />
        <ul className="product-section__list">
          {section.products.map((product) => (
            <li key={product.id} className="product-section__item">
              <ProductCard product={product} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
