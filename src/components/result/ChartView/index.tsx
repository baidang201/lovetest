'use client';

import { motion } from 'framer-motion';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';
import { useState, useEffect } from 'react';

// 注册 ChartJS 组件
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

interface ChartViewProps {
  data?: {
    性格相似度: number;
    兴趣契合: number;
    价值观: number;
    沟通方式: number;
    生活习惯: number;
  };
}

export default function ChartView({ 
  data = {
    性格相似度: 85,
    兴趣契合: 90,
    价值观: 75,
    沟通方式: 88,
    生活习惯: 82,
  }
}: ChartViewProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const chartData = {
    labels: Object.keys(data),
    datasets: [
      {
        label: '匹配度',
        data: Object.values(data),
        backgroundColor: 'rgba(255, 105, 180, 0.2)',
        borderColor: 'rgba(255, 105, 180, 1)',
        borderWidth: 2,
        pointBackgroundColor: 'rgba(255, 105, 180, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 105, 180, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: true,
          color: 'rgba(0, 0, 0, 0.1)',
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm"
    >
      <h2 className="text-2xl font-bold mb-6">多维度分析</h2>
      
      <div className="aspect-square max-w-xl mx-auto">
        <Radar data={chartData} options={options} />
      </div>
      
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="text-center">
            <div className="text-sm text-gray-600 dark:text-gray-400">{key}</div>
            <div className="text-lg font-semibold text-primary">{value}%</div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 