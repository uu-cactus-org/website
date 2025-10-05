import { useEffect, useRef } from "react";

import { cactusGitHubUrl, cactusTwitterUrl } from "../../../constants";
import styles from "./hamburger.module.css";
import twitterIcon from '@assets/logos/x_logo_white.svg';
import githubIcon from '@assets/logos/github_logo_white.svg';

interface HamburgerProps {
  links: { href: string; label: string }[];
}

//FIXME - 開閉時のアニメーションが動かない

export default function Hamburger({ links }: HamburgerProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const openMenu = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
      
      // メニュー表示中は裏のスクロールを無効にする
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.body.style.touchAction = 'none'; 
    }
  }

  const closeMenu = () => {
    if (dialogRef.current) {
      dialogRef.current.close();
      
      // スクロールを復元
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    }
  }

  // Escキーとクリックアウトサイドは dialog の標準機能で対応
  const handleDialogClick = (e: React.MouseEvent<HTMLDialogElement>) => {
    if (e.target === e.currentTarget) {
      closeMenu();
    }
  }

  useEffect(() => {    
    // クリーンアップ関数でスタイルを確実に復元
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.body.style.touchAction = '';
    };
  }, []);
  
  return (
    <>
      <button 
        onClick={openMenu} 
        className={styles.button}
        aria-label="Open menu"
        type="button"
        tabIndex={0}
      >
        <div className={styles.hamburgerIcon}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>

      <dialog
        ref={dialogRef}
        className={styles.dialog}
        onClick={handleDialogClick}
      >
        <div className={styles.menu}>
          <div className={styles.menuContent}>
            <div className={styles.menuHeader}>
              <button 
                onClick={closeMenu}
                className={styles.closeButton}
                aria-label="Close menu"
                type="button"
                tabIndex={0}
              >
                <div className={styles.closeIcon}>
                  <span></span>
                  <span></span>
                </div>
              </button>
            </div>
            
            <nav className={styles.navigation}>
              {links.map((link, i) => (
                <div key={i} className={styles.navItem}>
                  <a 
                    href={link.href}
                    onClick={closeMenu}
                    className={styles.navLink}
                    tabIndex={0}
                  >
                    <span className={styles.navText}>{link.label}</span>
                    <span className={styles.navArrow}>→</span>
                  </a>
                </div>
              ))}
            </nav>
          </div>

          <div className={styles.socialContent}>
            <div className={styles.socialLinks}>
              <a 
                href={cactusTwitterUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                onClick={closeMenu}
                tabIndex={0}
              >
                <img src={twitterIcon.src} alt="X (Twitter)" />
              </a>
              <a 
                href={cactusGitHubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className={styles.socialLink}
                onClick={closeMenu}
                tabIndex={0}
              >
                <img src={githubIcon.src} alt="GitHub" />
              </a>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}