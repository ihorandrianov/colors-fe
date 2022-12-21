import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { getColorById } from '../client/client';
import { ColorCard } from '../components/ColorList/ColorsCard';
import { ColorRing } from 'react-loader-spinner';
import { lightnessAdjuster } from '../utility';

export const OneColorPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery(['singleColor', id], () =>
    getColorById(Number(id))
  );
  const navigate = useNavigate();
  const handleClearClick = () => {
    navigate(-1);
  };
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
        <p>Something wrong happened...</p>
      </div>
    );
  }

  const colorArray = lightnessAdjuster(data!.hsl);

  return (
    <div className="h-[calc(100vh_-_96px)] overflow-auto w-full">
      <div className="flex flex-col gap-5 mx-5 items-center">
        <div className="md:w-full min-w-[365px] m-5 h-[600px] ">
          {data && <ColorCard color={data} />}
        </div>
        <div className="w-full flex xl:justify-center overflow-x-auto">
          <div className="flex gap-12 h-[125px]">
            {data &&
              colorArray.map((hsl) => (
                <div className="w-[125px] h-[125px]" key={hsl}>
                  <ColorCard hsl={hsl} color={data} />
                </div>
              ))}
          </div>
        </div>
        <button
          onClick={handleClearClick}
          className="border rounded-lg px-24 py-3 mb-5 hover:border-black duration-500"
        >
          Clear
        </button>
      </div>
    </div>
  );
};
