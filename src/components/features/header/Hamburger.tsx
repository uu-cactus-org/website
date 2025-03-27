import { useState } from "react";

import { variables } from "@styles/variables";
import styles from "./hamburger.module.css";
import hanburgerIcon from '@assets/icons/list.svg';
import closeIcon from '@assets/icons/close.svg';

interface HamburgerProps {
  links: { href: string; label: string }[];
}

// convert rgba
const bgOpacity = 0.98;
const bgColor = `rgba(${variables.cactus.replace(/rgb\((\d+), (\d+), (\d+)\)/, '$1,$2,$3')}, ${bgOpacity})`;

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

      <div
        className={`${styles.background}
        ${isOpen ? styles.open : ''}`}
        style={{ backgroundColor: bgColor }}
      >
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