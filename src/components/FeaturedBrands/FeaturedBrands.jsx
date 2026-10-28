import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import { featuredBrands } from '../../data/brands.js'
import { boxStyle, cropStyle } from '../../utils/designBox.js'
import Dots from '../Dots/Dots.jsx'
import useScrollCarousel from '../../hooks/useScrollCarousel.js'
import './FeaturedBrands.css'

export default function FeaturedBrands() {
  const { ref: listRef, count, active, goTo } = useScrollCarousel()

  return (
    <section className="featured-brands" id="featured-brands" aria-labelledby="featured-brands-title">
      <div className="container">
        <SectionTitle id="featured-brands-title" title="Featured Brands" viewAllHref="#featured-brands" />

        <ul className="featured-brands__list" ref={listRef}>
          {featuredBrands.map((brand) => (
            <li key={brand.id} className="featured-brands__item">
              <a className="brand-card" href={`#${brand.id}`} style={{ background: brand.background }}>
                {brand.images.map((image, index) => (
                  <span key={image.src} className="design-box" style={boxStyle(image)}>
                    <img src={image.src} alt={index === 0 ? brand.name : ''} style={cropStyle(image.crop)} />
                  </span>
                ))}
                <span className="brand-card__tagline" style={{ background: brand.taglineBackground }}>
                  {brand.tagline}
                </span>
                <span className="brand-card__discount">
                  UP to <b>{brand.discount}% OFF</b>
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div className="featured-brands__pager">
          {count > 1 && (
            <Dots count={count} active={active} onSelect={goTo} label="Featured brands slides" />
          )}
        </div>
      </div>
    </section>
  )
}
