import { useQuery } from '@tanstack/react-query';
import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { Color } from '../types/color';

type Callback = (
  page: number,
  limit: number,
  name?: string,
  query?: string
) => Promise<Color[]>;

const useColorsRender = (callback: Callback) => {
  const { name, query } = useParams();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const { data, isLoading, isError } = useQuery(
    ['colors', currentPage, itemsPerPage, name || query],
    () => callback(currentPage - 1, itemsPerPage, name || query),
    {
      retry: false,
    }
  );
  const location = useLocation();
  useEffect(() => {
    setCurrentPage(1);
  }, [location.pathname]);
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return {
    handlePageChange,
    data,
    isLoading,
    itemsPerPage,
    currentPage,
    name: name || query,
    isError,
  };
};

export default useColorsRender;
