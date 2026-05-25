export interface Track {
  id: string;
  title: string;
  type: string;
  release: string;
  condition: string;
  length: string;
  matrix: string;
  concept: string;
}

export const catalog: Track[] = [
  { id: "VOL_01", title: "GHOST", type: "EP / SINGLE", release: "2024", condition: "EXPLICIT", length: "03:42", matrix: "S51-GHS", concept: "A multi-perspective storytelling track focusing on atmosphere." },
  { id: "VOL_02", title: "Broken", type: "STUDIO SESSIONS", release: "2024", condition: "RAW TRACKS", length: "14:15", matrix: "S51-BKN", concept: "Uncut vocal performance takes recorded directly in the booth." },
  { id: "VOL_03", title: "Crazimess", type: "LP ALBUM", release: "2021", condition: "EXPLICIT", length: "42:10", matrix: "S51-CRZ", concept: "Featuring 'Pleading Insanity'. A heavy project built around distinct characters." },
  { id: "VOL_04", title: "Endrey Vs Smith", type: "SPLIT BOOTH TAPE", release: "2020", condition: "MONO CUT", length: "18:35", matrix: "S51-EVS", concept: "A classic back-and-forth collaborative tape recorded at Studio 51." }
];