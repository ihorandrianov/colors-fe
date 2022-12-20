import { Color } from '../types/color';

const basicUrl = 'http://localhost:3000';

export const getColors = async (
  page: number,
  limit: number,
  group: string = ''
) => {
  const response = await fetch(
    basicUrl + `/colors?page=${page}&limit=${limit}&group=${group}`
  );
  const colors = await response.json();

  return colors as Color[];
};

export const getTotalItems = async (group: string = '') => {
  const response = await fetch(basicUrl + `/colors/count?group=${group}`);
  return await response.json();
};

export const getColorsByGroup = async (group: string) => {
  const response = await fetch(basicUrl + `/colors/group?color=${group}`);
  return await response.json();
};
