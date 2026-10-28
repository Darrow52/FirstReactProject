import { useEffect, useRef, useState } from 'react'
import Dots from '../Dots/Dots.jsx'
import { boxStyle, cropStyle, u } from '../../utils/designBox.js'
import stamp from '../../assets/hero/stamp.png'
import splash from '../../assets/hero/splash.png'
import iceCream from '../../assets/hero/ice-cream.png'
import doodles from '../../assets/hero/doodles.png'
import tomato from '../../assets/products/tomato.png'
import onion from '../../assets/products/onion.png'
import potato from '../../assets/products/potato.png'
import sting from '../../assets/products/sting.png'
import maaza from '../../assets/products/maaza.png'
import coconutWater from '../../assets/products/coconut-water.png'
import './HeroBanner.css'

const AUTOPLAY_MS = 5000
const SWIPE_THRESHOLD = 50

const decorations = [
  {
    id: 'splash-top',
    src: splash,
    box: { left: 1281, top: -53.72, width: 312.191, height: 238.301 },
    inner: { width: 147.179, height: 277.636, rotate: -68.61 },
    crop: { w: 262.93, h: 100, l: 0, t: 0 },
  },
  {
    id: 'splash-bottom',
    src: splash,
    box: { left: -118.5, top: 286, width: 263.655, height: 234.382 },
    inner: { width: 134.45, height: 226.891, rotate: 122.06 },
    crop: { w: 235.22, h: 100, l: 0, t: 0 },
  },
]

const doodleItems = [
  {
    id: 'doodle-1',
    box: { left: 830, top: 316, width: 57.969, height: 84.994 },
    inner: { width: 34.599, height: 77.995, rotate: 18.87 },
    crop: { w: 1078.08, h: 504.29, l: -482.19, t: -73.01 },
  },
  {
    id: 'doodle-2',
    box: { left: 1368, top: 340, width: 52.775, height: 84.121 },
    inner: { width: 34.599, height: 77.995, rotate: -14.29 },
    crop: { w: 1078.08, h: 504.29, l: -337.97, t: -57.69 },
  },
  {
    id: 'doodle-3',
    box: { left: 484, top: 382, width: 57.725, height: 50.162 },
    inner: { width: 49.603, height: 39.132, rotate: -14.29 },
    crop: { w: 751.99, h: 1005.11, l: -538.42, t: -397.4 },
  },
  {
    id: 'doodle-4',
    box: { left: 54, top: 10, width: 57.725, height: 50.162 },
    inner: { width: 49.603, height: 39.132, rotate: -14.29 },
    crop: { w: 751.99, h: 1005.11, l: -230.54, t: -185.16 },
  },
  {
    id: 'doodle-5',
    box: { left: -13, top: 209, width: 66.606, height: 63.818 },
    inner: { width: 55.565, height: 51.705, rotate: -14.29 },
    crop: { w: 671.3, h: 760.71, l: -102.21, t: -161.96 },
  },
].map((item) => ({ ...item, src: doodles }))

const slides = [
  {
    id: 'icy-delights',
    background: 'linear-gradient(103.27deg, #f2bd1f 0.36%, #ea2f59 98.41%)',
    eyebrow: 'Best Deal on icy delights',
    title: ['Beat', 'the heat'],
    discount: '50% OFF',
  },
  {
    id: 'fresh-vegetables',
    background: 'linear-gradient(103.27deg, #8dc63f 0.36%, #2e8b3a 98.41%)',
    eyebrow: 'Fresh from the farm',
    title: ['Fresh', 'veggies'],
    discount: '20% OFF',
    cards: [
      { src: onion, left: 800, top: 170, width: 230, height: 230, rotate: -8 },
      { src: tomato, left: 980, top: 90, width: 280, height: 280, rotate: 4 },
      { src: potato, left: 1190, top: 190, width: 210, height: 210, rotate: 10 },
    ],
  },
  {
    id: 'cold-drinks',
    background: 'linear-gradient(103.27deg, #3fb6e8 0.36%, #2a4d97 98.41%)',
    eyebrow: 'Chill with cold drinks',
    title: ['Stay', 'cool'],
    discount: '18% OFF',
    cards: [
      { src: sting, left: 800, top: 170, width: 230, height: 230, rotate: -8 },
      { src: maaza, left: 980, top: 90, width: 280, height: 280, rotate: 4 },
      { src: coconutWater, left: 1190, top: 190, width: 210, height: 210, rotate: 10 },
    ],
  },
]

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

