import { useState } from 'react';
import { Course } from '@/types/index';
import { Button } from '@/components/ui/button';
import { openWhatsApp, getCourseMessage } from '@/lib/whatsapp';
import {
  GraduationCap, Award, Briefcase, BookOpen,
  Building2, Scale, HeartPulse, Brain, Truck,
  Users, Monitor, UserCheck, HardHat, Gavel, BookOpenCheck, HandHeart,
  LucideIcon, BadgeCheck,
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
  'Graduação': { badge: 'bg-blue-100 text-blue-800 border-blue-200', gradient: 'from-[#003B5C] via-[#005580] to-[#009FE3]', text: 'text-blue-100' },
  'Pós-graduação': { badge: 'bg-purple-100 text-purple-800 border-purple-200', gradient: 'from-[#2D1B69] via-[#4A2F8A] to-[#009FE3]', text: 'text-purple-100' },
  'Tecnólogo': { badge: 'bg-amber-100 text-amber-800 border-amber-200', gradient: 'from-[#78350F] via-[#B45309] to-[#00B050]', text: 'text-amber-100' },
  'Extensão': { badge: 'bg-emerald-100 text-emerald-800 border-emerald-200', gradient: 'from-[#064E3B] via-[#059669] to-[#00B050]', text: 'text-emerald-100' },
};

export function CourseCard({ course }: { course: Course }) {
  const [imageError, setImageError] = useState(false);
  const config = modalityConfig[course.modality] ?? modalityConfig['Graduação'];
  const Icon = (course.icon && iconMap[course.icon]) ? iconMap[course.icon] : GraduationCap;
  const msg = course.whatsappMessage ?? getCourseMessage(course.title);
  const showImage = Boolean(course.image) && !imageError;

  return (
    <article className="bg-white border border-border rounded-[24px] overflow-hidden flex flex-col h-full shadow-sm hover:shadow-2xl hover:-translate-y-1 hover:border-primary/30 transition-all duration-300 group">
      <div className="relative h-[150px] overflow-hidden bg-navy md:h-[190px]">
        {showImage ? (
          <img
            src={course.image}
            alt={`Imagem representativa do curso ${course.title}`}
            className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
            loading="lazy"
          />
        ) : (
          <div className={`h-full w-full bg-gradient-to-br ${config.gradient} flex flex-col items-center justify-center text-center p-5`}>
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_white,_transparent_45%)]" />
            <Icon className={`relative w-14 h-14 ${config.text} mb-3 group-hover:scale-110 transition-transform duration-300`} />
            <span className="relative text-white/80 text-xs font-semibold uppercase tracking-[0.2em]">UniBF Cristalina-GO</span>
          </div>
        )}
        {showImage && (
          <>
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,59,92,0.15),rgba(0,59,92,0.45))]" />
            <Icon className="absolute right-4 top-4 w-9 h-9 text-white/90 drop-shadow transition-transform duration-300 group-hover:scale-110" />
            <span className="absolute bottom-4 left-4 text-[11px] font-bold uppercase tracking-[0.22em] text-white/85 drop-shadow">
              UNIBF Cristalina-GO
            </span>
          </>
        )}
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <span className={`text-[11px] font-bold px-3 py-1 rounded-full border backdrop-blur ${config.badge}`}>
            {course.modality}
          </span>
          <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-white/90 text-navy border border-white/60 backdrop-blur">
            {course.area}
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-3 text-xs font-semibold text-primary">
          <BadgeCheck className="w-4 h-4" />
          <span>Consulte disponibilidade</span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2 leading-snug group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">{course.description}</p>
        <p className="text-[11px] text-muted-foreground/80 leading-relaxed mb-5">
          {course.sourceNote ?? 'Cursos, valores e condições devem ser confirmados no atendimento oficial.'}
        </p>

        <Button
          variant="outline"
          size="sm"
          className="w-full justify-between rounded-full group/btn hover:bg-[#00B050] hover:text-white hover:border-[#00B050] border-navy/20 text-navy"
          onClick={() => openWhatsApp(msg)}
        >
          <span>{course.cta}</span>
          <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
        </Button>
      </div>
    </article>
  );
}
