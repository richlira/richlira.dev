'use client';

import { useEffect, useRef } from 'react';

// Animated mesh gradient using Canvas
export default function MeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const colors = [
      { r: 26, g: 10, b: 46 },    // Deep purple
      { r: 13, g: 40, b: 71 },    // Dark blue
      { r: 45, g: 27, b: 78 },    // Purple
      { r: 10, g: 61, b: 98 },    // Teal blue
      { r: 74, g: 25, b: 66 },    // Magenta
      { r: 20, g: 80, b: 100 },   // Cyan
      { r: 60, g: 20, b: 80 },    // Violet
    ];

    const blobs = colors.map((color, i) => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0005,
      vy: (Math.random() - 0.5) * 0.0005,
      radius: 0.3 + Math.random() * 0.3,
      color,
      phase: i * (Math.PI * 2 / colors.length),
    }));

    const resize = () => {
      canvas.width = window.innerWidth * window.devicePixelRatio;
      canvas.height = window.innerHeight * window.devicePixelRatio;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
    };

    const draw = () => {
      time += 0.008;

      // Clear with base color
      ctx.fillStyle = '#0a0a1a';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Update and draw blobs
      blobs.forEach((blob, i) => {
        // Animate position with sine waves for smooth movement
        const offsetX = Math.sin(time + blob.phase) * 0.15;
        const offsetY = Math.cos(time * 0.7 + blob.phase) * 0.15;

        blob.x += blob.vx;
        blob.y += blob.vy;

        // Bounce off edges
        if (blob.x < 0 || blob.x > 1) blob.vx *= -1;
        if (blob.y < 0 || blob.y > 1) blob.vy *= -1;

        const x = (blob.x + offsetX) * canvas.width;
        const y = (blob.y + offsetY) * canvas.height;
        const radius = blob.radius * Math.max(canvas.width, canvas.height);

        // Create radial gradient
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

        // Animate color intensity
        const intensity = 0.4 + Math.sin(time + i) * 0.15;

        gradient.addColorStop(0, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${intensity})`);
        gradient.addColorStop(0.5, `rgba(${blob.color.r}, ${blob.color.g}, ${blob.color.b}, ${intensity * 0.5})`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      // Add subtle noise overlay
      ctx.globalAlpha = 0.02;
      for (let i = 0; i < 1000; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const brightness = Math.random() * 255;
        ctx.fillStyle = `rgb(${brightness}, ${brightness}, ${brightness})`;
        ctx.fillRect(x, y, 2, 2);
      }
      ctx.globalAlpha = 1;

      animationId = requestAnimationFrame(draw);
    };

    resize();
    window.addEventListener('resize', resize);
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0"
      style={{ background: '#0a0a1a' }}
    />
  );
}
