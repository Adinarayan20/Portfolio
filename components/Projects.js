"use client";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ExternalLink, Github, X } from 'lucide-react';
import styles from './Projects.module.css';

const webProjects = [
    {
        id: "p1",
        title: "GreenSphere (Integrated Agriculture App)",
        description: "Developed a cross-platform agriculture app with a 500+ crop database, equipment marketplace, and government schemes portal. Features a multilingual, modular architecture.",
        image: "/saas.png",
        tags: ["React Native", "TypeScript", "Expo", "Firebase"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: "p2",
        title: "University Library Website",
        description: "Led the complete redesign and development of PES University's central library website, serving over 1000 students and faculty.",
        image: "/fintech.png",
        tags: ["React", "Node.js", "Express", "MySQL"],
        demoUrl: "#",
        githubUrl: "#"
    },
    {
        id: "p3",
        title: "Responsive Web Layouts",
        description: "Designed and implemented numerous responsive web layouts focusing on UX, using high-fidelity visual assets and functional web technologies.",
        image: "/ecommerce.png",
        tags: ["Figma", "React", "CSS3"],
        demoUrl: "#",
        githubUrl: "#"
    }
];

const designWorks = [
    { id: "d1", title: "Burger Poster Branding", image: "/Design/BURGER POSTER copy.jpg", category: "Advertising" },
    { id: "d2", title: "Cinematic Movie Poster", image: "/Design/MOVIE POSTER.jpg", category: "Poster Design" },
    { id: "d3", title: "Baishakhi Celebration", image: "/Design/Baishakhi.jpg", category: "Social Media" },
    { id: "d4", title: "Holi Festival Poster", image: "/Design/1HOLI.jpg", category: "Event Graphics" },
    { id: "d5", title: "Detox Product Branding", image: "/Design/DETOX POSTER copy.jpg", category: "Branding" },
    { id: "d6", title: "Valentine's Day Campaign", image: "/Design/VALENTINE DAY copy.jpg", category: "Social Media" },
    { id: "d7", title: "Navratri Festival", image: "/Design/Navratri.jpg", category: "Cultural Design" },
    { id: "d8", title: "Ram Navami Greeting", image: "/Design/Ram navmi copy.jpg", category: "Banner Design" },
    { id: "d9", title: "Artistic Shadow Play", image: "/Design/SHADOW.jpg", category: "Creative Art" },
    { id: "d10", title: "Dynamic Footwear Animation", image: "/Design/SHOE.gif", category: "Motion Graphics" },
    { id: "d11", title: "YouTube Thumbnail Design", image: "/Design/THUMBNAIL copy.jpg", category: "Digital Media" },
    { id: "d12", title: "Women's Day Special", image: "/Design/Women day copy.jpg", category: "Awareness" },
    { id: "d13", title: "Cycle Typography Art", image: "/Design/cycle typography copy.jpg", category: "Typography" },
    { id: "d14", title: "Green Tea Packaging", image: "/Design/green tea copy.jpg", category: "Product Design" },
    { id: "d15", title: "E-Commerce Watch Promo", image: "/Design/watch copy.jpg", category: "Advertising" },
    { id: "d16", title: "Apparel Mockup Branding", image: "/Design/tshirt copy.jpg", category: "Merchandise" },
    { id: "d17", title: "Website UI Design", image: "/Design/website.jpg", category: "UI/UX" },
    { id: "d18", title: "Digital Abstract Concept", image: "/Design/Untitled-2.gif", category: "Experimental" },
    { id: "d19", title: "Portrait Photography Edit", image: "/Design/eugene-tkachenko-w-NovzoaxD4-unsplash copy.jpg", category: "Photo Manipulation" }
];

export default function Projects() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [isViewAllModalOpen, setIsViewAllModalOpen] = useState(false);

    // Body scroll lock effect
    useEffect(() => {
        if (selectedImage || isViewAllModalOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [selectedImage, isViewAllModalOpen]);

    const initialDesigns = designWorks.slice(0, 4);

    return (
        <section id="projects" className={styles.section}>
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Featured Work</h2>
                    <p>Some things I've built recently</p>
                </div>

                <div className={styles.grid}>
                    {webProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`glass-panel ${styles.card}`}
                        >
                            <div className={styles.imageWrapper}>
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    priority={index < 2} // Preload the first two web projects
                                    quality={75}
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    className={styles.image}
                                />
                            </div>
                            <div className={styles.content}>
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className={styles.tags}>
                                    {project.tags.map(tag => (
                                        <span key={tag} className={styles.tag}>{tag}</span>
                                    ))}
                                </div>
                                <div className={styles.links}>
                                    <a href={project.githubUrl} className={styles.link} aria-label="Github link"><Github size={20} /></a>
                                    <a href={project.demoUrl} className={styles.link} aria-label="Live demo"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className={styles.designSection}>
                    <div className={styles.header} style={{ marginTop: '6rem' }}>
                        <h2 className="text-gradient">My Creative Designs</h2>
                        <p>Visual projects designed and crafted by me</p>
                    </div>

                    <div className={styles.designGrid}>
                        {initialDesigns.map((work, index) => (
                            <motion.div
                                key={work.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.05, duration: 0.4 }}
                                className={styles.designItem}
                                onClick={() => setSelectedImage(work)}
                            >
                                <div className={styles.designImageWrapper}>
                                    <Image
                                        src={work.image}
                                        alt={work.title}
                                        fill
                                        priority={index < 4} // Preload the first row of designs
                                        quality={65} // Lower quality for grid thumbnails for speed
                                        unoptimized={work.image.endsWith('.gif')}
                                        sizes="(max-width: 768px) 50vw, 25vw"
                                        className={styles.designImage}
                                    />
                                    <div className={styles.designOverlay}>
                                        <span className={styles.designCategory}>{work.category}</span>
                                        <h4>{work.title}</h4>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <div className={styles.viewAllWrapper}>
                        <motion.button
                            className="btn btn-secondary"
                            onClick={() => setIsViewAllModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            View All Designs
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Modals outside container for proper stacking context */}
            <AnimatePresence>
                {isViewAllModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.fullGridModal}
                    >
                        <div className={styles.modalHeader}>
                            <h2 className="text-gradient">Visual Designs I've Created</h2>
                            <motion.button
                                className={styles.modalCloseBtn}
                                onClick={() => setIsViewAllModalOpen(false)}
                                whileHover={{ rotate: 90 }}
                            >
                                <X size={24} />
                            </motion.button>
                        </div>
                        <div className={styles.modalContent}>
                            <div className={styles.designGridFull}>
                                {designWorks.map((work, index) => (
                                    <motion.div
                                        key={work.id}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.03 }}
                                        className={styles.designItem}
                                        onClick={() => setSelectedImage(work)}
                                    >
                                        <div className={styles.designImageWrapper}>
                                            <Image
                                                src={work.image}
                                                alt={work.title}
                                                fill
                                                unoptimized={work.image.endsWith('.gif')}
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                                className={styles.designImage}
                                            />
                                            <div className={styles.designOverlay}>
                                                <span className={styles.designCategory}>{work.category}</span>
                                                <h4>{work.title}</h4>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className={styles.lightbox}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.button
                            className={styles.closeBtn}
                            onClick={() => setSelectedImage(null)}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            className={styles.lightboxContent}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <div className={styles.lightboxImageWrapper}>
                                <Image
                                    src={selectedImage.image}
                                    alt={selectedImage.title}
                                    fill
                                    className={styles.fullImage}
                                    unoptimized={selectedImage.image.endsWith('.gif')}
                                    priority
                                />
                            </div>
                            <div className={styles.lightboxInfo}>
                                <span className={styles.designCategory}>{selectedImage.category}</span>
                                <h3>{selectedImage.title}</h3>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
