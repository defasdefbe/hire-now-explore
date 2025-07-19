import { Job } from '@/types/job';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Calendar, DollarSign, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

interface JobCardProps {
  job: Job;
}

export const JobCard = ({ job }: JobCardProps) => {
  return (
    <Link to={`/job/${job.id}`} className="block">
      <Card className="h-full transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] bg-gradient-card border-border/50">
        <CardHeader className="pb-4">
          <div className="flex justify-between items-start mb-2">
            <h3 className="text-xl font-semibold text-foreground hover:text-primary transition-colors">
              {job.title}
            </h3>
            <Badge variant="secondary" className="text-xs">
              {job.type}
            </Badge>
          </div>
          <p className="text-lg font-medium text-muted-foreground">{job.company}</p>
        </CardHeader>
        
        <CardContent className="pb-4">
          <div className="space-y-3">
            <div className="flex items-center text-muted-foreground">
              <MapPin className="h-4 w-4 mr-2" />
              <span className="text-sm">{job.location}</span>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <DollarSign className="h-4 w-4 mr-2" />
              <span className="text-sm font-medium">{job.salary}</span>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <Briefcase className="h-4 w-4 mr-2" />
              <span className="text-sm">{job.experienceLevel}</span>
            </div>
            
            <div className="flex items-center text-muted-foreground">
              <Calendar className="h-4 w-4 mr-2" />
              <span className="text-sm">Posted {new Date(job.postedDate).toLocaleDateString()}</span>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground mt-4 line-clamp-3">
            {job.description}
          </p>
          
          <div className="flex flex-wrap gap-2 mt-4">
            {job.skills.slice(0, 3).map((skill) => (
              <Badge key={skill} variant="outline" className="text-xs">
                {skill}
              </Badge>
            ))}
            {job.skills.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{job.skills.length - 3} more
              </Badge>
            )}
          </div>
        </CardContent>
        
        <CardFooter className="pt-4">
          <div className="w-full text-center">
            <span className="text-sm text-primary font-medium hover:underline">
              View Details →
            </span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};