/* global React */
const { useState: useState_HDR, useEffect: useEffect_HDR } = React;

function Header() {
  const navItems = [
    ["La causa", "#causa"],
    ["Cómo va", "#como"],
    ["Ambiente", "#ambiente"],
    ["Premios", "#premio"],
    ["FAQ", "#faq"],
  ];

  const [open, setOpen] = useState_HDR(false);

  useEffect_HDR(() => {
    if (open) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [open]);

  const wrap = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 50,
    background:
      "linear-gradient(to bottom, rgba(11,21,37,0.92), rgba(11,21,37,0.6) 70%, transparent)",
    padding: "20px 0 28px",
  };

  const row = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 24,
  };

  // Wordmark recreated in type (matches the brand book) so it sits cleanly on navy.
  const wordmark = {
    display: "inline-flex",
    alignItems: "center",
    gap: 4,
    fontFamily: "var(--font-script)",
    fontWeight: 400,
    fontSize: 32,
    lineHeight: 1,
    color: "var(--ny-bone)",
    letterSpacing: "0.02em",
    whiteSpace: "nowrap",
  };

  const nav = {
    display: "flex",
    gap: 26,
    alignItems: "center",
    flexWrap: "nowrap",
    fontFamily: "var(--font-mono)",
    fontSize: 11,
    letterSpacing: "0.22em",
    textTransform: "uppercase",
    color: "rgba(244,239,227,0.78)",
  };

  const burgerBtn = {
    display: "none",
    width: 44,
    height: 44,
    alignItems: "center",
    justifyContent: "center",
    background: "transparent",
    border: "1px solid rgba(244,239,227,0.3)",
    color: "var(--ny-bone)",
    cursor: "pointer",
  };

  const panel = {
    position: "fixed",
    inset: 0,
    zIndex: 60,
    background: "var(--ny-navy-900)",
    display: open ? "flex" : "none",
    flexDirection: "column",
    padding: "24px 22px 40px",
  };

  return (
    <header style={wrap}>
      <div className="wrap" style={row}>
        <a
          href="https://wenearyou.org/"
          target="_blank"
          rel="noopener noreferrer"
          style={wordmark}
          aria-label="NEAR YOU"
        >
          <span>NEAR&nbsp;Y</span>
          <img
            src="assets/dove-seal-transparent.png"
            alt=""
            aria-hidden="true"
            style={{
              width: 34,
              height: 34,
              objectFit: "contain",
              marginLeft: 2,
              marginRight: 2,
              flex: "0 0 auto",
              transform: "translateY(-2px)",
            }}
          />
          <span>U</span>
        </a>

        <nav style={nav} className="hdr-nav">
          {navItems.map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="hdr-link"
              style={{ whiteSpace: "nowrap" }}
            >
              {label}
            </a>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <a href="#inscripcion" className="btn-compact hdr-cta">
            Inscribir equipo
            <span aria-hidden="true">→</span>
          </a>
          <button
            type="button"
            className="hdr-burger"
            style={burgerBtn}
            aria-label="Abrir menú"
            aria-expanded={open}
            aria-controls="hdr-mobile-panel"
            onClick={() => setOpen(true)}
          >
            <span
              aria-hidden="true"
              style={{
                display: "inline-block",
                width: 18,
                height: 12,
                position: "relative",
              }}
            >
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 0,
                  height: 2,
                  background: "currentColor",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 5,
                  height: 2,
                  background: "currentColor",
                }}
              />
              <span
                style={{
                  position: "absolute",
                  left: 0,
                  right: 0,
                  top: 10,
                  height: 2,
                  background: "currentColor",
                }}
              />
            </span>
          </button>
        </div>
      </div>

      <div id="hdr-mobile-panel" role="dialog" aria-modal="true" style={panel}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: 48,
          }}
        >
          <span style={{ ...wordmark, fontSize: 28 }}>
            <span>NEAR&nbsp;Y</span>
            <img
              src="assets/dove-seal-transparent.png"
              alt=""
              aria-hidden="true"
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginLeft: 2,
                marginRight: 2,
                flex: "0 0 auto",
                transform: "translateY(-2px)",
              }}
            />
            <span>U</span>
          </span>
          <button
            type="button"
            aria-label="Cerrar menú"
            onClick={() => setOpen(false)}
            style={{
              width: 44,
              height: 44,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "1px solid rgba(244,239,227,0.3)",
              color: "var(--ny-bone)",
              fontSize: 22,
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <nav
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 22,
            fontFamily: "var(--font-display)",
            fontWeight: 800,
            fontSize: "clamp(28px, 7vw, 40px)",
            letterSpacing: "0.01em",
            textTransform: "uppercase",
            color: "var(--ny-bone)",
          }}
        >
          {navItems.map(([label, href]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a
          href="#inscripcion"
          className="btn-primary"
          onClick={() => setOpen(false)}
          style={{ marginTop: "auto", justifyContent: "center" }}
        >
          Inscribir equipo
          <span aria-hidden="true">→</span>
        </a>
      </div>

      <style>{`
        .hdr-link {
          position: relative;
          padding: 6px 0;
          transition: color var(--t-fast) var(--ease-out);
        }
        .hdr-link:hover { color: var(--ny-bone); }
        .hdr-link::after {
          content: ""; position: absolute; left: 0; right: 100%;
          bottom: 0; height: 1px; background: var(--ny-gold);
          transition: right var(--t-fast) var(--ease-out);
        }
        .hdr-link:hover::after { right: 0; }
        @media (max-width: 960px) {
          .hdr-nav { display: none !important; }
          .hdr-burger { display: inline-flex !important; }
        }
        @media (max-width: 600px) {
          .hdr-cta { display: none; }
        }
      `}</style>
    </header>
  );
}

window.Header = Header;
