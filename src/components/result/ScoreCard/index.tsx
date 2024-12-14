'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface ScoreCardProps {
  score?: number;
  grade?: 'S' | 'A' | 'B' | 'C';
}

export default function ScoreCard({ score = 85, grade = 'A' }: ScoreCardProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className="p-8 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10"
    >
      <div className="flex justify-between items-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold">缘分契合度</h2>
          <p className="text-gray-600 dark:text-gray-300">
            基于AI深度分析的综合评分
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            {score}
          </motion.div>
          
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ delay: 0.5, type: "spring" }}
            className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center"
          >
            <span className="text-2xl font-bold text-accent">{grade}</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
} 