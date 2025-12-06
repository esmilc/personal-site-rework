// sections/SkillsSection.tsx
export default function SkillsSection() {
  return (
    <div className="space-y-4 text-sm text-zinc-100">
      <p className="font-mono text-emerald-300">~/skills</p>

      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-400">Languages</p>
        <p>Python · C++ · TypeScript · JavaScript · Java (learning)</p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-400">Frontend</p>
        <p>React · Next.js · Tailwind CSS</p>
      </div>

      <div>
        <p className="text-xs uppercase tracking-wide text-zinc-400">Backend & Data</p>
        <p>Node.js · Express · SQL · NoSQL · REST APIs</p>
      </div>
    </div>
  );
}