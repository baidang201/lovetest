export default function Skeleton() {
  return (
    <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm animate-pulse">
      <div className="flex justify-between items-start mb-4">
        <div className="space-y-3">
          <div className="h-4 w-20 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-6 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
        
        <div className="w-12 h-12 rounded-full bg-gray-200 dark:bg-gray-700" />
      </div>
      
      <div className="w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full" />
    </div>
  );
} 