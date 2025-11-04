import { useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import QRCodeStyling from 'qr-code-styling';

export default function QRCodeDisplay({ qrRef, config, showPreview, onClosePreview }) {
  const previewQrRef = useRef(null);
  const [previewQrCode, setPreviewQrCode] = useState(null);

  useEffect(() => {
    if (showPreview && previewQrRef.current) {
      // Clear the container first
      previewQrRef.current.innerHTML = '';
      
      const qrCode = new QRCodeStyling({
        width: 500,
        height: 500,
        data: config.data,
        margin: 10,
        qrOptions: config.qrOptions,
        imageOptions: config.imageOptions,
        dotsOptions: config.dotsOptions,
        backgroundOptions: config.backgroundOptions,
        image: config.image,
        cornersSquareOptions: config.cornersSquareOptions,
        cornersDotOptions: config.cornersDotOptions,
      });
      
      qrCode.append(previewQrRef.current);
      setPreviewQrCode(qrCode);
    }
  }, [showPreview, config, previewQrRef]);

  return (
    <div className="w-full max-w-md">
      <div className="bg-white p-4 rounded-lg shadow-lg">
        <div ref={qrRef} className="w-full h-auto" />
      </div>
      
      <AnimatePresence>
        {showPreview && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={onClosePreview}
          >
            <motion.div 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              className="max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white p-8 rounded-lg relative">
                <button
                  onClick={onClosePreview}
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
                <h3 className="text-xl font-bold mb-4 text-center text-gray-800">
                  QR Code Preview
                </h3>
                <div ref={previewQrRef} className="w-full h-auto" />
                <div className="mt-4 text-center text-gray-600">
                  <p>Scan this code to test it works!</p>
                  <p className="text-sm mt-2">URL: {config.data}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}