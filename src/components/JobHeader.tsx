import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-image.jpg';

interface JobHeaderProps {
  onSearch: (query: string) => void;
}

export const JobHeader = ({ onSearch }: JobHeaderProps) => {
  return (
    <div className="relative bg-gradient-hero overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-accent/90" />
      
      <div className="relative container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
          Find Your Dream Job
        </h1>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto animate-fade-in">
          Discover amazing opportunities from top companies and take the next step in your career
        </p>
        
        <div className="max-w-md mx-auto flex gap-2 animate-scale-in">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input
              placeholder="Search for jobs..."
              className="pl-10 bg-card/95 border-card"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
          <Button variant="secondary" className="px-6">
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};