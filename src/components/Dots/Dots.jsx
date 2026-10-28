import './Dots.css'
export default function Dots({ count, active, onSelect, label, variant = 'dark', className = '' }) {
  return (
    <div className={`dots dots--${variant} ${className}`} role="group" aria-label={label}>
      {Array.from({ length: count }, (_, index) => (
        <button
          key={index}
          className="dots__dot"
          type="button"
          aria-label={`Slide ${index + 1} of ${count}`}
          aria-current={index === active ? 'true' : undefined}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  )
}
