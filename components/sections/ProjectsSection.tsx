// sections/ProjectsSection.tsx
"use client";

import { useState } from "react";

const projects = [
  {
    id: "mindmates",
    slug: "mindmates/",
    stack: "Next.js, MongoDB, Node",
    image: "/projects/mindmates.png",
    description: `MindMates is a mindfulness and gratitude app my team and I built to help users strengthen their mental well-being through small, daily habits. The app turns mindfulness into a guided, gamified experience — users complete quick reflection prompts, track their mood, and watch our animated character avatars react and evolve based on their progress. We designed MindMates to make emotional check-ins feel approachable, consistent, and fun, with a focus on user experience and positive psychology.`,
  },
  {
    id: "noneed2wait",
    slug: "noneed2wait/",
    stack: "C++, Data Structures",
    image: "/projects/noneed2wait.png",
    description: `Disney Magic Kingdom wait-time optimizer that uses ride wait-time data and data structures to suggest an efficient ride order and minimize time spent in line.`,
  },
  {
    id: "evacumate",
    slug: "evacuMate/",
    stack: "Hackathon, AI Simulation",
    image: "/projects/evacumate.png",
    description: `Hackathon project that simulates evacuation scenarios with AI-driven agents to explore safer and faster exit strategies during emergencies.`,
  },
];

export default function ProjectsSection() {
  const [imageProjectId, setImageProjectId] = useState<string | null>(null);

  const imageProject = imageProjectId
    ? projects.find((p) => p.id === imageProjectId)
    : null;

  return (
    <div className="space-y-4 font-mono text-sm text-zinc-100">
      <p className="text-emerald-300">ls ~/projects</p>

      <div className="space-y-2">
        {projects.map((project) => {
          const isOpen = openId === project.id;

          return (
            <div
              key={project.id}
              className="rounded-md border border-zinc-800 bg-zinc-900/40"
            >
              <button
                onClick={() => setOpenId(isOpen ? null : project.id)}
                className="flex w-full items-center justify-between px-3 py-2 text-left"
              >
                <div>
                  <p className="text-[11px] font-semibold">{project.slug}</p>
                  <p className="text-[10px] text-zinc-400">{project.stack}</p>
                </div>

                <span className="text-[10px] text-zinc-500">
                  {isOpen ? "-" : "+"}
                </span>
              </button>

              {isOpen && (
                <div className="border-t border-zinc-800 px-3 pb-3 pt-2 space-y-2">
                  <p className="text-[11px] leading-relaxed text-zinc-400">
                    {project.description}
                  </p>

                  <button
                    type="button"
                    onClick={() => setImageProjectId(project.id)}
                    className="inline-flex items-center gap-1 rounded border border-zinc-700 px-2 py-[3px] text-[10px] text-zinc-200 hover:border-emerald-400 hover:text-emerald-300 transition"
                  >
                    see image
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Image modal */}
      {imageProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <div className="max-w-[90vw] max-h-[80vh] rounded-md border border-zinc-700 bg-zinc-900 p-3 shadow-lg">
            <div className="mb-2 flex items-center justify-between gap-4">
              <p className="text-[11px] text-zinc-300">
                {imageProject.slug} preview
              </p>
              <button
                type="button"
                onClick={() => setImageProjectId(null)}
                className="rounded px-2 py-[1px] text-[10px] text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition"
              >
                close
              </button>
            </div>

            <div className="overflow-auto">
              <img
                src={imageProject.image}
                alt={imageProject.slug}
                className="max-h-[70vh] w-auto rounded"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}