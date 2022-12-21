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
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  const colors = await response.json();

  return colors as Color[];
};

export const getTotalItems = async (group: string = '') => {
  const response = await fetch(basicUrl + `/colors/count?group=${group}`);
  return await response.json();
};

export const getColorsByGroup = async (group: string) => {
  const response = await fetch(basicUrl + `/colors/group?color=${group}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return await response.json();
};

export const getColorById = async (id: number) => {
  const response = await fetch(basicUrl + `/colors/${id}`);
  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return (await response.json()) as Color;
};

export const searchColor = async (
  page: number,
  limit: number,
  query: string | undefined
) => {
  const queryStripped = (query as string).replace(/([\#\s])/g, '');
  const response = await fetch(
    basicUrl +
      `/colors/search?page=${page}&limit=${limit}&color=${queryStripped}`
  );

  if (!response.ok) {
    throw new Error('Something went wrong');
  }
  return (await response.json()) as Color[];
};
