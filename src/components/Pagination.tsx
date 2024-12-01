import Link from "next/link";

export function Pagination(
    { page, pageSize, pageCount, total }:
        { page: number; pageSize: number; pageCount: number; total: number; }
) {

    const isFirstPage = page === 1;
    const isLastPage = page === pageCount;

    const prevPage = page - 1;
    const nextPage = page + 1;

    const prevPageUrl = isFirstPage ? "#" : `?page=${prevPage}`;
    const nextPageUrl = isLastPage ? "#" : `?page=${nextPage}`;


    return (
        <div className="flex flex-col items-center mt-8">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Showing{" "}
                <span className="font-semibold text-gray-700 dark:text-gray-400">
                    {(page - 1) * pageSize + 1}
                </span>{" "}
                to{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {Math.min(pageSize + page - 1, total)}
                </span>{" "}
                of{" "}
                <span className="font-semibold text-gray-900 dark:text-white">
                    {total}
                </span>{" "}
                Products
            </span>

            <div className="inline-flex mt-2 xs:mt-0">
                <Link
                    href={prevPageUrl}
                    className={`${isFirstPage ? "pointer-events-none opacity-50" : ""
                        } flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                    <svg
                        className="w-3.5 h-3.5 mr-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4"
                        />
                    </svg>
                    Prev
                </Link>

                <Link
                    href={nextPageUrl}
                    className={`${isLastPage ? "pointer-events-none opacity-50" : ""
                        } flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}
                >
                    Next
                    <svg
                        className="w-3.5 h-3.5 ml-2" // Cambié `mr-2` a `ml-2` para alinearla a la derecha del texto
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0-4-4m4 4-4 4"
                        />
                    </svg>

                </Link>
            </div>

        </div>
    );

}