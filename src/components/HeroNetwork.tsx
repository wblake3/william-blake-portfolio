"use client";

import { useEffect, useRef } from "react";

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  r: number;
  seed: number;
};

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function isSmallScreen() {
  return window.matchMedia("(max-width: 768px)").matches;
}

export function HeroNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const pointer = { x: 0, y: 0, active: false };
    let nodes: Node[] = [];
    let raf = 0;
    let time = 0;
    let reduced = prefersReducedMotion();
    let small = isSmallScreen();
    let seeded = false;

    const size = () => canvas.getBoundingClientRect();

    const seed = (width: number, height: number) => {
      small = isSmallScreen();
      const count = small ? 32 : 64;
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: small ? 1.8 + Math.random() * 1.6 : 2.1 + Math.random() * 2.4,
        seed: i * 1.37,
      }));
      seeded = true;
    };

    const resize = () => {
      const { width, height } = size();
      if (width < 8 || height < 8) return false;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (!seeded || nodes.length === 0) {
        seed(width, height);
      } else {
        for (const node of nodes) {
          node.x = Math.min(width, Math.max(0, node.x));
          node.y = Math.min(height, Math.max(0, node.y));
        }
      }
      return true;
    };

    const draw = (animate: boolean) => {
      const { width, height } = size();
      if (width < 8 || height < 8) return;

      ctx.clearRect(0, 0, width, height);

      const styles = getComputedStyle(document.documentElement);
      const nodeFill = styles.getPropertyValue("--network-node").trim() || "#1a6fd4";
      const coreFill = styles.getPropertyValue("--network-core").trim() || "#7ec8ff";
      const linkRgb = styles.getPropertyValue("--network-link").trim() || "26, 111, 212";
      const glowRgb = styles.getPropertyValue("--network-glow").trim() || "59, 158, 255";
      const linkDist = small ? 110 : 168;

      if (animate) {
        time += 0.016;
        for (const node of nodes) {
          node.vx += Math.sin(time * 0.55 + node.seed) * 0.014;
          node.vy += Math.cos(time * 0.42 + node.seed * 0.8) * 0.014;

          if (pointer.active) {
            const dx = pointer.x - node.x;
            const dy = pointer.y - node.y;
            const dist = Math.hypot(dx, dy) || 1;
            const radius = small ? 130 : 200;
            if (dist < radius) {
              const force = (1 - dist / radius) * 0.1;
              node.vx += (dx / dist) * force;
              node.vy += (dy / dist) * force;
            }
          }

          node.vx *= 0.96;
          node.vy *= 0.96;
          node.x += node.vx;
          node.y += node.vy;

          if (node.x < 0) {
            node.x = 0;
            node.vx *= -0.8;
          } else if (node.x > width) {
            node.x = width;
            node.vx *= -0.8;
          }
          if (node.y < 0) {
            node.y = 0;
            node.vy *= -0.8;
          } else if (node.y > height) {
            node.y = height;
            node.vy *= -0.8;
          }
        }
      }

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const a = nodes[i];
          const b = nodes[j];
          const dist = Math.hypot(a.x - b.x, a.y - b.y);
          if (dist < linkDist) {
            const alpha = (1 - dist / linkDist) * 0.55;
            ctx.strokeStyle = `rgba(${linkRgb}, ${alpha})`;
            ctx.lineWidth = 1.15;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const glow = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.r * 7,
        );
        glow.addColorStop(0, `rgba(${glowRgb}, 0.45)`);
        glow.addColorStop(1, `rgba(${glowRgb}, 0)`);
        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 7, 0, Math.PI * 2);
        ctx.fill();

        ctx.fillStyle = nodeFill;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = coreFill;
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.r * 0.45, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      draw(true);
      raf = window.requestAnimationFrame(tick);
    };

    const startLoop = () => {
      window.cancelAnimationFrame(raf);
      if (reduced) {
        draw(false);
        return;
      }
      raf = window.requestAnimationFrame(tick);
    };

    const onPointerMove = (event: PointerEvent) => {
      const rect = size();
      pointer.x = event.clientX - rect.left;
      pointer.y = event.clientY - rect.top;
      pointer.active = true;
    };

    const onPointerLeave = () => {
      pointer.active = false;
    };

    const onMotionChange = () => {
      reduced = prefersReducedMotion();
      startLoop();
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    motionQuery.addEventListener("change", onMotionChange);

    const observer = new ResizeObserver(() => {
      if (resize()) {
        if (reduced) draw(false);
      }
    });
    observer.observe(canvas);

    const boot = () => {
      if (!resize()) {
        raf = window.requestAnimationFrame(boot);
        return;
      }
      startLoop();
    };
    boot();

    const onThemeChange = () => {
      if (reduced) draw(false);
    };

    window.addEventListener("pointermove", onPointerMove);
    window.addEventListener("pointerleave", onPointerLeave);
    window.addEventListener("themechange", onThemeChange);

    return () => {
      window.cancelAnimationFrame(raf);
      observer.disconnect();
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("pointerleave", onPointerLeave);
      window.removeEventListener("themechange", onThemeChange);
      motionQuery.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[1] h-full w-full"
    />
  );
}
