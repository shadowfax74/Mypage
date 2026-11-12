import { motion } from "framer-motion"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
      {/* Subtle radial glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-[#a3e635]/[0.04] blur-[120px] rounded-full" />
      
      {/* Animated geometric SVG grid pattern */}
      <motion.svg
        className="absolute inset-0 w-full h-full opacity-[0.14]"
        xmlns="http://www.w3.org/2000/svg"
        initial={{ y: 0 }}
        animate={{ y: [-15, 0, -15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <pattern
            id="subtle-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="#a3e635"
              strokeWidth="0.6"
              strokeOpacity="0.25"
            />
            <circle cx="24" cy="24" r="0.8" fill="#a3e635" fillOpacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#subtle-grid)" />
      </motion.svg>

      {/* Gentle floating accents */}
      <motion.div
        className="absolute top-1/4 right-[15%] w-72 h-72 rounded-full border border-[#a3e635]/[0.08]"
        animate={{
          scale: [1, 1.08, 1],
          rotate: [0, 90, 180, 270, 360],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 left-[10%] w-96 h-96 rounded-full border border-[#a3e635]/[0.05]"
        animate={{
          scale: [1.05, 0.95, 1.05],
          rotate: [360, 270, 180, 90, 0],
        }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )
}
