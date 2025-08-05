import React, { useEffect, useRef, useState } from "react";

const Mousetrail = () => {
  const canvasRef = useRef(null);
  const [trail, setTrail] = useState([]);
  const fadeRef = useRef(null);      // Ref to handle fade timeout
  const lastMoveTime = useRef(Date.now());

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const handleMouseMove = (e) => {
      lastMoveTime.current = Date.now();

      setTrail((prevTrail) => [
        { x: e.clientX, y: e.clientY },
        ...prevTrail.slice(0, 15),
      ]);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const draw = () => {
      const now = Date.now();
      const idleTime = now - lastMoveTime.current;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.lineCap = "round";

      for (let i = 0; i < trail.length - 1; i++) {
        const p1 = trail[i];
        const p2 = trail[i + 1];
        const t = (trail.length - i) / trail.length;

        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.strokeStyle = `rgba(0, 200, 255, ${t})`;
        ctx.lineWidth = 12 * t;
        ctx.shadowColor = "rgba(0, 200, 255, 0.8)";
        ctx.shadowBlur = 30;
        ctx.stroke();
      }

      // ✨ Start fading out after 2 seconds of no movement
      if (idleTime > 500 && trail.length > 0) {
        setTrail((prevTrail) => prevTrail.slice(0, -1)); // gradually remove the last point
      }

      requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [trail]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 9999,
        pointerEvents: "none",
      }}
    />
  );
};

export default Mousetrail;
