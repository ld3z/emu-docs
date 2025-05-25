// src/tooltips.ts
export interface TooltipEntry {
  title?: string; // Optional title, can be overridden by component prop
  content: string; // Markdown content
}

export interface Tooltips {
  [key: string]: TooltipEntry;
}

export const tooltips: Tooltips = {
  'action-replay': {
    content: `
Action Replay is a brand of cheat device.
- Allows entering codes.
- Modifies game memory.
    `,
  },
  'gameshark': {
    content: `
GameShark is another popular cheat system.
* Often uses similar code formats to Action Replay.
* Can unlock secret characters or levels.
    `,
  },
};
