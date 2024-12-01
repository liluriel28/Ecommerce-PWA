// import { SortBy } from '@/components/SortBy';
import { Pagination } from '@/components/Pagination';
import Link from 'next/link';
import { getProducts } from '@/lib/get-products';

export default async function CategoryPage(
    { params }: {
        params: { categoryId: string }
    }) {

    const { categoryId } = params
    const { pagination, products } = await getProducts({ categoryId })

    return (
        <section className="bg-gray-50 py-8 antialiased dark:bg-gray-900 md:py-16 min-h-screen">
            <div className="container mx-auto">
                <Link
                    href="/"
                    className="inline-block px-6 py-3 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-gray-900"
                >
                    ← Return home
                </Link>

                {/* {products.length > 0 && <SortBy />} */}

                <div className="grid grid-cols-3 gap-4 mt-6">
                    {
                        products.length === 0 && <div className="w-full max-w-sm flex">
                            <div className="px-5 pb-5">
                                <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                    No products found
                                </h5>
                            </div>
                        </div>
                    }

                    {products.length > 0 && products.map((product) => (
                        <div key={product.slug} className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                            <a href="#">
                                <img className="p-8 rounded-t-lg" src={product.image} alt="product image" />
                            </a>
                            <div className="px-5 pb-5">
                                <a href="#">
                                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                                        {product.name}
                                    </h5>
                                </a>

                                <div className="flex items-center mt-2.5 mb-5">
                                    <div className="flex items-center space-x-1 rtl:space-x-reverse">
                                        {[...Array(5)].map((_, index) => (
                                            <svg
                                                key={index}
                                                className={`w-5 h-5 ${index < 4 ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-500'}`}
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="currentColor"
                                                viewBox="0 0 20 20"
                                            >
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.566 4.816a1 1 0 00.95.69h5.016c.969 0 1.371 1.24.588 1.81l-4.064 2.957a1 1 0 00-.364 1.118l1.566 4.816c.3.921-.755 1.688-1.539 1.118l-4.064-2.957a1 1 0 00-1.175 0l-4.064 2.957c-.784.57-1.838-.197-1.539-1.118l1.566-4.816a1 1 0 00-.364-1.118L2.516 9.243c-.783-.57-.381-1.81.588-1.81h5.016a1 1 0 00.95-.69l1.566-4.816z" />
                                            </svg>
                                        ))}
                                    </div>

                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-2xl font-bold text-gray-900 dark:text-white">
                                        ${product.price}
                                    </span>
                                    <a
                                        href="#"
                                        className="text-white bg-blue-600 hover:bg-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                                    >
                                        Add to cart
                                    </a>
                                </div>
                            </div>

                        </div>
                    ))}
                </div>
                {pagination && (
                    <Pagination
                        page={pagination.page}
                        pageSize={pagination.pageSize}
                        pageCount={pagination.pageCount}
                        total={pagination.total}
                    />
                )}
            </div>
        </section>
    );
}
