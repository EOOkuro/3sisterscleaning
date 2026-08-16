import React from 'react';
import { motion } from 'framer-motion';

const CartoonGirl1 = ({ className = '', size = 300 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      className={className}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto"
      >
        {/* Background Circle */}
        <circle cx="150" cy="150" r="140" fill="url(#bgGradient1)" opacity="0.2" />
        
        {/* Body */}
        <ellipse cx="150" cy="220" rx="45" ry="55" fill="url(#bodyGradient1)" />
        
        {/* Neck */}
        <rect x="140" y="165" width="20" height="25" rx="10" fill="#FFD4B8" />
        
        {/* Head */}
        <circle cx="150" cy="135" r="50" fill="#FFE0CC" />
        
        {/* Hair - Left Side */}
        <path
          d="M 110 120 Q 95 100 100 80 Q 105 60 120 55 Q 130 50 140 55 L 145 75 Q 135 85 125 100 L 115 115 Z"
          fill="url(#hairGradient1)"
        />
        
        {/* Hair - Right Side */}
        <path
          d="M 190 120 Q 205 100 200 80 Q 195 60 180 55 Q 170 50 160 55 L 155 75 Q 165 85 175 100 L 185 115 Z"
          fill="url(#hairGradient1)"
        />
        
        {/* Hair - Top */}
        <ellipse cx="150" cy="95" rx="55" ry="45" fill="url(#hairGradient1)" />
        
        {/* Hair - Bangs */}
        <path
          d="M 120 110 Q 125 95 135 100 Q 145 95 150 105 Q 155 95 165 100 Q 175 95 180 110 L 175 115 Q 165 105 155 110 Q 145 105 135 110 Q 125 105 120 110 Z"
          fill="url(#hairGradient1)"
        />
        
        {/* Left Ear */}
        <ellipse cx="105" cy="135" rx="10" ry="15" fill="#FFD4B8" />
        
        {/* Right Ear */}
        <ellipse cx="195" cy="135" rx="10" ry="15" fill="#FFD4B8" />
        
        {/* Left Eye */}
        <ellipse cx="130" cy="130" rx="8" ry="12" fill="white" />
        <circle cx="132" cy="132" r="6" fill="#4A3828" />
        <circle cx="134" cy="130" r="3" fill="white" />
        
        {/* Right Eye */}
        <ellipse cx="170" cy="130" rx="8" ry="12" fill="white" />
        <circle cx="172" cy="132" r="6" fill="#4A3828" />
        <circle cx="174" cy="130" r="3" fill="white" />
        
        {/* Eyebrows */}
        <path
          d="M 118 118 Q 130 115 138 118"
          stroke="#4A3828"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 162 118 Q 170 115 182 118"
          stroke="#4A3828"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Nose */}
        <path
          d="M 150 145 Q 148 150 150 152"
          stroke="#FFB89D"
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Smile */}
        <path
          d="M 135 155 Q 150 165 165 155"
          stroke="#06B6D4"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Blush - Left */}
        <ellipse cx="115" cy="145" rx="12" ry="8" fill="#BAE6FD" opacity="0.5" />
        
        {/* Blush - Right */}
        <ellipse cx="185" cy="145" rx="12" ry="8" fill="#BAE6FD" opacity="0.5" />
        
        {/* Arms - Left */}
        <ellipse
          cx="105"
          cy="200"
          rx="15"
          ry="45"
          fill="url(#bodyGradient1)"
          transform="rotate(-20 105 200)"
        />
        
        {/* Arms - Right */}
        <ellipse
          cx="195"
          cy="200"
          rx="15"
          ry="45"
          fill="url(#bodyGradient1)"
          transform="rotate(20 195 200)"
        />
        
        {/* Hands - Left */}
        <circle cx="100" cy="235" r="12" fill="#FFD4B8" />
        
        {/* Hands - Right */}
        <circle cx="200" cy="235" r="12" fill="#FFD4B8" />
        
        {/* Decorative Elements - Sparkles */}
        <motion.g
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 70 100 L 72 105 L 77 107 L 72 109 L 70 114 L 68 109 L 63 107 L 68 105 Z"
            fill="url(#sparkleGradient1)"
          />
        </motion.g>
        
        <motion.g
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            delay: 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 230 120 L 232 125 L 237 127 L 232 129 L 230 134 L 228 129 L 223 127 L 228 125 Z"
            fill="url(#sparkleGradient1)"
          />
        </motion.g>
        
        <motion.g
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 2,
            delay: 1,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 220 80 L 221 83 L 224 84 L 221 85 L 220 88 L 219 85 L 216 84 L 219 83 Z"
            fill="url(#sparkleGradient1)"
          />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bgGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#0891B2" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>
          
          <linearGradient id="hairGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0891B2" />
            <stop offset="50%" stopColor="#06B6D4" />
            <stop offset="100%" stopColor="#67E8F9" />
          </linearGradient>
          
          <linearGradient id="bodyGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A5F3FC" />
            <stop offset="50%" stopColor="#67E8F9" />
            <stop offset="100%" stopColor="#BAE6FD" />
          </linearGradient>
          
          <linearGradient id="sparkleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default CartoonGirl1;