import { useState } from "react";

import styles from "./hamburger.module.css";
import hanburgerIcon from '@assets/icons/list.svg';
import closeIcon from '@assets/icons/close.svg';

interface HamburgerProps {
  links: { href: string; label: string }[];
}

export default function Hamburger({ links }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <button onClick={onClick} className={styles.button}>
        {
          isOpen
            ? <img src={closeIcon.src} alt="close" />
            : <img src={hanburgerIcon.src} alt="hamburger" />
        }
      </button>

      <div className={`${styles.background} ${isOpen ? styles.open : ''}`}>
        <div className={styles.container}>
          <hr />
          <nav>
            {links.map((link, i) => (
              <div key={i} className={styles.link}>
                <a href={link.href}>
                  {link.label}
                </a>
              </div>
            ))}
          </nav>
          <hr />
        </div>
      </div>
    </>
  );
}