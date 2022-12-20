import { FC } from 'react';
import { Color } from '../../types/color';

interface Props {
  color: Color;
}

export const ColorCard: FC<Props> = ({ color }) => {
  return (
    <div className="h-[260px] w-[220px] border border-gray-300 rounded-lg overflow-hidden shadow-md">
      <div
        className="h-[200px] border border-white rounded-t-[7px]"
        style={{
          backgroundColor: color.hex,
        }}
      ></div>
      <p className="text-lg mx-5 my-3">{color.hex}</p>
    </div>
  );
};
