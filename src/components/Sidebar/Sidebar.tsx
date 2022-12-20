import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const colors = ['yellow', 'green', 'cyan', 'blue', 'pink', 'red'];

export const Sidebar: FC = () => {
  return (
    <div className="w-[320px] bg-gray-300 flex flex-col">
      <div className="mt-12 mb-5 flex justify-center">
        <button className="px-12 py-3 border border-black text-center text-xl bg-white rounded-xl hover:bg-green-300 duration-500">
          Random Color
        </button>
      </div>
      <div className="flex flex-col gap-5 ml-5">
        {colors.map((color) => (
          <NavLink
            key={color}
            to={`/group/${color}`}
            className="capitalize text-xl font-light"
          >
            {color}
          </NavLink>
        ))}
      </div>
    </div>
  );
};
