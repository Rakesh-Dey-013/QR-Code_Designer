import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import useQRCodeGenerator from '../hooks/useQRCodeGenerator';
import QRCodeDisplay from '../components/qr/QRCodeDisplay';
import QRControls from '../components/qr/QRControls';

export default function Design() {
  const { qrCode, config, updateConfig, download } = useQRCodeGenerator();
  const qrRef = useRef(null);
  const [showPreview, setShowPreview] = useState(false);

  useEffect(() => {
    if (qrCode && qrRef.current) {
      // Clear the container first
      qrRef.current.innerHTML = '';
      qrCode.append(qrRef.current);
    }
  }, [qrCode, qrRef]);

  const handleDownload = (format) => {
    download(format);
    const history = JSON.parse(localStorage.getItem('qrHistory') || '[]');
    history.unshift({
      config,
      timestamp: new Date().toISOString(),
    });
    localStorage.setItem('qrHistory', JSON.stringify(history));
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
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 container mx-auto px-4 py-8"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent mb-4">
                QR Code Designer
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Create beautiful, artistic QR codes with custom styles and logos.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <QRControls 
                config={config}
                updateConfig={updateConfig}
                onDownload={handleDownload}
                onPreview={() => setShowPreview(true)}
              />
            </motion.div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center"
          >
            <QRCodeDisplay 
              qrRef={qrRef} 
              config={config}
              showPreview={showPreview}
              onClosePreview={() => setShowPreview(false)}
            />
          </motion.div>
        </div>

        {/* Decorative elements */}
        <div className="flex justify-center mt-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
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
      </motion.div>
    </div>
  );
}