'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Input from './Input';
import Submit from './Submit';

export default function NameForm() {
  const router = useRouter();
  const [names, setNames] = useState({
    name1: '',
    name2: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!names.name1 || !names.name2) {
      alert('请输入双方姓名');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // TODO: 这里可以添加API调用来获取分析结果
      // const response = await fetch('/api/analyze', {
      //   method: 'POST',
      //   body: JSON.stringify(names)
      // });
      
      // 模拟API调用延迟
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // 将姓名作为查询参数传递到结果页
      router.push(`/result?name1=${encodeURIComponent(names.name1)}&name2=${encodeURIComponent(names.name2)}`);
    } catch (error) {
      console.error('提交失败:', error);
      alert('提交失败,请重试');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <Input
          label="你的名字"
          value={names.name1}
          onChange={(e) => setNames(prev => ({...prev, name1: e.target.value}))}
          placeholder="请输入你的名字"
          required
        />
        <Input
          label="TA的名字"
          value={names.name2}
          onChange={(e) => setNames(prev => ({...prev, name2: e.target.value}))}
          placeholder="请输入对方的名字"
          required
        />
      </div>
      
      <Submit isSubmitting={isSubmitting} />
    </form>
  );
} 