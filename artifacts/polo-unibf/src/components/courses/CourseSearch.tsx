import { Search } from 'lucide-react';

interface CourseSearchProps {
  searchTerm: string;
  setSearchTerm: (s: string) => void;
  selectedModality: string;
  setSelectedModality: (m: string) => void;
}

export function CourseSearch({ searchTerm, setSearchTerm, selectedModality, setSelectedModality }: CourseSearchProps) {
  const modalities = ['Todos', 'Graduação', 'Pós-graduação', 'Tecnólogo', 'Extensão'];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-border mb-10">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
          <input
            type="text"
            placeholder="Buscar por nome do curso ou área..."
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-input focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-all bg-background"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        
        <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0 hide-scrollbar" style={{ scrollbarWidth: 'none' }}>
          {modalities.map(m => (
            <button
              key={m}
              onClick={() => setSelectedModality(m)}
              className={`px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap transition-colors ${
                selectedModality === m 
                  ? 'bg-navy text-white shadow-md' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {m}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
