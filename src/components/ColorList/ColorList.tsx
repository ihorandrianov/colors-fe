import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Color } from '../../types/color';
import { ColorCard } from './ColorsCard';

interface Props {
  colors: Color[];
}

export const ColorList: FC<Props> = ({ colors }) => {
  return (
    <div className="w-full overflow-auto">
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 justify-items-center m-12">
        {colors &&
          colors.map((color) => (
            <Link
              to={`/color/${color.id}`}
              className="w-[220px] h-[260px]"
              key={color.id}
            >
              <ColorCard color={color} />
            </Link>
          ))}
      </div>
    </div>
  );
};
