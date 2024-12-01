import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 text-white p-4 mt-0">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Columna izquierda */}
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-semibold">LilUriel Shop</h2>
            <p className="text-sm mt-2">© 2024 Company Name. All rights reserved.</p>
          </div>
          
          {/* Columna central de enlaces */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <Link href="/" className="hover:text-gray-400">Home</Link>
            <Link href="/" className="hover:text-gray-400">About</Link>
            <Link href="/" className="hover:text-gray-400">Services</Link>
            <Link href="/" className="hover:text-gray-400">Contact</Link>
          </div>
          
          {/* Columna derecha (opcional, por ejemplo con iconos de redes sociales) */}
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 3a10.2 10.2 0 01-2.9.8A4.7 4.7 0 0022.4.3a9.9 9.9 0 01-3.1 1.2A4.9 4.9 0 0016.6 0c-2.9 0-5.1 2.2-5.1 5.1 0 .4.1.8.2 1.2-4.2-.2-7.9-2.2-10.4-5.3-.4.7-.6 1.5-.6 2.3 0 1.6.8 3 2.1 3.8-1.3-.1-2.6-.4-3.7-1 0 0 0 .1 0 .1 0 2.2 1.6 4 3.7 4.4-.4.1-.8.2-1.2.2-.3 0-.6-.1-.9-.2.6 2 2.3 3.4 4.3 3.4a9.8 9.8 0 01-6.1 2.1c-.4 0-.8 0-1.2-.1 2.3 1.5 5 2.4 7.8 2.4 9.3 0 14.4-7.7 14.4-14.4 0-.2 0-.3 0-.5A9.6 9.6 0 0023 3z"></path>
              </svg>
            </a>
            <a href="https://facebook.com" target="_blank" className="hover:text-gray-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12l-6 6-6-6 6-6 6 6zm-6 1l-3 3-3-3 3-3 3 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
