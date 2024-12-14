export default function IntroSection() {
  return (
    <section className="text-center space-y-6">
      <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
        姓名缘分测试
      </h1>
      
      <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300">
        探索你们之间的缘分密码
      </p>
      
      <div className="flex justify-center space-x-4">
        <div className="animate-float">
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary">
            AI智能分析
          </span>
        </div>
        <div className="animate-float" style={{ animationDelay: "0.2s" }}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 text-secondary">
            趣味解读
          </span>
        </div>
        <div className="animate-float" style={{ animationDelay: "0.4s" }}>
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-accent/10 text-accent">
            即时结果
          </span>
        </div>
      </div>
    </section>
  );
} 