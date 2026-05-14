"use client";
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import styles from './TechMarquee.module.css';

const SVGs = {
    react: `<svg viewBox="-11.5 -10.23174 23 20.46348" width="100%" height="100%" fill="none" stroke="#61dafb" stroke-width="1.5"><circle cx="0" cy="0" r="2.05" fill="#61dafb"/><g stroke="#61dafb"><ellipse rx="11" ry="4.2"/><ellipse rx="11" ry="4.2" transform="rotate(60)"/><ellipse rx="11" ry="4.2" transform="rotate(120)"/></g></svg>`,
    javascript: `<svg viewBox="0 0 256 256" width="100%" height="100%"><path fill="#F7DF1E" d="M0 0h256v256H0z"/><path d="M67.312 213.932c19.59 14.533 39.467 21.056 61.322 21.056 23.955 0 45.422-8.533 58.744-24.505 13.9-16.733 13.9-38.656 13.9-60.556V65.656H169.56v84.978c0 14.822-2.122 30.2-18.478 30.2-14.811 0-19.167-11.856-19.167-27.189v-87.99h-31.7v91.134c0 19.567 2.112 36.755 17.5 50.31-5.834 4.545-16.489 7.422-26.467 7.422-9.522 0-21.756-3.8-29.289-9.088l-4.644 18.4zM240 65.656h-31.7v84.978c0 14.822-2.122 30.2-18.478 30.2-14.811 0-19.167-11.856-19.167-27.189v-87.99h-31.7v91.134c0 37.078 20.656 59.956 50.844 59.956 21.844 0 41.733-6.523 61.322-21.056l-11.122-20.022z" fill="#000"/></svg>`,
    python: `<svg viewBox="0 0 110 110" width="100%" height="100%"><path fill="#3776AB" d="M53.8.3C26.5.3 22 12.8 22 12.8L21.8 26.6h32.4v4.6H13.6S1.2 30.4 1.2 55.4c0 24.3 10.8 33.3 10.8 33.3h10v-16c0-12 10.1-22 22.3-22h21v-34c0-12.7-10.7-16.4-21.5-16.4zM39.6 9c3.1 0 5.6 2.5 5.6 5.6 0 3-2.5 5.5-5.6 5.5s-5.6-2.5-5.6-5.5C34 11.5 36.5 9 39.6 9z"/><path fill="#FFD43B" d="M55.7 109.8c27.3 0 31.8-12.5 31.8-12.5l.2-13.8H55.3v-4.6h40.6s12.5.8 12.5-24.2c0-24.3-10.9-33.3-10.9-33.3h-10v16c0 12-10 22-22.3 22H44.3v34.1c0 12.7 10.6 16.3 21.4 16.3zM70 95c-3.1 0-5.6-2.5-5.6-5.6 0-3 2.5-5.5 5.6-5.5s5.6 2.5 5.6 5.5c0 3.1-2.5 5.6-5.6 5.6z"/></svg>`,
    nodejs: `<svg viewBox="0 0 120 120" width="100%" height="100%"><path fill="#339933" d="M60 0L4.3 32v64L60 128l55.7-32V32z"/><path fill="#fff" d="M103 89.2V41.5l-43-24.7-43 24.7v47.7l43 24.7 43-24.7zM60 102.3l-34-19.6V48.5L60 28.9l34 19.6v34.2L60 102.3zm21.4-53.5l-21.4-12.3-21.4 12.3v24.7l21.4 12.3 21.4-12.3V48.8h-7.6v20.3l-13.8 8-13.8-8V48.8l13.8-8 13.8 8v6h7.6z"/></svg>`,
    figma: `<svg viewBox="0 0 38 57" width="100%" height="100%"><path fill="#1abcfe" d="M19 28.5a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z"/><path fill="#0acf83" d="M0 47.5a9.5 9.5 0 0 1 9.5-9.5H19v9.5a9.5 9.5 0 1 1-19 0z"/><path fill="#ff7262" d="M19 0v19h9.5a9.5 9.5 0 1 0 0-19H19z"/><path fill="#f24e1e" d="M0 9.5A9.5 9.5 0 0 0 9.5 19H19V0H9.5A9.5 9.5 0 0 0 0 9.5z"/><path fill="#a259ff" d="M0 28.5A9.5 9.5 0 0 0 9.5 38H19V19H9.5A9.5 9.5 0 0 0 0 28.5z"/></svg>`,
    photoshop: `<svg viewBox="0 0 100 100" width="100%" height="100%"><rect width="100" height="100" rx="20" fill="#31a8ff"/><path d="M29.5 32.2h15.2c6.9 0 12.8 3.5 12.8 11.2 0 8.6-6.4 12.4-13.3 12.4H36v15.8h-6.5V32.2zm6.5 18.5h8.6c4.2 0 6.6-2.5 6.6-7 0-4-2.5-6-6.4-6h-8.8v13zM67.5 59c3.8 3.4 8.2 5.5 12.6 5.5 4.6 0 6.7-2.1 6.7-5 0-4-3-5.2-9-7.3-7.5-2.6-11.4-6.4-11.4-12.7 0-7.3 6-11.7 13.8-11.7 5.2 0 9 2.1 11.5 4.8l-3.8 4.6c-2.4-2.1-5.7-4-9-4-3.5 0-5.8 2-5.8 4.7 0 3.7 3 5 8.7 7 8 2.8 11.6 7 11.6 13 0 7.8-5.8 12-14.4 12-5.8 0-11.2-2.5-15.5-6.5L67.5 59z" fill="#001d26"/></svg>`,
    illustrator: `<svg viewBox="0 0 100 100" width="100%" height="100%"><rect width="100" height="100" rx="20" fill="#ff9a00"/><path d="M37 72H29l16-43h8l16 43h-8l-4-12H39l-2 12zm13-35l-7 19h14l-7-19zm24 35h-7V39h7v33zm-3.5-37c-2.5 0-4.5-2-4.5-4.5s2-4.5 4.5-4.5 4.5 2 4.5 4.5-2 4.5-4.5 4.5z" fill="#330000"/></svg>`,
    html: `<svg viewBox="0 0 384 512" width="100%" height="100%"><path fill="#E34F26" d="M0 32l34.9 392.5L192 480l157.1-55.5L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.1l-97.9-27.1-6-65.8h47.7l2.9 32.7 53.9 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>`,
    css: `<svg viewBox="0 0 384 512" width="100%" height="100%"><path fill="#1572B6" d="M0 32l34.9 392.5L192 480l157.1-55.5L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.1l-97.9-27.1-6-65.8h47.7l2.9 32.7 53.9 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>`,
    mongodb: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path fill="#47A248" d="M49 13s-14 18-14 36c0 10 3 20 10 25v13h8V74c7-5 10-15 10-25 0-18-14-36-14-36zm-1 30v-9c0-1 4-1 4 0v9c0 1-4 1-4 0z"/></svg>`,
    mysql: `<svg viewBox="0 0 100 100" width="100%" height="100%"><path fill="#4479A1" d="M22 41s4-13 13-17c1.3-.6 3.6-1.5 8-2.6-7-1.5-11 5-11 5s3-6 9-6c3-.4 6 .2 6 .2s-10-1.8-17 10c0 0-4-5-8-2-4 3 6 10 6 10s-5-1-6 2c0 0-5 0-3 5 4 8 13 8 13 8s-6.5-1.5-7 1c0 0-4.5 2 3 5-1 0-7 2-4 5 1 1 5 1 5 1s-6.5 1.4-4 4c1 1 5.5-1.5 5.5-1.5S19 70 21 68c2.4-2 7-6 7-6s-4.5 1-3.5 3c2 3.5 7 2 7 2v1l-2 1h3v2h-1l2 2s-3-2-2-4c0 0-1-1 3-3V68h2v12s2-2 3-5V68h4v6.5s-2 1.5 2 3.5 7 2.4 13-1.6c4.5-3.3 5-8.4 5-8.4l1 3v-2l1 2.3c2 2 4.4 3 6.6 4-2-2.3-2.6-4.6-2-6 1.4-2 4-2.5 6-3h2v-2h-3c-3 .5-5 .5-7-1-2.4-1.7-1.5-4-1-5s1.6-1.5 2-1l1-2h-13v-3h11.5v-3h-10.4c-.6.6-1.5 1.4-2.4 2h-9.5c0-.4 1-2.5 2.5-4l-11-.6s.4 3 1.5 4h-3.6z"/></svg>`
};

const technologies = [
    { svg: SVGs.react }, { svg: SVGs.javascript }, { svg: SVGs.nodejs }, { svg: SVGs.python },
    { svg: SVGs.photoshop }, { svg: SVGs.illustrator }, { svg: SVGs.mongodb }, { svg: SVGs.figma },
    { svg: SVGs.html }, { svg: SVGs.css }, { svg: SVGs.mysql }
];

export default function FloatLogos() {
    const [elements, setElements] = useState([]);

    useEffect(() => {
        // Generate random initial scattered positions to avoid them spawning perfectly in a line
        const arr = technologies.map((t) => ({
            ...t,
            x: Math.random() * 80 + 10, // 10% to 90%
            y: Math.random() * 80 + 10,
            duration: Math.random() * 20 + 20, // super slow 20s - 40s
            size: Math.random() * 30 + 30, // 30px to 60px
            delay: Math.random() * -20 // random start time so they are already moving
        }));
        setElements(arr);
    }, []);

    return (
        <div className={styles.floatContainer}>
            {elements.map((tech, index) => (
                <motion.div
                    key={index}
                    className={styles.floatingLogo}
                    style={{
                        width: tech.size,
                        height: tech.size,
                        left: `${tech.x}%`,
                        top: `${tech.y}%`
                    }}
                    animate={{
                        x: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                        y: [0, Math.random() * 100 - 50, Math.random() * 100 - 50, 0],
                        rotate: [0, Math.random() * 90 - 45, 0]
                    }}
                    transition={{
                        duration: tech.duration,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    dangerouslySetInnerHTML={{ __html: tech.svg }}
                />
            ))}
        </div>
    );
}
