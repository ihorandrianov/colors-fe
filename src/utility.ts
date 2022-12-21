import { Hsl } from './types/color';

export const lightnessAdjuster = (hsl: Hsl) => {
  const { h, s, l } = hsl;
  const hslArray = [];
  for (let i = -2; i < 3; i++) {
    hslArray.push(`hsl(${h}, ${s}%, ${l - i * 10}%)`);
  }
  return hslArray;
};
