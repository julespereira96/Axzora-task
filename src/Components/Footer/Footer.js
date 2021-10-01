import React from "react";
import "./Footer.scss";
import { footerLinks } from "./FooterData";

export default function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="footer__image">
          <div className="footer__content">
            <p>
              Disclaimer: "Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
              proident, sunt in culpa qui officia deserunt mollit anim id est
              laborum."
            </p>
          </div>
        </div>

        <div className="footer__Link">
          <div className="footer__Link__header">
            <h6>QUICK LINKS</h6>
          </div>
          {footerLinks.map((item) => (
            <ul className="footer__Link__Info">
              <li>
                <a className="Info" key={item.footerLinkKey}>
                  {item.footerLink}
                </a>
              </li>
            </ul>
          ))}
        </div>
        <div className="footer__Contact">
          <div className="footer__Contact__header">
            <h6>GET TO KNOW US</h6>
          </div>
          <ul className="footer__Link__Info">
            <li>
              <a>Call us at +91 9205487429</a>
            </li>
            <li>
              <a>Email us on care@skullcandy.com </a>
            </li>
          </ul>
        </div>
        <div className="footer__copywright justify-content-between align-items-center ">
          <div className="footer__copywright__content text-center">
            &copy;Copyright © 2021, Jules Pereira
          </div>
        </div>
      </div>
    </footer>
  );
}
