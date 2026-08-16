import React from 'react';
import { motion } from 'framer-motion';

const CartoonGirl3 = ({ className = '', size = 300 }) => {
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
        <circle cx="150" cy="150" r="140" fill="url(#bgGradient3)" opacity="0.2" />
        
        {/* Body */}
        <ellipse cx="150" cy="220" rx="45" ry="55" fill="url(#bodyGradient3)" />
        
        {/* Neck */}
        <rect x="140" y="165" width="20" height="25" rx="10" fill="#FFD4B8" />
        
        {/* Head */}
        <circle cx="150" cy="135" r="50" fill="#FFE0CC" />
        
        {/* Hair - Wavy Left Side */}
        <path
          d="M 108 125 Q 93 110 95 90 Q 98 70 110 60 Q 120 53 130 58 Q 128 75 122 90 Q 115 105 110 120 Z"
          fill="url(#hairGradient3)"
        />
        
        {/* Hair - Wavy Right Side */}
        <path
          d="M 192 125 Q 207 110 205 90 Q 202 70 190 60 Q 180 53 170 58 Q 172 75 178 90 Q 185 105 190 120 Z"
          fill="url(#hairGradient3)"
        />
        
        {/* Hair - Top with waves */}
        <ellipse cx="150" cy="92" rx="58" ry="48" fill="url(#hairGradient3)" />
        
        {/* Wavy Hair Details */}
        <path
          d="M 115 108 Q 120 95 130 100 Q 135 92 143 98 Q 150 90 157 98 Q 165 92 170 100 Q 180 95 185 108"
          stroke="url(#hairGradient3)"
          strokeWidth="8"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Hair - Soft Bangs */}
        <path
          d="M 118 112 Q 123 100 133 105 Q 143 98 150 108 Q 157 98 167 105 Q 177 100 182 112 L 178 116 Q 168 108 158 113 Q 148 108 138 113 Q 128 108 122 116 Z"
          fill="url(#hairGradient3)"
        />
        
        {/* Left Ear */}
        <ellipse cx="105" cy="135" rx="10" ry="15" fill="#FFD4B8" />
        
        {/* Right Ear */}
        <ellipse cx="195" cy="135" rx="10" ry="15" fill="#FFD4B8" />
        
        {/* Glasses Frame - Left */}
        <ellipse cx="130" cy="132" rx="14" ry="16" fill="none" stroke="#A78BFA" strokeWidth="2.5" />
        
        {/* Glasses Frame - Right */}
        <ellipse cx="170" cy="132" rx="14" ry="16" fill="none" stroke="#A78BFA" strokeWidth="2.5" />
        
        {/* Glasses Bridge */}
        <path
          d="M 144 130 Q 150 128 156 130"
          stroke="#A78BFA"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Left Eye Behind Glasses */}
        <ellipse cx="130" cy="132" rx="7" ry="11" fill="white" />
        <circle cx="131" cy="134" r="5" fill="#4A3828" />
        <circle cx="133" cy="132" r="2.5" fill="white" />
        
        {/* Right Eye Behind Glasses */}
        <ellipse cx="170" cy="132" rx="7" ry="11" fill="white" />
        <circle cx="171" cy="134" r="5" fill="#4A3828" />
        <circle cx="173" cy="132" r="2.5" fill="white" />
        
        {/* Eyebrows */}
        <path
          d="M 116 118 Q 128 116 140 119"
          stroke="#4A3828"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
        <path
          d="M 160 119 Q 172 116 184 118"
          stroke="#4A3828"
          strokeWidth="2.5"
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
        
        {/* Gentle Smile */}
        <path
          d="M 135 157 Q 150 163 165 157"
          stroke="#C084FC"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        
        {/* Blush - Left */}
        <ellipse cx="115" cy="145" rx="12" ry="8" fill="#E9D5FF" opacity="0.6" />
        
        {/* Blush - Right */}
        <ellipse cx="185" cy="145" rx="12" ry="8" fill="#E9D5FF" opacity="0.6" />
        
        {/* Arms - Left */}
        <ellipse
          cx="105"
          cy="200"
          rx="15"
          ry="45"
          fill="url(#bodyGradient3)"
          transform="rotate(-15 105 200)"
        />
        
        {/* Arms - Right */}
        <ellipse
          cx="195"
          cy="200"
          rx="15"
          ry="45"
          fill="url(#bodyGradient3)"
          transform="rotate(15 195 200)"
        />
        
        {/* Hands - Left */}
        <circle cx="102" cy="238" r="12" fill="#FFD4B8" />
        
        {/* Hands - Right */}
        <circle cx="198" cy="238" r="12" fill="#FFD4B8" />
        
        {/* Spray Bottle Prop in Right Hand */}
        <g transform="translate(185, 225)">
          {/* Bottle Body */}
          <rect x="0" y="5" width="16" height="22" rx="3" fill="url(#bottleGradient3)" stroke="#A78BFA" strokeWidth="1.5" />
          
          {/* Bottle Liquid */}
          <rect x="2" y="15" width="12" height="10" rx="2" fill="#DDD6FE" opacity="0.6" />
          
          {/* Spray Nozzle */}
          <rect x="5" y="0" width="6" height="7" rx="1" fill="#C084FC" />
          
          {/* Spray Trigger */}
          <path
            d="M 11 3 L 15 6 L 13 8 L 9 5 Z"
            fill="#A78BFA"
          />
          
          {/* Sparkle on Bottle */}
          <path
            d="M 8 12 L 9 14 L 11 13 L 9 15 L 8 17 L 7 15 L 5 13 L 7 14 Z"
            fill="#FCD34D"
            opacity="0.8"
          />
        </g>
        
        {/* Decorative Elements - Sparkles */}
        <motion.g
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 65 95 L 67 100 L 72 102 L 67 104 L 65 109 L 63 104 L 58 102 L 63 100 Z"
            fill="url(#sparkleGradient3)"
          />
        </motion.g>
        
        <motion.g
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            delay: 0.7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 235 115 L 237 120 L 242 122 L 237 124 L 235 129 L 233 124 L 228 122 L 233 120 Z"
            fill="url(#sparkleGradient3)"
          />
        </motion.g>
        
        <motion.g
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            duration: 2.5,
            delay: 1.4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 225 75 L 226 78 L 229 79 L 226 80 L 225 83 L 224 80 L 221 79 L 224 78 Z"
            fill="url(#sparkleGradient3)"
          />
        </motion.g>
        
        <motion.g
          animate={{
            y: [0, -3, 0],
            rotate: [0, 5, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M 80 140 L 81 143 L 84 144 L 81 145 L 80 148 L 79 145 L 76 144 L 79 143 Z"
            fill="#DDD6FE"
          />
        </motion.g>
        
        {/* Gradients */}
        <defs>
          <linearGradient id="bgGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C084FC" />
            <stop offset="50%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#DDD6FE" />
          </linearGradient>
          
          <linearGradient id="hairGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#9333EA" />
            <stop offset="50%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#C084FC" />
          </linearGradient>
          
          <linearGradient id="bodyGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3E8FF" />
            <stop offset="50%" stopColor="#E9D5FF" />
            <stop offset="100%" stopColor="#F3E8FF" />
          </linearGradient>
          
          <linearGradient id="bottleGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#F3E8FF" />
            <stop offset="100%" stopColor="#E9D5FF" />
          </linearGradient>
          
          <linearGradient id="sparkleGradient3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FCD34D" />
            <stop offset="100%" stopColor="#FBBF24" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
};

export default CartoonGirl3;