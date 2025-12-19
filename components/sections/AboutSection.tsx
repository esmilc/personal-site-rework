// sections/AboutSection.tsx
import InteractiveTerminal from "@/components/shell/InteractiveTerminal";

export default function AboutSection() {
  return (
    <div className="space-y-3 font-mono text-sm text-zinc-200">
      <p className="text-emerald-300">~/about/esmil.log</p>
      <p>&gt; booting esmil.exe...</p>
      <p>&gt; loading modules: applied-ml, full-stack, teaching, mentoring</p>
      <p>&gt; status: online, exploring new systems to break + build</p>

      <div className="mt-3">
        <InteractiveTerminal />
      </div>
    </div>
  );
}