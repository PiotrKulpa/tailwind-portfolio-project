import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const Pagination = ({
  totalEntries,
  entriesToShow,
}: {
  totalEntries: number;
  entriesToShow: number;
}) => {
  const {
    query: { page = '1' },
  } = useRouter();

  const maxPagesAllowed = Math.ceil(totalEntries / entriesToShow);

  return (
    <div
      className={`${
        totalEntries > entriesToShow ? 'flex' : 'hidden'
      } flex flex-row justify-between mt-12`}
    >
      <Link
        className={`${
          Number(page) <= 1 && 'pointer-events-none cursor-not-allowed'
        } uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary`}
        href={`blog?page=${Number(page) > 1 ? Number(page) - 1 : 1}`}
      >
        <p>Previous</p>
      </Link>
      <Link
        className={`${
          Number(page) >= maxPagesAllowed && 'cursor-not-allowed pointer-events-none'
        } uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary`}
        href={`blog?page=${Number(page) + 1}`}
      >
        <p>Next</p>
      </Link>
    </div>
  );
};

export default Pagination;