function Decoration({ src, box, inner, crop, className = '' }) {
  return (
    <div className={`hero__decor ${className}`} style={boxStyle(box)} aria-hidden="true">
      <div
        className="hero__decor-inner"
        style={{
          width: u(inner.width),
          height: u(inner.height),
          transform: `rotate(${inner.rotate}deg)`,
        }}
      >
        <img src={src} alt="" style={cropStyle(crop)} />
      </div>
    </div>
  )
}

function IcyDelightsArtwork() {
  return (
    <>
      <div
        className="hero__stamp"
        style={{ ...boxStyle({ left: 656, top: 8, width: 281, height: 281 }), maskImage: `url(${stamp})` }}
        aria-hidden="true"
      />
      {decorations.map(({ id, ...item }) => (
        <Decoration key={id} {...item} />
      ))}
      <img
        className="hero__product"
        src={iceCream}
        alt="Havmor Almond Carnival and American Nuts ice cream"
        style={boxStyle({ left: 841, top: 44, width: 497, height: 424 })}
      />
    </>
  )
}

function SlideText({ slide, isFirst }) {
  const Heading = isFirst ? 'h1' : 'h2'

  return (
    <div className="hero__text">
      <p className="hero__eyebrow">{slide.eyebrow}</p>
      <Heading className="hero__title">
        <span className="hero__title-line">{slide.title[0]}</span>
        <span className="hero__title-line hero__title-line--outline">{slide.title[1]}</span>
      </Heading>
      <p className="hero__discount">
        UP to <b>{slide.discount}</b>
      </p>
    </div>
  )
}

export default function HeroBanner() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const swipeStart = useRef(null)

  // Restarts after every change, so a manual pick gets the full interval too
  useEffect(() => {
    if (paused || prefersReducedMotion()) return
    const timer = setTimeout(() => setActive((current) => (current + 1) % slides.length), AUTOPLAY_MS)
    return () => clearTimeout(timer)
  }, [active, paused])

  const goBy = (step) => setActive((current) => (current + step + slides.length) % slides.length)

  const handlePointerUp = (event) => {
    if (swipeStart.current === null) return
    const distance = event.clientX - swipeStart.current
    swipeStart.current = null
    if (Math.abs(distance) >= SWIPE_THRESHOLD) goBy(distance < 0 ? 1 : -1)
  }

  return (
    <section
      className="hero"
      aria-roledescription="carousel"
      aria-label="Offers"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => !event.currentTarget.contains(event.relatedTarget) && setPaused(false)}
      onPointerDown={(event) => {
        if (event.pointerType !== 'mouse') swipeStart.current = event.clientX
      }}
      onPointerUp={handlePointerUp}
      onPointerCancel={() => (swipeStart.current = null)}
    >
      {slides.map((slide, index) => {
        const isActive = index === active
        return (
          <div
            key={slide.id}
            className={`hero__slide ${isActive ? 'hero__slide--active' : ''}`}
            style={{ background: slide.background }}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${slides.length}`}
            aria-hidden={!isActive}
            inert={!isActive}
          >
            <div className="hero__stage">
              {index === 0 && <IcyDelightsArtwork />}
              {slide.cards?.map((card) => (
                <div
                  key={card.src}
                  className="hero__card"
                  style={{ ...boxStyle(card), transform: `rotate(${card.rotate}deg)` }}
                  aria-hidden="true"
                >
                  <img src={card.src} alt="" />
                </div>
              ))}
              <SlideText slide={slide} isFirst={index === 0} />
              {index === 0 &&
                doodleItems.map(({ id, ...item }) => <Decoration key={id} className="hero__decor--doodle" {...item} />)}
            </div>
          </div>
        )
      })}

      <div className="hero__stage hero__controls">
        <Dots
          className="hero__dots"
          variant="light"
          count={slides.length}
          active={active}
          onSelect={setActive}
          label="Choose offer"
        />
      </div>
    </section>
  )
}
