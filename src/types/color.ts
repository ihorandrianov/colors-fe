export interface Rgb {
  b: number;
  g: number;
  r: number;
}

export interface Hsl {
  h: number;
  l: number;
  s: number;
}

export interface Color {
  id: number;
  hex: string;
  rgb: Rgb;
  hsl: Hsl;
  colorGroup: string;
}
