// Build-time helpers for the generated blog thumbnail (src/components/PostThumbnail.astro).
// No photography, no AI-image generation — just title text set in the site's
// own type, over a brand-coloured card. Deterministic per post so the same
// article always gets the same look, and every new post gets one for free.

export interface TitleLine {
  text: string;
}

/** Greedy word-wrap for SVG text (no text-measuring API at build time, so this
 * works off an approximate character budget per line). Truncates with an
 * ellipsis if the title is longer than the frame can hold. */
export function wrapTitle(title: string, maxCharsPerLine = 21, maxLines = 4): TitleLine[] {
  const words = title.split(/\s+/);
  const lines: string[] = [];
  let current = '';

  for (const word of words) {
    const candidate = current ? `${current} ${word}` : word;
    if (candidate.length > maxCharsPerLine && current) {
      lines.push(current);
      current = word;
    } else {
      current = candidate;
    }
    if (lines.length === maxLines) break;
  }
  if (current && lines.length < maxLines) lines.push(current);

  if (lines.length === maxLines) {
    const last = lines[maxLines - 1];
    const consumedWords = lines.join(' ').split(/\s+/).length;
    if (consumedWords < words.length && !last.endsWith('…')) {
      lines[maxLines - 1] = last.replace(/[.,;:]+$/, '') + '…';
    }
  }

  return lines.map((text) => ({ text }));
}

/** One of three brand motifs (calendar / monitor / repeat glyph, matching the
 * service icons used elsewhere on the site), rotated deterministically by
 * slug so a given post always renders the same motif. */
export type Motif = 'calendar' | 'monitor' | 'repeat';

const MOTIFS: Motif[] = ['calendar', 'monitor', 'repeat'];

export function motifForSlug(slug: string): Motif {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = (hash * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return MOTIFS[hash % MOTIFS.length];
}
