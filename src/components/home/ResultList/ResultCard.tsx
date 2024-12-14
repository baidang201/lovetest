interface Result {
  id: number;
  name1: string;
  name2: string;
  score: number;
}

interface ResultCardProps {
  result: Result;
}

export default function ResultCard({ result }: ResultCardProps) {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-1">
          <p className="text-sm text-gray-500 dark:text-gray-400">姓名组合</p>
          <h3 className="text-lg font-medium">
            {result.name1} & {result.name2}
          </h3>
        </div>
        
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
          <span className="text-lg font-bold text-primary">
            {result.score}
          </span>
        </div>
      </div>
      
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div 
          className="bg-primary h-2.5 rounded-full transition-all duration-1000"
          style={{ width: `${result.score}%` }}
        />
      </div>
    </div>
  );
} 