import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                {/* Logo */}
                <Link href="/" className="text-3xl font-bold text-gray-800 dark:text-white">
                    LilUriel
                </Link>

                {/* Navigation Links */}
                <div className="flex space-x-6">
                    <Link
                        href="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                        About
                    </Link>
                    <Link
                        href="#categories"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                        Categories
                    </Link>
                    <Link
                        href="/"
                        className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 font-medium"
                    >
                        Contact
                    </Link>
                </div>

               
            </div>
        </nav>
    );
}
