import { Course } from '@/types/index';
import { Button } from '@/components/ui/button';
import { openWhatsApp, getCourseMessage } from '@/lib/whatsapp';
import {
  GraduationCap, Award, Briefcase, BookOpen,
  Building2, Scale, HeartPulse, Brain, Truck,
  Users, Monitor, UserCheck, HardHat, Gavel, BookOpenCheck, HandHeart,
  LucideIcon,
} from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  'graduation-cap': GraduationCap,
  'award': Award,
  'briefcase': Briefcase,
  'book-open': BookOpen,
  'book-open-check': BookOpenCheck,
  'building-2': Building2,
  'scale': Scale,
  'heart-pulse': HeartPulse,
  'brain': Brain,
  'truck': Truck,
  'users': Users,
  'user-check': UserCheck,
  'monitor': Monitor,
  'hard-hat': HardHat,
  'gavel': Gavel,
  'hand-heart': HandHeart,
};

const modalityConfig: Record<string, { badge: string; gradient: string; text: string }> = {
  'Graduação':    { badge: 'bg-blue-100 text-blue-800 border-blue-200',    gradient: 'from-[#003B5C] to-[#005580]',    text: 'text-blue-200' },
  'Pós-graduação':{ badge: 'bg-purple-100 text-purple-800 border-purple-200', gradient: 'from-[#2D1B69] to-[#4A2F8A]', text: 'text-purple-200' },
  'Tecnólogo':   { badge: 'bg-amber-100 text-amber-800 border-amber-200',  gradient: 'from-[#78350F] to-[#B45309]',  text: 'text-amber-200' },
  'Extensão':    { badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', gradient: 'from-[#064E3B] to-[#059669]', text: 'text-emerald-200' },
};

export function CourseCard({ course }: { course: Course }) {
  const config = modalityConfig[course.modality] ?? modalityConfig['Graduação'];
  const Icon = (course.icon && iconMap[course.icon]) ? iconMap[course.icon] : GraduationCap;
  const msg = course.whatsappMessage ?? getCourseMessage(course.title);

  return (
    <div className="bg-white border border-border rounded-2xl overflow-hidden flex flex-col h-full hover:shadow-xl hover:border-primary/20 transition-all duration-300 group">
      {/* Visual banner */}
      <div className={`bg-gradient-to-br ${config.gradient} h-28 flex items-center justify-center relative overflow-hidden`}>
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_white,_transparent)]" />
        <Icon className={`w-12 h-12 ${config.text} opacity-90 group-hover:scale-110 transition-transform duration-300`} />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex flex-wrap gap-1.5 mb-3">
          <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${config.badge}`}>
            {course.modality}
          </span>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground border border-border">
            {course.area}
          </span>
        </div>

        <h3 className="text-base font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-5 flex-1 leading-relaxed">{course.description}</p>

        <Button
          variant="outline"
          size="sm"
          className="w-full justify-between group/btn hover:bg-primary hover:text-white border-primary/20 text-primary"
          onClick={() => openWhatsApp(msg)}
        >
          <span>{course.cta}</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </Button>
      </div>
    </div>
  );
}
