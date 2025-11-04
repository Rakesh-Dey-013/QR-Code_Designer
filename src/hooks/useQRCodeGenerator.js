import { useState, useEffect } from 'react';
import QRCodeStyling from 'qr-code-styling';

const useQRCodeGenerator = () => {
  const [qrCode, setQrCode] = useState(null);
  const [config, setConfig] = useState({
    data: 'https://example.com',
    width: 300,
    height: 300,
    margin: 10,
    qrOptions: {
      typeNumber: 0,
      mode: 'Byte',
      errorCorrectionLevel: 'Q'
    },
    imageOptions: {
      hideBackgroundDots: true,
      imageSize: 0.4,
      margin: 5,
      crossOrigin: 'anonymous',
    },
    dotsOptions: {
      type: 'rounded',
      color: '#000000',
    },
    backgroundOptions: {
      color: '#ffffff',
    },
    image: '',
    cornersSquareOptions: {
      type: 'extra-rounded',
      color: '#000000',
    },
    cornersDotOptions: {
      type: 'dot',
      color: '#000000',
    }
  });

  useEffect(() => {
    const qr = new QRCodeStyling({
      width: config.width,
      height: config.height,
      data: config.data,
      margin: config.margin,
      qrOptions: config.qrOptions,
      imageOptions: config.imageOptions,
      dotsOptions: config.dotsOptions,
      backgroundOptions: config.backgroundOptions,
      image: config.image,
      cornersSquareOptions: config.cornersSquareOptions,
      cornersDotOptions: config.cornersDotOptions,
    });
    setQrCode(qr);
  }, [config]);

  const updateConfig = (newConfig) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  };

  const download = (format = 'png') => {
    if (qrCode) {
      qrCode.download({
        extension: format,
        name: 'artistic-qr-code'
      });
    }
  };

  return { qrCode, config, updateConfig, download };
};

export default useQRCodeGenerator;