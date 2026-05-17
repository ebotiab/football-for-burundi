/* global React */
const { useRef: useRef_KA, useState: useState_KA, useEffect: useEffect_KA } = React;

/**
 * KidAvatar — looping 16:9 clip of a kid in Burundi kit doing kick-ups.
 *
 * Chrome/Firefox/Edge: transparent-background <video> (VP8 alpha .webm).
 * Best quality, smoothest playback.
 *
 * Safari (desktop and iOS): animated WebP from the start. WebKit on
 * macOS 26 / iOS 26 plays HEVC-with-alpha video but stutters
 * noticeably — alpha decode appears to fall to software compositing
 * even with a GPU-promoted layer and no CSS filters. Animated WebP
 * goes through the image pipeline, no per-frame alpha compositing,
 * so it plays smoothly.
 *
 * The same WebP also acts as a fallback for non-Safari browsers when
 * <video> autoplay fails outright (iOS Low Power Mode rejects play()
 * even with muted/playsinline) — covered by play() rejection and a
 * watchdog on the "playing" event.
 */

// Detect WebKit-based browsers where HEVC-alpha playback stutters:
// real Safari on macOS, plus every browser on iOS/iPadOS (Apple forces
// WebKit there even for "Chrome" / "Firefox").
function isWebKitAppleStack() {
  if (typeof navigator === "undefined") return false;
  const ua = navigator.userAgent;
  const isSafariDesktop =
    /^((?!chrome|android|crios|fxios|edgios|samsungbrowser).)*safari/i.test(ua);
  const isIOS =
    /iPhone|iPad|iPod/.test(ua) ||
    // iPadOS 13+ reports itself as Mac; distinguish by touch support.
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  return isSafariDesktop || isIOS;
}

function KidAvatar({ size = 420 }) {
  const videoRef = useRef_KA(null);
  const [fallback, setFallback] = useState_KA(isWebKitAppleStack);

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
  // No CSS filters on the media — drop-shadow forces Safari to recomposite
  // through the filter on every frame, which it can't keep up with on
  // animated alpha content (both <video> HEVC and animated WebP).
  const mediaBase = {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    display: "block",
    pointerEvents: "none",
    background: "transparent",
  };
  // GPU layer promotion only helps the <video> path: video frames are already
  // textures, so isolating them in their own composited layer avoids
  // re-blending the page each frame. The animated <img> is the opposite —
  // every decoded WebP frame is a CPU bitmap that would need to be uploaded
  // as a new GPU texture per frame. That upload pressure builds up over time
  // in Safari and visibly degrades the loop, so the img path runs without
  // the hint and lets the browser composite normally.
  const videoStyle = {
    ...mediaBase,
    transform: "translateZ(0)",
    willChange: "transform",
  };

  if (fallback) {
    return (
      <div style={wrap}>
        <img
          src="assets/kid-loop.webp"
          alt=""
          aria-hidden="true"
          decoding="async"
          style={mediaBase}
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
        style={videoStyle}
      >
        <source src="assets/kid-loop.mov" type='video/mp4; codecs="hvc1"' />
        <source src="assets/kid-loop.webm" type="video/webm" />
      </video>
    </div>
  );
}

window.KidAvatar = KidAvatar;
