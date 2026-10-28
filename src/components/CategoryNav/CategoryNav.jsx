import { useCallback, useRef, useState } from 'react'
import useDismiss from '../../hooks/useDismiss.js'
import { navCategories } from '../../data/categories.js'
import arrowDownIcon from '../../assets/icons/arrow-down.svg'
import './CategoryNav.css'
export default function CategoryNav() {
  const [openId, setOpenId] = useState(null)
  const ref = useRef(null)
  const openCategory = navCategories.find((category) => category.id === openId)

  const close = useCallback(() => setOpenId(null), [])
  useDismiss(ref, Boolean(openId), close)

  return (
    <nav className="catnav" aria-label="Categories" ref={ref}>
      <ul className="container catnav__list">
        {navCategories.map((category) => {
          const isOpen = category.id === openId
          return (
            <li key={category.id}>
              <button
                className={`catnav__item ${isOpen ? 'catnav__item--open' : ''}`}
                type="button"
                aria-expanded={isOpen}
                aria-controls="catnav-panel"
                onClick={() => setOpenId(isOpen ? null : category.id)}
              >
                {category.name}
                <span className="icon icon--18 catnav__arrow">
                  <img src={arrowDownIcon} alt="" />
                </span>
              </button>
            </li>
          )
        })}
      </ul>

      {openCategory && (
        <div className="catnav__panel" id="catnav-panel">
          <div className="container catnav__panel-inner">
            <ul className="catnav__sublist">
              {openCategory.subcategories.map((subcategory) => (
                <li key={subcategory}>
                  <a className="catnav__sublink" href={`#${openCategory.sectionId ?? openCategory.id}`} onClick={close}>
                    {subcategory}
                  </a>
                </li>
              ))}
            </ul>
            {openCategory.sectionId && (
              <a className="catnav__all" href={`#${openCategory.sectionId}`} onClick={close}>
                View all {openCategory.name}
              </a>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}
