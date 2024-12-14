'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

interface AnalysisProps {
  analysis?: {
    summary: string;
    details: string[];
    suggestions: string[];
  };
}

export default function Analysis({
  analysis = {
    summary: "你们的缘分指数相当不错!在多个维度上都展现出了良好的契合度。",
    details: [
      "在性格方面,你们展现出了互补的特质,这种差异会让关系更加有趣。",
      "共同的兴趣爱好是你们关系的亮点,这为你们的互动提供了很好的基础。",
      "在价值观上虽有差异,但这些差异恰好能促进彼此的成长。"
    ],
    suggestions: [
      "建议多创造共同体验的机会,增进彼此了解。",
      "在沟通方式上可以更加开放和直接。",
      "保持对彼此兴趣的关注和支持。"
    ]
  }
}: AnalysisProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.6 }}
      className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-6">缘分解读</h2>
      
      <div className="space-y-6">
        <p className="text-lg text-gray-800 dark:text-gray-200">
          {analysis.summary}
        </p>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">详细分析</h3>
          <ul className="space-y-2">
            {analysis.details.map((detail, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300">
                • {detail}
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold mb-3">建议</h3>
          <ul className="space-y-2">
            {analysis.suggestions.map((suggestion, index) => (
              <li key={index} className="text-gray-600 dark:text-gray-300">
                • {suggestion}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
} 