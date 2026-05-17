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

  // iOS/Android only allow autoplay when `muted` + `playsinline` are
  // actually on the DOM node. React's `muted` prop doesn't always make it
  // onto the element, so we force the attributes via the ref before play().
  useEffect_KA(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");
    const tryPlay = () => v.play().catch(() => {});
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    v.addEventListener("loadeddata", tryPlay, { once: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, []);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: size,
        aspectRatio: "16 / 9",
        display: "block",
        filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.55))",
      }}
    >
      <video
        ref={ref}
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
      >
        <source src="assets/kid-loop.mov" type='video/mp4; codecs="hvc1"' />
        <source src="assets/kid-loop.webm" type="video/webm" />
      </video>
    </div>
  );
}

window.KidAvatar = KidAvatar;
