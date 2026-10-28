import { Link } from 'react-router-dom'
import { navCategories } from '../../data/categories.js'
import logo from '../../assets/footer/logo.svg'
import whatsappIcon from '../../assets/footer/whatsapp.svg'
import callIcon from '../../assets/footer/call.svg'
import instagramIcon from '../../assets/footer/instagram.svg'
import facebookIcon from '../../assets/footer/facebook.svg'
import youtubeIcon from '../../assets/footer/youtube.svg'
import appStore from '../../assets/footer/app-store.png'
import playStore from '../../assets/footer/play-store.png'
import './Footer.css'

const services = [
  'About Us',
  'Terms & Conditions',
  'FAQ',
  'Privacy Policy',
  'E-waste Policy',
  'Cancellation & Return Policy',
]

const contacts = [
  { id: 'whatsapp', label: 'Whats App', phone: '+1 202-918-2132', href: 'https://wa.me/12029182132', icon: whatsappIcon },
  { id: 'call', label: 'Call Us', phone: '+1 202-918-2132', href: 'tel:+12029182132', icon: callIcon },
]

const socials = [
  { id: 'instagram', label: 'Instagram', icon: instagramIcon },
  { id: 'facebook', label: 'Facebook', icon: facebookIcon },
  { id: 'youtube', label: 'YouTube', icon: youtubeIcon },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__main">
          <div className="footer__brand">
            <Link className="footer__logo" to="/" aria-label="Freshcart — home">
              <img src={logo} alt="" />
            </Link>
          </div>

          <div className="footer__contacts">
            <h2 className="footer__heading footer__heading--plain">Contact Us</h2>
            <ul className="footer__contact-list">
              {contacts.map((contact) => (
                <li key={contact.id}>
                  <a className="footer__contact" href={contact.href}>
                    <span className="icon icon--24">
                      <img src={contact.icon} alt="" />
                    </span>
                    <span>
                      {contact.label}
                      <br />
                      {contact.phone}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ul className="footer__socials">
            {socials.map((social) => (
              <li key={social.id}>
                <a href="#" aria-label={social.label}>
                  <img src={social.icon} alt="" />
                </a>
              </li>
            ))}
          </ul>

          <nav className="footer__column footer__column--categories" aria-labelledby="footer-categories">
            <h2 className="footer__heading" id="footer-categories">
              Popular Categories
            </h2>
            <ul className="footer__links">
              {navCategories
                .filter((category) => category.id !== 'icy-delights')
                .map((category) => (
                  <li key={category.id}>
                    <a href={`#${category.sectionId ?? category.id}`}>{category.name}</a>
                  </li>
                ))}
            </ul>
          </nav>

          <nav className="footer__column footer__column--services" aria-labelledby="footer-services">
            <h2 className="footer__heading" id="footer-services">
              Customer Services
            </h2>
            <ul className="footer__links">
              {services.map((service) => (
                <li key={service}>
                  <a href="#">{service}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer__apps">
            <h2 className="footer__heading footer__heading--short">Download App</h2>
            <div className="footer__app-links">
              <a className="footer__app" href="#" aria-label="Download on the App Store">
                <img src={appStore} alt="" width="147" height="47" />
              </a>
              <a className="footer__app" href="#" aria-label="Get it on Google Play">
                <img src={playStore} alt="" width="147" height="44" />
              </a>
            </div>
          </div>
        </div>

        <p className="footer__copyright">© 2023 All rights reserved. Freshcart Ltd.</p>
      </div>
    </footer>
  )
}
