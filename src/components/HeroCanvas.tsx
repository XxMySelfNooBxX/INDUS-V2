"use client";
import { useEffect, useRef } from "react";

export default function HeroCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let animationFrameId: number;
    let particles: any[] = [];
    const resize = () => { canvas.width = window.innerWidth; canvas.height = window.innerHeight; };
    resize();
    window.addEventListener("resize", resize);
    class Particle {
      x: number; y: number; size: number; speed: number; opacity: number; drift: number;
      constructor() {
        this.x = Math.random() * canvas!.width; this.y = Math.random() * canvas!.height;
        this.size = Math.random() * 1.5 + 0.3; this.speed = Math.random() * 0.3 + 0.1;
        this.opacity = Math.random() * 0.5 + 0.1; this.drift = (Math.random() - 0.5) * 0.3;
      }
      update() {
        this.y -= this.speed; this.x += this.drift;
        if (this.y < -10) { this.x = Math.random() * canvas!.width; this.y = canvas!.height + 10; }
      }
      draw() {
        ctx!.beginPath(); ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(212, 175, 55, ${this.opacity})`;
        ctx!.shadowBlur = 8; ctx!.shadowColor = "rgba(212, 175, 55, 0.6)"; ctx!.fill();
      }
    }
    for (let i = 0; i < 60; i++) particles.push(new Particle());
    const animate = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      particles.forEach(p => { p.update(); p.draw(); });
      animationFrameId = requestAnimationFrame(animate);
    };
    animate();
    return () => { window.removeEventListener("resize", resize); cancelAnimationFrame(animationFrameId); };
  }, []);
  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}
