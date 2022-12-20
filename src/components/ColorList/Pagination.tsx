import { useQuery } from '@tanstack/react-query';
import { FC } from 'react';
import { getTotalItems } from '../../client/client';

interface Props {
  itemsPerPage: number;
  currentPage: number;
  groupName?: string;
  handlePageChange: (pageNumber: number) => void;
}

export const Pagination: FC<Props> = ({
  itemsPerPage,
  currentPage,
  handlePageChange,
  groupName,
}) => {
  const { data: totalItems, isLoading } = useQuery(['count', groupName], () =>
    getTotalItems(groupName)
  );
  if (isLoading) {
    return <>Loading</>;
  }

  const pagesCount = Math.ceil(totalItems / itemsPerPage);
  const pages = Array.from({ length: pagesCount }, (_, i) => i + 1);
  return (
    <div className="flex justify-center">
      <ul className="flex gap-5 ">
        {pages.map((page) => (
          <li key={page}>
            <button
              onClick={() => {
                handlePageChange(page);
              }}
              className={
                page === currentPage
                  ? 'border-b-2 border-black px-2 pb-1'
                  : 'px-2 pb-1'
              }
            >
              {page}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
