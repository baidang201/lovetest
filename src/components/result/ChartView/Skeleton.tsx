export default function Skeleton() {
  return (
    <div className="p-8 rounded-xl bg-white dark:bg-gray-800 shadow-sm animate-pulse">
      <div className="h-8 w-40 bg-gray-200 dark:bg-gray-700 rounded mb-6" />
      
      <div className="aspect-square max-w-xl mx-auto bg-gray-200 dark:bg-gray-700 rounded-full" />
      
      <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="text-center space-y-2">
            <div className="h-4 w-20 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
            <div className="h-6 w-12 mx-auto bg-gray-200 dark:bg-gray-700 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
} 