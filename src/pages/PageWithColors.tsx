import { FC } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { ColorList } from '../components/ColorList/ColorList';
import { Pagination } from '../components/ColorList/Pagination';
import useColorsRender from '../hooks/colors-render.hook';
import { Color } from '../types/color';

interface Props {
  fn: (
    page: number,
    limit: number,
    query?: string,
    name?: string
  ) => Promise<Color[]>;
}

export const PageWithColors: FC<Props> = ({ fn }) => {
  const {
    handlePageChange,
    isLoading,
    data,
    itemsPerPage,
    currentPage,
    name,
    isError,
  } = useColorsRender(fn);
  if (isLoading) {
    return (
      <div className="w-full h-[calc(100vh_-_96px)] flex justify-center items-center">
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="blocks-loading"
          wrapperStyle={{}}
          wrapperClass="blocks-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-[calc(100vh_-_96px)] flex justify-center items-center">
        <p>Something wrong happened</p>
      </div>
    );
  }
  return (
    <div className="overflow-auto h-[calc(100vh_-_96px)] w-full">
      {data?.length === 0 && (
        <div className="w-full h-[calc(100vh_-_96px)] flex justify-center items-center">
          <p>I see nothing, try again!</p>
        </div>
      )}
      {data && <ColorList colors={data} />}
      {data && (
        <Pagination
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          handlePageChange={handlePageChange}
          groupName={name}
        />
      )}
    </div>
  );
};
