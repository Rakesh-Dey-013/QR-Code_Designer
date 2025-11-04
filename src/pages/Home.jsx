import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Animated Spotlight Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {/* Main spotlight */}
        {/* <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-3xl animate-pulse"></div> */}
        {/* Secondary spotlights */}
        <div className="absolute top-3/4 left-1/4 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 right-1/4 w-[300px] h-[300px] bg-indigo-600/15 rounded-full blur-2xl"></div>
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.h1 
            className="text-6xl md:text-7xl font-black mb-6 bg-gradient-to-r from-violet-400 via-purple-300 to-indigo-400 bg-clip-text text-transparent leading-tight"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Artistic QR Code Designer
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Create stunning, customizable QR codes with artistic styles, logos, and colors.
            Perfect for branding, marketing, and personal projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link
              to="/QR-Code_Designer/design"
              className="group relative inline-flex items-center px-10 py-4 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white font-semibold rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-violet-500/25"
            >
              <span className="relative z-10">Start Designing</span>
              <div className="absolute inset-0 bg-gradient-to-r from-violet-400 to-purple-400 rounded-2xl blur opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>

        {/* Enhanced Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {[
            {
              title: "Custom Styles",
              description: "Choose from dots, squares, rounded shapes and more to match your brand aesthetic.",
              icon: "🎨",
              gradient: "from-pink-500/20 to-violet-500/20",
              border: "border-pink-500/30"
            },
            {
              title: "Logo Integration",
              description: "Seamlessly add your logo or image to the center while maintaining scannability.",
              icon: "🖼️",
              gradient: "from-violet-500/20 to-indigo-500/20",
              border: "border-violet-500/30"
            },
            {
              title: "Color Customization",
              description: "Pick any colors for foreground and background with real-time preview.",
              icon: "🌈",
              gradient: "from-indigo-500/20 to-purple-500/20",
              border: "border-indigo-500/30"
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className={`group relative bg-gradient-to-br from-zinc-950 to-violet-700/10 backdrop-blur-sm border ${feature.border} rounded-2xl p-8 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 overflow-hidden`}
            >
              {/* Card glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Animated background pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-violet-400/10 to-transparent rounded-full blur-2xl transform translate-x-8 -translate-y-8 group-hover:scale-150 transition-transform duration-500"></div>
              
              <div className="relative z-10">
                <motion.div 
                  className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-200 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>

              {/* Subtle border animation */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/50 via-purple-500/50 to-indigo-500/50 opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>

        {/* Additional visual elements */}
        <div className="flex justify-center mt-20">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
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
      </div>
    </div>
  );
}