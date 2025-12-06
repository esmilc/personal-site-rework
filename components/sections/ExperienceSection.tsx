// sections/ExperienceSection.tsx
export default function ExperienceSection() {
  return (
    <div className="space-y-4 text-sm text-zinc-100">
      <p className="font-mono text-emerald-300">~/experience</p>

      {/* Google */}
      <div>
        <p className="font-semibold">Google · Associate Software Developer Intern — Search Quality</p>
        <p className="text-xs text-zinc-400">May 2025 - August 2025 · Mountain View, CA</p>
        <ul className="mt-1 list-disc pl-5">
          <li>Engineered LLM prompts for a feature that classifies 70k+ daily user feedback reports, improving
            early detection of critical P0 issues in Search.</li>

          <li>Iterated on prompt techniques (CoT, single-shot, etc.) to boost recall by <b>18.5%</b> with minimal precision
            impact, enhancing trust/harm signal quality.</li>

          <li>Built a TypeScript URL validator to block invalid image links, improving data integrity and reviewer efficiency;
            shipped behind a feature flag with full unit tests.</li>
        
          <li>Moderated a leadership Q&A with Liz Reid (Head of Search), selected from 3,000+ interns, reaching the full North
            America intern cohort.</li>

        </ul>
      </div>

      {/* Add Bloomberg, CodePath, etc later */}
    </div>
  );
}