"use client";
import { useEffect, useRef } from "react";
import styles from "./Background.module.css";

export default function Background() {
    const canvasRef = useRef(null);

    useEffect(() => {
        // Add interactive hover spotlight effect to all glass panels globally
        const handleMouseGlass = (e) => {
            const cards = document.querySelectorAll(".glass-panel");
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty("--mouse-x", `${x}px`);
                card.style.setProperty("--mouse-y", `${y}px`);
            }
        };
        window.addEventListener("mousemove", handleMouseGlass);
        return () => window.removeEventListener("mousemove", handleMouseGlass);
    }, []);

    useEffect(() => {
        // Antigravity style Interactive Spherical Particle Clusters
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");
        let animationFrameId;

        let width = window.innerWidth;
        let height = window.innerHeight;

        // We'll use this to create smooth parallax movement
        let mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

        const handleMouseMove = (e) => {
            mouse.targetX = e.clientX;
            mouse.targetY = e.clientY;
        };

        window.addEventListener("mousemove", handleMouseMove);

        // 3D rotation math function
        const rotate3D = (x, y, z, angleX, angleY) => {
            // Rotate around X
            let cosX = Math.cos(angleX);
            let sinX = Math.sin(angleX);
            let y1 = y * cosX - z * sinX;
            let z1 = y * sinX + z * cosX;

            // Rotate around Y
            let cosY = Math.cos(angleY);
            let sinY = Math.sin(angleY);
            let x2 = x * cosY + z1 * sinY;
            let z2 = -x * sinY + z1 * cosY;

            return { x: x2, y: y1, z: z2 };
        };

        // Class to represent one of the "dandelion" particle spheres
        class ParticleSphere {
            constructor(centerX, centerY, radius, particleCount, colorHex) {
                this.centerX = centerX;
                this.centerY = centerY;
                this.baseRadius = radius;
                this.particles = [];
                this.color = colorHex; // format: 'r, g, b'
                this.angleX = Math.random() * Math.PI * 2;
                this.angleY = Math.random() * Math.PI * 2;
                this.rotationSpeedX = (Math.random() - 0.5) * 0.003;
                this.rotationSpeedY = (Math.random() - 0.5) * 0.003;

                // Generate points evenly distributed on a sphere (Fibonacci lattice)
                const phi = Math.PI * (3 - Math.sqrt(5)); // golden angle
                for (let i = 0; i < particleCount; i++) {
                    const y = 1 - (i / (particleCount - 1)) * 2; // y goes from 1 to -1
                    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
                    const theta = phi * i; // golden angle increment

                    const x = Math.cos(theta) * radiusAtY;
                    const z = Math.sin(theta) * radiusAtY;

                    this.particles.push({
                        ox: x, oy: y, oz: z, // Original coordinates on a unit sphere (radius 1)
                        noiseOffset: Math.random() * 100 // helps create "breathing" effect
                    });
                }
            }

            updateAndDraw(time, parallaxX, parallaxY) {
                this.angleX += this.rotationSpeedX;
                this.angleY += this.rotationSpeedY;

                // Pre-calculated FOV constant
                const fov = 800;
                const baseZ = 200;

                for (let p of this.particles) {
                    // Optimized breathing effect
                    const r = this.baseRadius + Math.sin(time * 0.002 + p.noiseOffset) * 4;

                    let { x, y, z } = rotate3D(p.ox * r, p.oy * r, p.oz * r, this.angleX, this.angleY);

                    // Perspective projection
                    const perspective = fov / (fov + z + baseZ);

                    const finalX = this.centerX + x * perspective + parallaxX;
                    const finalY = this.centerY + y * perspective + parallaxY;

                    // Far particles are smaller
                    const size = Math.max(0.5, perspective * 1.5);

                    // Skip drawing if alpha is negligible or size is too small
                    const alphaFade = Math.min(1, Math.max(0.1, (z + this.baseRadius) / (this.baseRadius * 1.8)));

                    ctx.beginPath();
                    ctx.arc(finalX, finalY, size, 0, Math.PI * 2);
                    ctx.fillStyle = `rgba(${this.color}, ${alphaFade * 0.9})`;
                    ctx.fill();
                }
            }
        }

        // --- Generate Scattered Background Noise Particles (the tiny static dots) ---
        const scatteredParticles = [];
        let spheres = [];

        const initCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            width = canvas.width;
            height = canvas.height;

            // Re-initialize scattered noise
            scatteredParticles.length = 0;
            const count = Math.floor((width * height) / 10000);
            for (let i = 0; i < count; i++) {
                scatteredParticles.push({
                    x: Math.random() * width,
                    y: Math.random() * height,
                    size: Math.random() * 1 + 0.5,
                    speedX: (Math.random() - 0.5) * 0.2,
                    speedY: (Math.random() - 0.5) * 0.2,
                    alpha: Math.random() * 0.4 + 0.1,
                });
            }

            // Initialize the Antigravity-style Sphere Clusters
            // We position them similarly to the reference image (grouped on the right side)
            const isMobile = width < 768;

            if (!isMobile) {
                spheres = [
                    // Center Large Primary Blue Sphere
                    new ParticleSphere(width * 0.75, height * 0.5, 180, 500, '79, 70, 229'), // Indigo (reduced from 800)

                    // Surrounding satellite spheres
                    new ParticleSphere(width * 0.60, height * 0.30, 90, 200, '56, 189, 248'), // Sky Blue (reduced from 300)
                    new ParticleSphere(width * 0.62, height * 0.72, 110, 250, '192, 38, 211'), // Magenta (reduced from 400)
                    new ParticleSphere(width * 0.88, height * 0.28, 80, 150, '255, 255, 255'), // White (reduced from 200)
                    new ParticleSphere(width * 0.85, height * 0.80, 95, 150, '255, 255, 255')  // White (reduced from 250)
                ];
            } else {
                // Mobile configuration
                spheres = [
                    new ParticleSphere(width * 0.5, height * 0.2, 120, 300, '79, 70, 229'),
                    new ParticleSphere(width * 0.8, height * 0.05, 60, 100, '56, 189, 248'),
                ];
            }
        };

        window.addEventListener("resize", initCanvas);
        initCanvas();

        let time = 0;

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            time++;

            // Smooth mouse follow easing for parallax
            mouse.x += (mouse.targetX - mouse.x) * 0.05;
            mouse.y += (mouse.targetY - mouse.y) * 0.05;

            // Calculate parallax offset
            const parallaxX = (mouse.x - width / 2) * -0.04;
            const parallaxY = (mouse.y - height / 2) * -0.04;

            // 1. Draw scattered dots
            for (let p of scatteredParticles) {
                p.x += p.speedX;
                p.y += p.speedY;

                // seamless wrap around
                if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;

                ctx.beginPath();
                // Scattered dots have slight parallax
                ctx.arc(p.x + parallaxX * 0.5, p.y + parallaxY * 0.5, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255,255,255, ${p.alpha})`;
                ctx.fill();
            }

            // 2. Draw the 3D 
            for (let i = 0; i < spheres.length; i++) {
                // Individual spheres move slightly differently for a multi-layered parallax effect
                const depthMultiplier = 1 + (i * 0.2);
                spheres[i].updateAndDraw(time, parallaxX * depthMultiplier, parallaxY * depthMultiplier);
            }

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
            window.removeEventListener("resize", initCanvas);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div className={styles.bgContainer}>
            <canvas ref={canvasRef} className={styles.particleCanvas} />
            {/* We keep the glowing blobs for depth behind the dots */}
            <div className={styles.meshGradient}>
                <div className={styles.blob1}></div>
                <div className={styles.blob2}></div>
                <div className={styles.blob3}></div>
                <div className={styles.blob4}></div>
            </div>
        </div>
    );
}
