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

    const useFallback = () => setFallback(true);
    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") p.catch(useFallback);
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay, { once: true });
    v.addEventListener("loadeddata", tryPlay, { once: true });

    // Some browsers (notably iOS in Low Power Mode) don't reject play()
    // but silently refuse to start playback. If we're still paused after
    // a generous window, swap to the WebP fallback.
    const watchdog = setTimeout(() => {
      if (v.paused) useFallback();
    }, 1200);

    return () => {
      clearTimeout(watchdog);
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
    filter: "drop-shadow(0 18px 24px rgba(0,0,0,0.55))",
  };
  const media = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    pointerEvents: "none",
    background: "transparent",
  };

  if (fallback) {
    return (
      <div style={wrap}>
        <img
          src="assets/kid-loop.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          style={media}
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
