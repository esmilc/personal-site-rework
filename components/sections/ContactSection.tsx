// sections/ContactSection.tsx
export default function ContactSection() {
  return (
    <div className="space-y-4 text-sm text-zinc-100">
      <p className="font-mono text-emerald-300">~/contact</p>

      <p>
       { /*Want to chat about internships, projects, or building safer CS communities?
        Drop me a line:*/}
      </p>

      <div className="space-y-1">
        <p>
          <span className="font-mono text-zinc-400">email:</span>{" "}
          <a
            href="mailto:esmilcanet0711@gmail.com"
            className="text-emerald-300 underline-offset-2 hover:underline"
          >
            esmilcanet0711@gmail.com
          </a>
        </p>
        <p>
          <span className="font-mono text-zinc-400">linkedin:</span>{" "}
          <a
            href="https://www.linkedin.com/in/esmilc"
            target="_blank"
            className="text-emerald-300 underline-offset-2 hover:underline"
          >
            /in/esmilc
          </a>
        </p>
      </div>
    </div>
  );
}