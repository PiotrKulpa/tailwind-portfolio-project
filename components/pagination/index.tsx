import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Pagination = ({ totalEntries, entriesToShow }) => {
  const {
    query: { page = '0' },
  } = useRouter();

  console.log(page);

  return (
    <div
      className={`${
        totalEntries > entriesToShow ? 'flex' : 'hidden'
      } flex flex-row justify-between mt-12`}
    >
      <Link
        className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary"
        href={`blog?page=${Number(page) > 1 ? Number(page) - 1 : 1}`}
      >
        <p>Previous</p>
      </Link>
      <Link
        className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary"
        href={`blog?page=${Number(page) + 1}`}
      >
        <p>Next</p>
      </Link>
    </div>
  );
};

export default Pagination;
