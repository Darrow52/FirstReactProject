import SectionTitle from '../SectionTitle/SectionTitle.jsx'
import { topCategories } from '../../data/categories.js'
import { boxStyle, cropStyle } from '../../utils/designBox.js'
import './TopCategories.css'

export default function TopCategories() {
  return (
    <section className="top-categories" aria-labelledby="top-categories-title">
      <div className="container">
        <SectionTitle id="top-categories-title" title="Shop From" accent="Top Categories" />
        <ul className="top-categories__list">
          {topCategories.map((category) => (
            <li key={category.id}>
              <a className="category-tile" href={`#${category.id}`}>
                <span className="category-tile__media">
                  {category.images.map((image) => (
                    <span key={image.src} className="design-box" style={boxStyle(image)}>
                      <img src={image.src} alt="" style={cropStyle(image.crop)} />
                    </span>
                  ))}
                </span>
                <span className="category-tile__label">{category.label}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
