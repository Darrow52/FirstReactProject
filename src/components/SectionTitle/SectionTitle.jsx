import arrowIcon from '../../assets/icons/arrow-down.svg'
import './SectionTitle.css'

export default function SectionTitle({ id, title, accent, viewAllHref }) {
  return (
    <div className="section-title">
      <h2 className="section-title__heading" id={id}>
        {title}
        {accent && <span className="section-title__accent"> {accent}</span>}
      </h2>
      {viewAllHref && (
        <a className="section-title__link" href={viewAllHref}>
          View All
          <span className="icon icon--18 section-title__arrow">
            <img src={arrowIcon} alt="" />
          </span>
        </a>
      )}
    </div>
  )
}
