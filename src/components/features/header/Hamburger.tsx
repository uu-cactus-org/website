import { useEffect, useState } from "react";

import { cactusGitHubUrl, cactusTwitterUrl } from "../../../constants";
import styles from "./hamburger.module.css";
import hanburgerIcon from '@assets/icons/list.svg';
import closeIcon from '@assets/icons/close.svg';
import twitterIcon from '@assets/logos/x_logo_white.svg';
import githubIcon from '@assets/logos/github_logo_white.svg';

interface HamburgerProps {
  links: { href: string; label: string }[];
}

export default function Hamburger({ links }: HamburgerProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    // メニュー表示中は裏のスクロールをできないように
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style['touchAction'] = 'none';
    } else {
      document.body.style.overflow = 'auto';
      document.body.style.height = 'auto';
      document.body.style['touchAction'] = 'auto';
    }
  }, [isOpen]);

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
      >
        <div className={styles.container}>
          <div className={styles.spacer} />
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
          <nav className={styles.socials}>
            <a href={cactusTwitterUrl} target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon.src} alt="twitter" />
            </a>
            <a href={cactusGitHubUrl} target="_blank" rel="noopener noreferrer">
              <img src={githubIcon.src} alt="github" />
            </a>
          </nav>
        </div>
      </div>
    </>
  );
}