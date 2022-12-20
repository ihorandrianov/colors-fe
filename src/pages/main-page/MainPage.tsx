import { useQuery } from '@tanstack/react-query';
import { FC, useState } from 'react';
import { getColors } from '../../client/client';
import { ColorList } from '../../components/ColorList/ColorList';
import { Pagination } from '../../components/ColorList/Pagination';

export const MainPage: FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { data, isLoading } = useQuery(
    ['colors', currentPage, itemsPerPage],
    () => getColors(currentPage - 1, itemsPerPage)
  );
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div className="overflow-auto w-full">
      {data && <ColorList colors={data} />}
      <Pagination
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        handlePageChange={handlePageChange}
      />
    </div>
  );
};
