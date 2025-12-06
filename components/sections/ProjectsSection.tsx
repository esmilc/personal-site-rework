// sections/ProjectsSection.tsx
export default function ProjectsSection() {
  return (
    <div className="space-y-3 font-mono text-sm text-zinc-100">
      <p className="text-emerald-300">ls ~/projects</p>

      <div>
        <p className="font-semibold">mindmates/</p>
        <p className="text-xs text-zinc-400">
          {/*Gamified gratitude + mood tracking with an AI companion.*/}
        </p>
      </div>

      <div>
        <p className="font-semibold">noneed2wait/</p>
        <p className="text-xs text-zinc-400">
          {/*Disney Magic Kingdom wait-time optimizer using data structures.*/}
        </p>
      </div>

      <div>
        <p className="font-semibold">evacuMate/</p>
        <p className="text-xs text-zinc-400">
          {/*Hackathon project simulating evacuation scenarios with AI.*/}
        </p>
      </div>
    </div>
  );
}