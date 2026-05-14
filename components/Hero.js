"use client";
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Linkedin } from 'lucide-react';
import styles from './Hero.module.css';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    // Parallax effects
    const yElement = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const opacityElement = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 40, filter: "blur(10px)" },
        visible: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
        }
    };

    return (
        <section id="home" className={styles.hero} ref={ref}>
            <motion.div
                className="container"
                style={{ y: yElement, opacity: opacityElement }}
            >
                <motion.div
                    className={styles.content}
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.div variants={itemVariants} className={styles.badge}>
                        <span className={styles.pulse}></span> Open to work
                    </motion.div>

                    <motion.h1 variants={itemVariants} className={styles.title}>
                        Hi, I'm <br />
                        <span className="text-gradient">Aditya Narayan</span>.
                    </motion.h1>

                    <motion.p variants={itemVariants} className={styles.subtitle}>
                        A Full-stack developer with expertise in creating responsive web and mobile applications.
                        Skilled in transforming sophisticated designs into clean, scalable software.
                    </motion.p>

                    <motion.div variants={itemVariants} className={styles.actions}>
                        <a href="#projects" className="btn btn-primary">
                            View My Work <ArrowRight size={18} style={{ marginLeft: "8px" }} />
                        </a>
                        <a href="https://www.linkedin.com/in/aditya-narayan-346521224" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">
                            LinkedIn <Linkedin size={18} style={{ marginLeft: "8px" }} />
                        </a>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
