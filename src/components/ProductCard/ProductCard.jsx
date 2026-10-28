import AddToCart from '../AddToCart/AddToCart.jsx'
import { boxStyle, cropStyle } from '../../utils/designBox.js'
import './ProductCard.css'

export default function ProductCard({ product }) {
  const { name, promo, weight, price, oldPrice, discount, image } = product

  return (
    <article className="product-card">
      <div className="product-card__media">
        <span className="design-box" style={boxStyle(image)}>
          <img src={image.src} alt={name} style={cropStyle(image.crop)} loading="lazy" />
        </span>
      </div>

      {discount && <span className="product-card__badge">{discount}% OFF</span>}

      <div className="product-card__body">
        <h3 className="product-card__name">
          {name}
          {promo && <span className="product-card__promo"> ({promo})</span>}
          {weight && <span className="product-card__weight">{weight}</span>}
        </h3>

        <div className="product-card__footer">
          <p className="product-card__price">
            <span className="product-card__current">₹{price}</span>
            {oldPrice && (
              <s className="product-card__old">
                <span className="visually-hidden">Old price </span>₹{oldPrice}
              </s>
            )}
          </p>
          <AddToCart product={product} />
        </div>
      </div>
    </article>
  )
}
