import { Suspense } from 'react';
import ScoreCard from '@/components/result/ScoreCard';
import ChartView from '@/components/result/ChartView';
import Analysis from '@/components/result/Analysis';
import ShareButton from '@/components/result/ShareButton';
import Loading from './loading';

interface ResultPageProps {
  searchParams: {
    name1?: string;
    name2?: string;
  };
}

export default function ResultPage({ searchParams }: ResultPageProps) {
  const { name1, name2 } = searchParams;

  // 如果没有姓名参数,可以重定向到首页
  if (!name1 || !name2) {
    // 在服务端组件中不能直接使用 router.push
    // 可以考虑显示错误信息或者使用 redirect()
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">参数错误</h1>
          <a 
            href="/"
            className="text-primary hover:text-primary/80"
          >
            返回首页
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto space-y-8">
        {/* 显示姓名 */}
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {decodeURIComponent(name1)} & {decodeURIComponent(name2)}
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            的缘分测试结果
          </p>
        </div>

        {/* 评分卡片 */}
        <Suspense fallback={<Loading />}>
          <ScoreCard />
        </Suspense>

        {/* 图表分析 */}
        <Suspense fallback={<Loading />}>
          <ChartView />
        </Suspense>

        {/* 文字解读 */}
        <Suspense fallback={<Loading />}>
          <Analysis />
        </Suspense>

        {/* 分享按钮 */}
        <ShareButton />
      </main>
    </div>
  );
} 