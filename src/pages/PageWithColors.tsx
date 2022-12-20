import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getColors } from '../client/client';
import { ColorList } from '../components/ColorList/ColorList';
import { Pagination } from '../components/ColorList/Pagination';

export const PageWithColors = () => {
  const { name } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { data, isLoading } = useQuery(
    ['colors', currentPage, itemsPerPage, name],
    () => getColors(currentPage - 1, itemsPerPage, name)
  );
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  if (isLoading) {
    <p>Loading</p>;
  }
  return (
    <div className="overflow-auto w-full">
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
