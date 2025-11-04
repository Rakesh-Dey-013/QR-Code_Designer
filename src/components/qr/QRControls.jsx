import { useState } from 'react';
import { motion } from 'framer-motion';

export default function QRControls({ config, updateConfig, onDownload, onPreview }) {
  const [logoFile, setLogoFile] = useState(null);
  const [batchInput, setBatchInput] = useState('');

  const handleLogoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        updateConfig({ image: event.target.result });
        setLogoFile(file.name);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleBatchGenerate = () => {
    const items = batchInput.split('\n').filter(item => item.trim() !== '');
    if (items.length > 0) {
      alert(`Would generate ${items.length} QR codes in a real implementation`);
      // In a full implementation, you would generate and download multiple QR codes
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Content to encode</label>
        <input
          type="text"
          value={config.data}
          onChange={(e) => updateConfig({ data: e.target.value })}
          placeholder="Enter URL or text"
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Foreground Color</label>
          <div className="flex items-center">
            <input
              type="color"
              value={config.dotsOptions.color}
              onChange={(e) => updateConfig({ dotsOptions: { ...config.dotsOptions, color: e.target.value } })}
              className="w-10 h-10 cursor-pointer"
            />
            <input
              type="text"
              value={config.dotsOptions.color}
              onChange={(e) => updateConfig({ dotsOptions: { ...config.dotsOptions, color: e.target.value } })}
              className="ml-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-300">Background Color</label>
          <div className="flex items-center">
            <input
              type="color"
              value={config.backgroundOptions.color}
              onChange={(e) => updateConfig({ backgroundOptions: { ...config.backgroundOptions, color: e.target.value } })}
              className="w-10 h-10 cursor-pointer"
            />
            <input
              type="text"
              value={config.backgroundOptions.color}
              onChange={(e) => updateConfig({ backgroundOptions: { ...config.backgroundOptions, color: e.target.value } })}
              className="ml-2 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
            />
          </div>
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Dot Style</label>
        <select
          value={config.dotsOptions.type}
          onChange={(e) => updateConfig({ dotsOptions: { ...config.dotsOptions, type: e.target.value } })}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
        >
          {['square', 'dots', 'rounded', 'classy', 'classy-rounded', 'extra-rounded'].map((style) => (
            <option key={style} value={style}>
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Add Logo</label>
        <div className="flex items-center space-x-4">
          <label className="px-4 py-2 bg-zinc-700 hover:bg-zinc-600 rounded-lg cursor-pointer transition-colors">
            Upload Logo
            <input type="file" className="hidden" onChange={handleLogoUpload} accept="image/*" />
          </label>
          {logoFile && (
            <span className="text-sm text-gray-400 truncate max-w-xs">{logoFile}</span>
          )}
          {config.image && (
            <button
              onClick={() => {
                updateConfig({ image: '' });
                setLogoFile(null);
              }}
              className="px-3 py-1 bg-red-600 hover:bg-red-700 rounded-lg text-sm transition-colors"
            >
              Remove
            </button>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-300">Batch Generate (one per line)</label>
        <textarea
          value={batchInput}
          onChange={(e) => setBatchInput(e.target.value)}
          rows={3}
          className="w-full px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter multiple URLs or texts, one per line"
        />
        <button
          onClick={handleBatchGenerate}
          disabled={!batchInput.trim()}
          className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-900 disabled:text-gray-500 rounded-lg transition-colors"
        >
          Generate Batch
        </button>
      </div>

      <div className="flex flex-wrap gap-4 pt-4">
        <button
          onClick={() => onDownload('png')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
        >
          Download PNG
        </button>
        <button
          onClick={() => onDownload('svg')}
          className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors"
        >
          Download SVG
        </button>
        <button
          onClick={onPreview}
          className="px-6 py-3 bg-zinc-700 hover:bg-zinc-600 text-white font-medium rounded-lg transition-colors"
        >
          Preview
        </button>
      </div>
    </div>
  );
}