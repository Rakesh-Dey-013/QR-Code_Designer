export default function Footer() {
  return (
    <footer className="bg-zinc-800/50 border-t border-zinc-700 py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Artistic QR Code Designer
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Rakesh-Dey-013/QR-Code_Designer" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span className="text-gray-600">|</span>
            <span className="text-gray-400">
              Built with React, Tailwind CSS, and Framer Motion
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}