import { ReactNode } from 'react';
import Header from '@/components/layout/Header';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export default function PageHeader({ title, subtitle, children }: PageHeaderProps) {
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main className="flex-1 overflow-y-auto">
        <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6 animate-fade-in">
          {children}
        </div>
      </main>
    </>
  );
}
