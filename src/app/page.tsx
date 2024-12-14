import IntroSection from '@/components/home/IntroSection';
import NameForm from '@/components/home/NameForm';
import ResultList from '@/components/home/ResultList';

export default function Home() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <main className="max-w-4xl mx-auto space-y-12">
        {/* 简介标语区域 */}
        <IntroSection />
        
        {/* 姓名输入表单 */}
        <NameForm />
        
        {/* 最新测试结果 */}
        <ResultList />
      </main>
    </div>
  );
}
