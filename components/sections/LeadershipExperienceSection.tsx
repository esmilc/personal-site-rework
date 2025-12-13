export default function LeadershipExperienceSection() {
  return (
    <div className="space-y-4 text-sm text-zinc-100 max-h-[45vh]">
      <p className="font-mono text-emerald-300">~/leadership_experience</p>

      {/* CodePath TFM*/}
      <div>
        <p className="font-semibold">CodePath · Tech Fellow Manager</p>
        <p className="text-xs text-zinc-400">May 2025 - Present · Remote</p>
        <ul className="mt-1 list-disc pl-5">
          <li>Took initiative to develop a custom Google App Script automating student triage for 300+ participants, streamlining
            class flow and eliminating manual setup bottlenecks.</li>

          <li>Directed weekly meetings with 25 Tech Fellows to assess performance, give feedback, and develop plans for growth,
            improving overall instructional quality.</li>

          <li>Analyzed course data to identify areas for improvement and recommended strategies to enhance both the Tech Fellows
            and student experiences.</li>
        
          <li>Collaborated closely with the Instructional PM, Operations Team, and Program Director once a week to present
            actionable improvements and enhance the student learning experience.</li>

        </ul>
      </div>

      {/* CodePath TF*/}
      <div>
        <p className="font-semibold">CodePath · Tech Fellow</p>
        <p className="text-xs text-zinc-400">July 2024 - May 2025 · Remote</p>
        <ul className="mt-1 list-disc pl-5">
          <li>Mentored and assisted students by offering technical assistance during sessions and on assignments to make
            sure they succeeded in keeping up with the course's pace.</li>

          <li>Surfaced student concerns and feedback and discuss course progress with Tech Fellow Manager during check-ins.</li>
          
          <li>Facilitated engaging discussions and activities to enhance student understanding of course material.</li>

        </ul>
      </div>

      
    </div>
  );
}