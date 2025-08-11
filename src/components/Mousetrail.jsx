import React, { useEffect, useRef, useState } from "react";

const Mousetrail = () => {
  const canvasRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const lastMoveTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e) => {
      lastMoveTime.current = Date.now();
      setTrail((prevTrail) => [
        { x: e.clientX, y: e.clientY },
        ...prevTrail.slice(0, 10),
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      const now = Date.now();
      const idleTime = now - lastMoveTime.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";

      for (let i = 0; i < trail.length - 2; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        const t = (trail.length - i) / trail.length;

        const cpX = (p1.x + p2.x) / 2;
        const cpY = (p1.y + p2.y) / 2;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.quadraticCurveTo(cpX, cpY, p2.x, p2.y);

        ctx.strokeStyle = `rgba(255, 230, 255, ${t})`; // neon purple
        ctx.lineWidth = 4 * t;
        ctx.shadowColor = `rgba(100, 0, 200, ${t})`;
        ctx.shadowBlur = 40 * t;
        ctx.stroke();
      }

      if (idleTime > 600 && trail.length > 0) {
        setTrail((prev) => prev.slice(0, -1));
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, [trail]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
    />
  );
};

export default Mousetrail;
