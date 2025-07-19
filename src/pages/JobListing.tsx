import { useState, useMemo } from 'react';
import { JobCard } from '@/components/JobCard';
import { JobHeader } from '@/components/JobHeader';
import { sampleJobs } from '@/data/sampleJobs';

const JobListing = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredJobs = useMemo(() => {
    if (!searchQuery) return sampleJobs;
    
    return sampleJobs.filter(job =>
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }, [searchQuery]);

  return (
    <div className="min-h-screen bg-background">
      <JobHeader onSearch={setSearchQuery} />
      
      <div className="container mx-auto px-4 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-foreground">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Job Opportunities'}
          </h2>
          <p className="text-muted-foreground">
            {filteredJobs.length} job{filteredJobs.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        {filteredJobs.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No jobs found matching your search.</p>
            <p className="text-muted-foreground mt-2">Try adjusting your search terms.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredJobs.map((job, index) => (
              <div 
                key={job.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <JobCard job={job} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default JobListing;