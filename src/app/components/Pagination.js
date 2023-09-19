/*
"pagination": {
"page": 3,
"pageSize": 1,
"pageCount": 3,
"total": 3
}
*/

export function Pagination({ pagination }) {
    const { page, pageCount, total } = pagination
    const isFirstPage = page === 1
    const isLastPage = page === pageCount

    return (
        <div className="flex flex-col items-center mt-8">
            <span className="text-sm text-gray-700 dark:text-gray-400">
                Mostrando <span className="font-semibold text-gray-900 dark:text-white">1 </span>
                de <span className="font-semibold text-gray-900 dark:text-white">10 </span>
                de <span className="font-semibold text-gray-900 dark:text-white">100</span> Videojuegos
            </span>
            <div className="inline-flex mt-2 xs:mt-0">
                <button disabled={isFirstPage} className={`${isFirstPage ? 'pointer-events-none opacity-50' : ''} flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                    <svg className="w-3.5 h-3.5 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4" />
                    </svg>
                    Prev
                </button>
                <button disabled={isLastPage} className={`${isLastPage ? 'pointer-events-none opacity-50' : ''} flex items-center justify-center px-3 h-8 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white`}>
                    Next
                    <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                    </svg>
                </button>
            </div>
        </div>
    )
}