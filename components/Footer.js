"use client";
import { Mail, Linkedin, Phone } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={`container ${styles.container}`}>
                <div className={styles.top}>
                    <div className={styles.brand}>
                        <h3>Port<span>folio</span>.</h3>
                        <p>Designing and building exceptional digital experiences.</p>
                    </div>

                    <div className={styles.social}>
                        <a href="mailto:adi.narayan200320@gmail.com" className={styles.socialLink} aria-label="Email"><Mail size={20} /></a>
                        <a href="https://www.linkedin.com/in/aditya-narayan-346521224" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="tel:+917903827114" className={styles.socialLink} aria-label="Phone"><Phone size={20} /></a>
                    </div>
                </div>

                <div className={styles.bottom}>
                    <p>&copy; {new Date().getFullYear()} Aditya Narayan. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
