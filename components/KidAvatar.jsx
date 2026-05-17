/* global React */
const { useRef: useRef_KA, useEffect: useEffect_KA } = React;

/**
 * KidAvatar — looping 16:9 video of a kid in Burundi kit doing kick-ups.
 * Background has been removed (transparent webm) so it sits on the navy
 * hero without any matte halo. Plays muted on loop, 8s.
 *
 * `size` controls the width; height is derived from the 16:9 aspect.
 */
function KidAvatar({ size = 420 }) {
  const ref = useRef_KA(null);

  // Some browsers stall the autoplay handshake on transparent webm; nudge it.
  useEffect_KA(() => {
    const v = ref.current;
    if (!v) return;
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    return () => v.removeEventListener("canplay", tryPlay);
  }, []);

  const w = size;
  const h = Math.round((size * 9) / 16);

  return (
    <div
      style={{
        position: "relative",
        width: w,
        height: h,
        display: "inline-block",
        filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.55))",
      }}
    >
      <video
        ref={ref}
        src="assets/kid-loop.webm"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          display: "block",
          pointerEvents: "none",
          background: "transparent",
        }}
      />
    </div>
  );
}

window.KidAvatar = KidAvatar;
