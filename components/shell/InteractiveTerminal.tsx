"use client";

import { useEffect, useRef, useState } from "react";

type Entry = {
  type: "input" | "output" | "system";
  text: string;
};

const PROMPT = "esmil@cs:~$";

const defaultWelcome: Entry[] = [
  { type: "system", text: "Welcome to the interactive terminal [Work in Progress]." },
  { type: "system", text: "Use 'help' to see available commands." },
];

const commands: Record<string, (args: string[]) => Entry[]> = {
  help: () => [
    {
      type: "output",
      text:
        "Available: help, clear, echo <text>, about, experience, projects, skills, contact",
    },
  ],
  clear: () => [{ type: "system", text: "__CLEAR__" }],
  echo: (args) => [{ type: "output", text: args.join(" ") }],
  about: () => [{ type: "output", text: "Esmil: applied ML + full-stack + teaching." }],
  experience: () => [
    { type: "output", text: "Experience: Google, CodePath, Florida Department of Transportation" },
  ],
  projects: () => [{ type: "output", text: "Use the Projects tab to see projects." }],
  skills: () => [
    { type: "output", text: "Skills: Python, C++, Java, Typescript, Javascript, Applied ML" },
  ],
  contact: () => [
    { type: "output", text: "Contact: linkedin.com/in/esmilc • github.com/esmilc" },
  ],
};

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<Entry[]>(defaultWelcome);
  const [input, setInput] = useState("");
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Auto-focus on mount
    inputRef.current?.focus();
  }, []);

  useEffect(() => {
    // Scroll to bottom when history updates
    containerRef.current?.scrollTo({ top: containerRef.current.scrollHeight });
  }, [history]);

  const runCommand = (raw: string) => {
    const [cmd, ...args] = raw.trim().split(/\s+/);
    const handler = commands[cmd];

    const entries: Entry[] = [
      { type: "input" as const, text: `${PROMPT} ${raw}` },
      ...(handler
        ? handler(args)
        : [{ type: "output" as const, text: `Command not found: ${cmd}` }]),
    ];

    // Handle clear specially
    const hasClear = entries.some((e) => e.type === "system" && e.text === "__CLEAR__");
    if (hasClear) {
      setHistory(defaultWelcome);
    } else {
      setHistory((prev) => [...prev, ...entries]);
    }
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (input.trim().length > 0) {
        runCommand(input);
        setInput("");
      }
    }
  };

  return (
    <div className="rounded-lg border border-white/10 bg-zinc-950/60">
      <div
        ref={containerRef}
        className="max-h-[30vh] overflow-y-auto p-3 text-xs text-zinc-200"
      >
        {history.map((entry, idx) => (
          <div key={idx} className={entry.type === "input" ? "text-zinc-400" : "text-zinc-200"}>
            {entry.type === "system" ? `# ${entry.text}` : entry.text}
          </div>
        ))}
      </div>
      <div className="flex items-center gap-2 border-t border-white/10 bg-zinc-900/60 p-2 text-xs">
        <span className="text-zinc-400">{PROMPT}</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={onKeyDown}
          placeholder="Type a command and press Enter"
          className="flex-1 bg-transparent text-zinc-100 placeholder:text-zinc-500 focus:outline-none"
        />
      </div>
    </div>
  );
}
