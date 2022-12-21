import { FC, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { animated, useSpring, config } from '@react-spring/web';

const colors = ['yellow', 'green', 'cyan', 'blue', 'pink', 'red'];

export const Sidebar: FC = () => {
  const [isOpened, setIsOpened] = useState(true);
  const navigation = useNavigate();
  const handleClick = () => {
    const randomId = Math.floor(Math.random() * 94) + 1;
    navigation(`/color/${randomId}`);
  };
  const styles = useSpring({
    left: isOpened ? '-300px' : '-10px',
    config: config.stiff,
  });

  return (
    <animated.div
      style={{ ...styles }}
      className="flex flex-row absolute lg:relative -left-300 top-0 bottom-0"
    >
      <div className="w-[300px] bg-gray-300 flex flex-col">
        <div className="mt-12 mb-5 flex justify-center">
          <button
            onClick={handleClick}
            className="px-5 flex-shrink-0 py-3 border border-black text-center bg-white rounded-xl hover:bg-green-300 duration-500"
          >
            Random Color
          </button>
        </div>
        <ul className="flex flex-col gap-5">
          {colors.map((color) => (
            <li className="capitalize text-xl font-light ml-12" key={color}>
              <NavLink
                to={`/group/${color}`}
                className={({ isActive }) => {
                  return isActive
                    ? 'border-b pb-2 border-black duration-300'
                    : 'pb-2 duration-300';
                }}
              >
                {color}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-10 h-20 self-center flex justify-center items-center">
        <button
          onClick={() => setIsOpened(!isOpened)}
          className="rotate-90 bg-gray-300 p-3 -translate-x-1 rounded-t-xl"
        >
          Menu
        </button>
      </div>
    </animated.div>
  );
};
