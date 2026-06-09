
export default function AnimatedStadium() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <div className="orbit orbit-a" />
      <div className="orbit orbit-b" />
      <div className="pitch-perspective">
        <div className="pitch-line center-circle" />
        <div className="pitch-line half-line" />
        <div className="pitch-line box-left" />
        <div className="pitch-line box-right" />
      </div>
      <div className="floating-ball ball-one">⚽</div>
      <div className="floating-ball ball-two">🏆</div>
      <div className="light-beam" />
    </div>
  );
}
