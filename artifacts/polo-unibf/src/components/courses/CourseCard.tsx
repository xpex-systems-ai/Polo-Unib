import { useState } from 'react';
import { Course } from '@/types/index';
import { Button } from '@/components/ui/button';
import { openWhatsApp, getCourseMessage } from '@/lib/whatsapp';

export function CourseCard({ course }: { course: Course }) {
  const modalityColors = {
    'Graduação': 'bg-blue-100 text-blue-800 border-blue-200',
    'Pós-graduação': 'bg-purple-100 text-purple-800 border-purple-200',
    'Tecnólogo': 'bg-amber-100 text-amber-800 border-amber-200',
    'Extensão': 'bg-emerald-100 text-emerald-800 border-emerald-200'
  };

  return (
    <div className="bg-white border border-border rounded-2xl p-6 flex flex-col h-full hover:shadow-lg hover:border-primary/30 transition-all">
      <div className="mb-4 flex flex-wrap gap-2">
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${modalityColors[course.modality]}`}>
          {course.modality}
        </span>
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
          {course.area}
        </span>
      </div>
      <h3 className="text-xl font-bold text-foreground mb-3">{course.title}</h3>
      <p className="text-muted-foreground text-sm mb-6 flex-1">{course.description}</p>
      <Button 
        variant="outline" 
        className="w-full justify-between group hover:bg-primary hover:text-white border-primary/20 text-primary"
        onClick={() => openWhatsApp(getCourseMessage(course.title))}
      >
        <span>{course.cta}</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </Button>
    </div>
  );
}
