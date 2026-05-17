/* global React */
const { useRef: useRef_KA, useState: useState_KA, useEffect: useEffect_KA } = React;

/**
 * KidAvatar — looping 16:9 clip of a kid in Burundi kit doing kick-ups.
 *
 * Primary: transparent-background <video> (HEVC alpha for Safari,
 * VP8 alpha webm for everything else). Highest quality and smoothest
 * playback for the 95% of viewers who can play it.
 *
 * Fallback: animated WebP, used only when video autoplay fails — most
 * commonly iOS Low Power Mode, which blocks <video autoplay> at the OS
 * level no matter what muted/playsinline tricks you try. The fallback
 * is swapped in automatically: play() promise rejection triggers it,
 * and a watchdog timer covers browsers that silently refuse to start
 * the stream without rejecting.
 */
function KidAvatar({ size = 420 }) {
  const videoRef = useRef_KA(null);
  const [fallback, setFallback] = useState_KA(false);

  useEffect_KA(() => {
    if (fallback) return;
    const v = videoRef.current;
    if (!v) return;

    // iOS/Android only allow autoplay when these attributes are on the
    // actual DOM node. React's `muted` prop sometimes doesn't make it.
    v.muted = true;
    v.defaultMuted = true;
    v.playsInline = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");
    v.setAttribute("webkit-playsinline", "");

    let started = false;
    const onPlaying = () => { started = true; };
    v.addEventListener("playing", onPlaying);

    const useFallback = () => {
      if (!started) setFallback(true);
    };
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(useFallback);
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    v.addEventListener("loadeddata", tryPlay, { once: true });

    // Some browsers (notably iOS in Low Power Mode) don't reject play()
    // but silently refuse to start playback. If the "playing" event never
    // fires within a generous window, swap to the WebP fallback. Safari
    // can take a moment to actually start an HEVC stream, so the window
    // has to be long enough that a normal startup never trips it.
    const watchdog = setTimeout(useFallback, 4000);

    return () => {
      clearTimeout(watchdog);
      v.removeEventListener("playing", onPlaying);
      v.removeEventListener("canplay", tryPlay);
      v.removeEventListener("loadeddata", tryPlay);
    };
  }, [fallback]);

  const wrap = {
    position: "relative",
    width: "100%",
    maxWidth: size,
    aspectRatio: "16 / 9",
    display: "block",
  };
  // drop-shadow only on the still <img> fallback. Applying CSS filters to
  // <video> with alpha forces per-frame recomposition through the shadow,
  // which Safari can't keep up with on transparent HEVC and falls back to
  // software compositing → visible stutter even though decode is fine.
  const media = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    pointerEvents: "none",
    background: "transparent",
    // Promote to its own GPU layer so Safari doesn't recomposite the
    // transparent video against the hero gradients + body grain overlay
    // on every frame.
    transform: "translateZ(0)",
    willChange: "transform",
  };
  const mediaWithShadow = {
    ...media,
    filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.55))",
  };

  if (fallback) {
    return (
      <div style={wrap}>
        <img
          src="assets/kid-loop.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          style={mediaWithShadow}
        />
      </div>
    );
  }

  return (
    <div style={wrap}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        style={media}
      >
        <source src="assets/kid-loop.mov" type='video/mp4; codecs="hvc1"' />
        <source src="assets/kid-loop.webm" type="video/webm" />
      </video>
    </div>
  );
}

window.KidAvatar = KidAvatar;
