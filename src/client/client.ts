import { Color } from '../types/color';

const basicUrl = 'http://localhost:3000';

export const getColors = async (page: number, limit: number) => {
  const response = await fetch(
    basicUrl + `/colors?page=${page}&limit=${limit}`
  );
  const colors = await response.json();

  return colors as Color[];
};
