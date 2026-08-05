import { FiPhone, FiMail, FiGithub } from "react-icons/fi";
import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <ul className="footer__list">
        <li className="footer__item">
          <a href="tel:+380636629391" className="footer__link">
            <div className="footer__img">
              <FiPhone />
            </div>
            Phone
          </a>
        </li>
        <li className="footer__item">
          <a href="mailto:vladkygot@email.com" className="footer__link">
            <div className="footer__img">
              <FiMail />
            </div>
            Email
          </a>
        </li>
        <li className="footer__item">
          <a
            href="https://github.com/vladKugot"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__link"
          >
            <div className="footer__img">
              <FiGithub />
            </div>
            GitHub
          </a>
        </li>
      </ul>
      <p className="footer__text">© 2026 Vlad Kugot. All rights reserved.</p>
    </footer>
  );
};
