'use client';

import { useEffect, useRef } from 'react';

export default function Web3Background() {
  const canvasRef = useRef(null);
  const scrollVelocityRef = useRef(0);
  const lastScrollRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationId;

    // Set canvas size
    const resizeCanvas = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    };
    resizeCanvas();
    
    // Use passive listener for better scroll performance
    window.addEventListener('resize', resizeCanvas);
    // Also handle orientation change
    window.addEventListener('orientationchange', resizeCanvas);

    // Create particles/nodes
    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseVx = (Math.random() - 0.5) * 1;
        this.baseVy = (Math.random() - 0.5) * 1;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
        this.radius = Math.random() * 2 + 1;
        this.opacity = Math.random() * 0.6 + 0.4;
      }

      update(scrollMultiplier) {
        // Apply scroll-based speed multiplier
        this.vx = this.baseVx * (1 + scrollMultiplier);
        this.vy = this.baseVy * (1 + scrollMultiplier);

        // Update position
        this.x += this.vx;
        this.y += this.vy;

        // Better boundary handling with padding
        const padding = this.radius + 5;

        // Bounce off edges with proper bounds checking
        if (this.x - this.radius <= padding) {
          this.x = padding + this.radius;
          this.vx = Math.abs(this.vx); // Ensure moving right
        } else if (this.x + this.radius >= canvas.width - padding) {
          this.x = canvas.width - padding - this.radius;
          this.vx = -Math.abs(this.vx); // Ensure moving left
        }

        if (this.y - this.radius <= padding) {
          this.y = padding + this.radius;
          this.vy = Math.abs(this.vy); // Ensure moving down
        } else if (this.y + this.radius >= canvas.height - padding) {
          this.y = canvas.height - padding - this.radius;
          this.vy = -Math.abs(this.vy); // Ensure moving up
        }
      }

      draw(ctx) {
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.shadowColor = `rgba(255, 255, 255, ${this.opacity * 0.8})`;
        ctx.shadowBlur = 15;
        ctx.shadowOffsetX = 0;
        ctx.shadowOffsetY = 0;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowColor = 'transparent';
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Track scroll velocity
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      scrollVelocityRef.current = Math.abs(currentScroll - lastScrollRef.current) / 10;
      lastScrollRef.current = currentScroll;
      
      // Dampen scroll velocity over time
      setTimeout(() => {
        scrollVelocityRef.current *= 0.95;
      }, 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    // Animation loop
    const animate = () => {
      // Clear canvas with transparent background
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clamp scroll velocity between 0 and 3
      const scrollMultiplier = Math.min(scrollVelocityRef.current / 5, 3);

      // Update and draw particles
      particles.forEach((particle) => {
        particle.update(scrollMultiplier);
        
        // Safety check: reset particle if it escapes bounds
        if (particle.x < -100 || particle.x > canvas.width + 100 ||
            particle.y < -100 || particle.y > canvas.height + 100) {
          particle.x = Math.random() * canvas.width;
          particle.y = Math.random() * canvas.height;
        }
        
        particle.draw(ctx);
      });

      // Draw connections between nearby particles
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          // Increase connection range when scrolling
          const connectionRange = 200 + scrollMultiplier * 50;
          
          if (distance < connectionRange) {
            const opacity = (1 - distance / connectionRange) * (0.3 + scrollMultiplier * 0.2);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
            ctx.lineWidth = 0.5 + scrollMultiplier * 0.2;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('orientationchange', resizeCanvas);
      window.removeEventListener('scroll', handleScroll);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
}
