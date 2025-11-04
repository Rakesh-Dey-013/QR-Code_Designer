import QRCodeStyling from 'qr-code-styling';
import { useEffect, useRef } from 'react';

export default function QRHistoryItem({ item, index, onDelete }) {
  const qrRef = useRef(null);

  useEffect(() => {
    const qrCode = new QRCodeStyling({
      width: 200,
      height: 200,
      data: item.config.data,
      margin: 10,
      qrOptions: item.config.qrOptions,
      imageOptions: item.config.imageOptions,
      dotsOptions: item.config.dotsOptions,
      backgroundOptions: item.config.backgroundOptions,
      image: item.config.image,
      cornersSquareOptions: item.config.cornersSquareOptions,
      cornersDotOptions: item.config.cornersDotOptions,
    });

    if (qrRef.current) {
      qrCode.append(qrRef.current);
    }
  }, [item]);

  const download = (format) => {
    const qrCode = new QRCodeStyling({
      width: 300,
      height: 300,
      data: item.config.data,
      margin: 10,
      qrOptions: item.config.qrOptions,
      imageOptions: item.config.imageOptions,
      dotsOptions: item.config.dotsOptions,
      backgroundOptions: item.config.backgroundOptions,
      image: item.config.image,
      cornersSquareOptions: item.config.cornersSquareOptions,
      cornersDotOptions: item.config.cornersDotOptions,
    });

    qrCode.download({
      extension: format,
      name: `qr-code-${index}`
    });
  };

  return (
    <div className="bg-zinc-800 rounded-lg overflow-hidden border border-zinc-700">
      <div className="p-4 flex justify-center bg-white">
        <div ref={qrRef} className="w-full h-auto max-w-[200px]" />
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-white font-medium truncate max-w-[180px]">
            {item.config.data.length > 30 
              ? `${item.config.data.substring(0, 30)}...` 
              : item.config.data}
          </h3>
          <button
            onClick={() => onDelete(index)}
            className="text-red-500 hover:text-red-400"
          >
            Delete
          </button>
        </div>
        <p className="text-xs text-gray-400 mb-3">
          {new Date(item.timestamp).toLocaleString()}
        </p>
        <div className="flex space-x-2">
          <button
            onClick={() => download('png')}
            className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-xs rounded transition-colors"
          >
            PNG
          </button>
          <button
            onClick={() => download('svg')}
            className="px-3 py-1 bg-zinc-700 hover:bg-zinc-600 text-xs rounded transition-colors"
          >
            SVG
          </button>
        </div>
      </div>
    </div>
  );
}