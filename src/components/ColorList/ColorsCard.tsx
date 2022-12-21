import { FC } from 'react';
import { Color } from '../../types/color';

interface Props {
  color?: Color;
  hsl?: string;
}

export const ColorCard: FC<Props> = ({ color, hsl }) => {
  return (
    <div className="h-full w-full flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-md hover:border-gray-800 duration-300">
      <div
        className="h-3/4 border border-white rounded-t-[7px]"
        style={{
          backgroundColor: hsl || color?.hex,
        }}
      ></div>
      <div className="flex items-center w-full h-1/4">
        <p className="text-lg mx-5">{color?.hex || hsl}</p>
      </div>
    </div>
  );
};
