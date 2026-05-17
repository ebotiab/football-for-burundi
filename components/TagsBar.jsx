/* global React, TOURNAMENT */
const { useEffect: useEffect_TB, useState: useState_TB } = React;

function pad2(n) { return String(n).padStart(2, "0"); }

function TagsBar() {
  const TARGET = new Date("2026-06-27T09:00:00+02:00").getTime();
  const [now, setNow] = useState_TB(Date.now());
  useEffect_TB(() => {
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);
  const diff = Math.max(0, TARGET - now);
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff / 3600000) % 24);
  const m = Math.floor((diff / 60000) % 60);
  const s = Math.floor((diff / 1000) % 60);

  return (
    <div id="tags" style={{
      borderTop: "1px solid var(--line)",
      borderBottom: "1px solid var(--line)",
      background: "var(--ny-navy-900)",
      padding: "20px 0",
    }}>
      <div className="wrap" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 16, flexWrap: "wrap",
      }}>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <span className="tag">SÁBADO 27.06</span>
          <span className="tag muted">POR LA MAÑANA</span>
          <span className="tag muted">MADRID</span>
          <span className="tag muted">{TOURNAMENT.formato.toUpperCase()}</span>
          <span className="tag">+16</span>
        </div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: 11,
          letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--fg-muted)",
          display: "flex", alignItems: "center", gap: 12,
        }}>
          <span style={{ color: "var(--ny-gold)" }}>Faltan</span>
          <strong style={{
            color: "var(--ny-bone)", fontFamily: "var(--font-display)",
            fontWeight: 800, fontSize: 20, letterSpacing: "0.04em",
          }}>
            {d}d : {pad2(h)}h : {pad2(m)}m : {pad2(s)}s
          </strong>
        </div>
      </div>
    </div>
  );
}

window.TagsBar = TagsBar;
