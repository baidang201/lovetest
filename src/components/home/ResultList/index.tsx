import ResultCard from './ResultCard';
import Skeleton from './Skeleton';

export default function ResultList() {
  // TODO: 从API获取最新测试结果
  const results = [
    { id: 1, name1: '张三', name2: '李四', score: 85 },
    { id: 2, name1: '王五', name2: '赵六', score: 92 },
  ];

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold text-center">最新测试结果</h2>
      
      <div className="grid gap-4 sm:grid-cols-2">
        {results.map(result => (
          <ResultCard key={result.id} result={result} />
        ))}
      </div>
    </section>
  );
} 