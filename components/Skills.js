"use client";
import { motion } from 'framer-motion';
import { Layers, Smartphone, Layout, Monitor, Database } from 'lucide-react';
import styles from './Skills.module.css';
import TechMarquee from './TechMarquee';

const skills = [
    { name: "Frontend Development", icon: <Layout />, id: "s1", desc: "React.js, React Native, HTML, CSS, JavaScript" },
    { name: "Backend & Database", icon: <Database />, id: "s2", desc: "Node.js, Express.js, Flask, Python, MySQL, MongoDB" },
    { name: "Design & UI/UX", icon: <Monitor />, id: "s3", desc: "Figma, Adobe Photoshop, Adobe Illustrator, Responsive Design" },
    { name: "Core Concepts", icon: <Layers />, id: "s4", desc: "REST APIs, Authentication, CRUD Operations, Performance Optimization" }
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <TechMarquee />
            <div className="container">
                <div className={styles.header}>
                    <h2 className="text-gradient">Core Skills</h2>
                    <p>What I bring to the table</p>
                </div>

                <div className={styles.grid}>
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={`glass-panel ${styles.card}`}
                        >
                            <div className={styles.icon}>{skill.icon}</div>
                            <h3>{skill.name}</h3>
                            <p>{skill.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
