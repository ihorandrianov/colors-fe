import { FC } from 'react';
import { Color } from '../../types/color';
import { ColorCard } from './ColorsCard';

interface Props {
  colors: Color[];
}

export const ColorList: FC<Props> = ({ colors }) => {
  return (
    <div className="w-full overflow-auto">
      <div className="grid grid-cols-4 gap-8 justify-items-center m-12">
        {colors &&
          colors.map((color) => <ColorCard key={color.id} color={color} />)}
      </div>
    </div>
  );
};
