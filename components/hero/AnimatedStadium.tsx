
export default function AnimatedStadium() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="history-mosaic mosaic-one" />
      <div className="history-mosaic mosaic-two" />
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="pitch-perspective">
        <div className="pitch-line center-circle" />
        <div className="pitch-line half-line" />
        <div className="pitch-line box-left" />
        <div className="pitch-line box-right" />
      </div>
      <img className="floating-photo floating-trophy-img" src="/media/world-cup-trophy-real.png" alt="" />
      <img className="floating-photo floating-ball-img" src="/media/world-cup-2026-ball-real.png" alt="" />
      <div className="light-beam" />
    </div>
  );
}
