/* global React */

/**
 * KidAvatar — looping 16:9 clip of a kid in Burundi kit doing kick-ups.
 * Background has been removed (transparent alpha) so it sits on the navy
 * hero without any matte halo.
 *
 * Rendered as an animated WebP rather than a <video>. WebP loops regardless
 * of iOS Low Power Mode, which blocks autoplay on <video> elements at the
 * OS level (no muted/playsinline trick gets past it).
 *
 * `size` is the maximum displayed width; container scales fluidly below that.
 */
function KidAvatar({ size = 420 }) {
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
      <img
        src="assets/kid-loop.webp"
        alt=""
        aria-hidden="true"
        decoding="async"
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
