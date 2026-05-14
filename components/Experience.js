"use client";
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Lightbulb } from 'lucide-react';
import styles from './Experience.module.css';

const experiences = [
    {
        id: "e1",
        role: "Full Stack Developer Intern",
        company: "PES University – Central Library",
        points: [
            "Leading complete redesign and development of the university library website serving 1000+ students and faculty.",
            "Developed responsive UI using React for seamless device accessibility.",
            "Managed frontend-backend integration, ensuring optimal performance and robust functionality."
        ]
    },
    {
        id: "e2",
        role: "Graphic Design Intern",
        company: "Kreativan Technologies",
        points: [
            "Designed and implemented responsive web layouts focusing on UX and cross-platform compatibility.",
            "Produced high-fidelity visual assets and marketing collateral using Adobe Photoshop and Illustrator to enhance brand identity.",
            "Utilized Figma for wireframing and prototyping, bridging the gap between creative concepts and functional web technologies."
        ]
    }
];

const education = [
    {
        id: "ed1",
        degree: "Master of Computer Applications",
        school: "PES University",
        year: "2024 - Present"
    },
    {
        id: "ed2",
        degree: "Bachelor of Computer Applications",
        school: "Chitkara University",
        year: "2021 - 2024"
    }
];

const patents = [
    { id: "p1", title: "Power Bank with Multiple Use", type: "Design: 360134-001 (Granted)" },
    { id: "p2", title: "Smart Induction Pan", type: "Design: 373206-001 (Granted)" },
    { id: "p3", title: "Health Monitoring Wearable Device", type: "Utility patent: 202211032443 (Filed)" }
];

const certifications = [
    { id: "c1", title: "Introduction to Cyber Security", org: "Cisco" },
    { id: "c2", title: "Foundation of User Experience (UX) Design", org: "Coursera" }
];

export default function Experience() {
    return (
        <section id="experience" className={styles.section}>
            <div className="container">

                <div className={styles.grid}>
                    {/* Work Experience */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.column}
                    >
                        <div className={styles.header}>
                            <Briefcase size={28} className={styles.icon} />
                            <h2>Work Experience</h2>
                        </div>

                        <div className={styles.timeline}>
                            {experiences.map((exp) => (
                                <div key={exp.id} className={styles.timelineItem}>
                                    <div className={styles.dot}></div>
                                    <h3>{exp.role}</h3>
                                    <h4>{exp.company}</h4>
                                    <ul>
                                        {exp.points.map((point, i) => (
                                            <li key={i}>{point}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <div className={styles.rightColumn}>
                        {/* Education */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className={styles.column}
                        >
                            <div className={styles.header}>
                                <GraduationCap size={28} className={styles.icon} />
                                <h2>Education</h2>
                            </div>

                            <div className={styles.timeline}>
                                {education.map((edu) => (
                                    <div key={edu.id} className={styles.timelineItem}>
                                        <div className={styles.dot}></div>
                                        <h3>{edu.degree}</h3>
                                        <h4>{edu.school}</h4>
                                        <span className={styles.year}>{edu.year}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Patents */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className={`${styles.column} ${styles.mt}`}
                        >
                            <div className={styles.header}>
                                <Lightbulb size={28} className={styles.icon} />
                                <h2>Patents</h2>
                            </div>

                            <div className={styles.timeline}>
                                {patents.map((patent) => (
                                    <div key={patent.id} className={styles.timelineItem}>
                                        <div className={styles.dot}></div>
                                        <h3>{patent.title}</h3>
                                        <span className={styles.year}>{patent.type}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Certifications */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className={`${styles.column} ${styles.mt}`}
                        >
                            <div className={styles.header}>
                                <Award size={28} className={styles.icon} />
                                <h2>Certifications</h2>
                            </div>

                            <div className={styles.timeline}>
                                {certifications.map((cert) => (
                                    <div key={cert.id} className={styles.timelineItem}>
                                        <div className={styles.dot}></div>
                                        <h3>{cert.title}</h3>
                                        <span className={styles.year}>{cert.org}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
