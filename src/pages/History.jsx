import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRHistoryItem from '../components/qr/QRHistoryItem';

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const storedHistory = JSON.parse(localStorage.getItem('qrHistory') || '[]');
    setHistory(storedHistory);
  }, []);

  const deleteItem = (index) => {
    const newHistory = [...history];
    newHistory.splice(index, 1);
    setHistory(newHistory);
    localStorage.setItem('qrHistory', JSON.stringify(newHistory));
  };

  const clearAll = () => {
    setHistory([]);
    localStorage.removeItem('qrHistory');
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Spotlight Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Main spotlight */}
        {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div> */}
        {/* Secondary spotlights */}
        <div className="absolute top-3/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex justify-between items-center mb-8"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Your QR Code History
          </motion.h1>
          {history.length > 0 && (
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              onClick={clearAll}
              className="group relative px-6 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25"
            >
              <span className="relative z-10">Clear All</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-500 rounded-xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </motion.button>
          )}
        </motion.div>

        {history.length === 0 ? (
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center py-20"
          >
            <div className="relative">
              {/* Empty state glow effect */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl"></div>
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="text-6xl mb-6"
                >
                  📱
                </motion.div>
                <motion.p 
                  className="text-gray-300 text-2xl mb-3 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  No QR codes saved yet.
                </motion.p>
                <motion.p 
                  className="text-gray-500 text-lg"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 1 }}
                >
                  Design some QR codes to see them here!
                </motion.p>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {history.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8, y: -20 }}
                  transition={{ 
                    duration: 0.4,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  whileHover={{ y: -5 }}
                  className="transform transition-transform duration-200"
                >
                  <QRHistoryItem
                    item={item}
                    index={index}
                    onDelete={deleteItem}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}

        {/* Decorative elements */}
        {history.length > 0 && (
          <div className="flex justify-center mt-16">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="flex space-x-2"
            >
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="w-2 h-2 bg-violet-400 rounded-full"
                  animate={{ 
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5] 
                  }}
                  transition={{ 
                    duration: 2,
                    delay: i * 0.2,
                    repeat: Infinity 
                  }}
                />
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
}