import Stats from "stats.js";
import { useEffect } from "react";

export default function StatsOverlay() {
  useEffect(() => {
    const stats = new Stats();
    stats.showPanel(0); // 0 = fps
    document.body.appendChild(stats.dom);

    const loop = () => {
      stats.begin();
      // update/render logic here
      stats.end();
      requestAnimationFrame(loop);
    };

    requestAnimationFrame(loop);

    return () => {
      stats.dom.remove();
    };
  }, []);

  return null;
}
