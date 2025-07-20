import { useEffect, useRef } from "react";

export default function VantaWavesBackground() {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);

  useEffect(() => {
    // הגנה מסביבת SSR או טעינה מוקדמת
    if (
      typeof window !== "undefined" &&
      !vantaEffect.current &&
      window.VANTA?.WAVES &&
      window.THREE &&
      vantaRef.current
    ) {
      vantaEffect.current = window.VANTA.WAVES({
        el: vantaRef.current,
        THREE: window.THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0x0,
      });
    }

    return () => {
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, []);

  return <div ref={vantaRef} className="blackBg" />;
}
