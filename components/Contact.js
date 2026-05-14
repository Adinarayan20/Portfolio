"use client";
import { motion } from 'framer-motion';
import { Mail, MapPin, Send, Phone } from 'lucide-react';
import styles from './Contact.module.css';

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <div className="container">
                <div className={styles.grid}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className={styles.info}
                    >
                        <h2 className="text-gradient">Let's Connect</h2>
                        <p className={styles.description}>
                            Whether you have a question, a project idea, or just want to say hi, my inbox is always open.
                            I'll try my best to get back to you!
                        </p>

                        <div className={styles.contactItems}>
                            <div className={styles.item}>
                                <div className={styles.iconWrapper}><Phone size={20} /></div>
                                <div>
                                    <h4>Phone</h4>
                                    <p>+91 7903827114</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconWrapper}><Mail size={20} /></div>
                                <div>
                                    <h4>Email</h4>
                                    <p>adi.narayan200320@gmail.com</p>
                                </div>
                            </div>
                            <div className={styles.item}>
                                <div className={styles.iconWrapper}><MapPin size={20} /></div>
                                <div>
                                    <h4>Location</h4>
                                    <p>Bengaluru, Karnataka</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className={`glass-panel ${styles.form}`}>
                            <div className={styles.formGroup}>
                                <label htmlFor="name">Name</label>
                                <input type="text" id="name" placeholder="Aditya Narayan" required className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" placeholder="adi.narayan200320@gmail.com" required className={styles.input} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="message">Message</label>
                                <textarea id="message" rows={5} placeholder="How can I help you?" required className={styles.textarea}></textarea>
                            </div>

                            <button type="submit" className={`btn btn-primary ${styles.submitBtn}`}>
                                Send Message <Send size={18} style={{ marginLeft: '8px' }} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
