export default function HeroVisual() {
  return (
    <div className="relative h-full flex items-center justify-center">
      <div className="relative w-full max-w-sm aspect-square rounded-full bg-neutral-100 p-4 flex items-center justify-center">
        <div className="w-full h-full rounded-full bg-white shadow-inner" />
        {/* Animated storage doors */}
        <div
          className="absolute w-1/2 h-1/2 rounded-lg bg-white shadow-lg will-animate"
          style={{ transform: "rotate(-15deg) translate(-40px, -60px)", animationDelay: "0.2s" }}
        >
          <div className="p-4">
            <div className="w-8 h-1 bg-neutral-200 rounded-full" />
            <div className="mt-2 w-12 h-1 bg-neutral-200 rounded-full" />
          </div>
        </div>
        <div
          className="absolute w-2/3 h-1/3 rounded-lg bg-white shadow-lg will-animate"
          style={{ transform: "rotate(10deg) translate(30px, 50px)", animationDelay: "0.4s" }}
        >
          <div className="p-4">
            <div className="w-10 h-1 bg-neutral-200 rounded-full" />
          </div>
        </div>
        <div
          className="absolute w-1/4 h-1/3 rounded-lg bg-white shadow-lg will-animate"
          style={{ transform: "rotate(20deg) translate(90px, -70px)", animationDelay: "0.6s" }}
        >
          <div className="p-4">
            <div className="w-6 h-1 bg-neutral-200 rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
