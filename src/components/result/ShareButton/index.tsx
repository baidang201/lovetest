'use client';

import { motion } from 'framer-motion';

export default function ShareButton() {
  const handleShare = async () => {
    // TODO: 实现分享逻辑
    alert('分享功能开发中...');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      className="flex justify-center"
    >
      <button
        onClick={handleShare}
        className="px-8 py-3 rounded-lg bg-primary hover:bg-primary/90 text-white font-medium transition-colors"
      >
        分享结果
      </button>
    </motion.div>
  );
} 