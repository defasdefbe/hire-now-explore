// Jobs listing page functionality
let currentJobs = [];
let filteredJobs = [];

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  currentJobs = window.jobsData || [];
  
  // Check for search query in URL
  const urlParams = new URLSearchParams(window.location.search);
  const searchQuery = urlParams.get('search');
  
  if (searchQuery) {
    document.getElementById('jobSearch').value = searchQuery;
    performSearch();
  } else {
    filteredJobs = currentJobs;
    displayJobs();
  }

  // Set up search functionality
  document.getElementById('jobSearch').addEventListener('input', performSearch);
  document.getElementById('jobSearch').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
      performSearch();
    }
  });
});

// Perform search functionality
function performSearch() {
  const searchQuery = document.getElementById('jobSearch').value.toLowerCase().trim();
  
  if (!searchQuery) {
    filteredJobs = currentJobs;
    document.getElementById('resultsTitle').textContent = 'Latest Job Opportunities';
  } else {
    filteredJobs = currentJobs.filter(job =>
      job.title.toLowerCase().includes(searchQuery) ||
      job.company.toLowerCase().includes(searchQuery) ||
      job.location.toLowerCase().includes(searchQuery) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchQuery))
    );
    document.getElementById('resultsTitle').textContent = `Search Results for "${document.getElementById('jobSearch').value}"`;
  }
  
  displayJobs();
}

// Display jobs in the grid
function displayJobs() {
  const jobGrid = document.getElementById('jobGrid');
  const jobCount = document.getElementById('jobCount');
  const noResults = document.getElementById('noResults');
  
  // Update job count
  const count = filteredJobs.length;
  jobCount.textContent = `${count} job${count !== 1 ? 's' : ''} found`;
  
  if (count === 0) {
    jobGrid.style.display = 'none';
    noResults.classList.remove('hidden');
    return;
  }
  
  noResults.classList.add('hidden');
  jobGrid.style.display = 'grid';
  
  // Clear existing jobs
  jobGrid.innerHTML = '';
  
  // Create job cards
  filteredJobs.forEach((job, index) => {
    const jobCard = createJobCard(job, index);
    jobGrid.appendChild(jobCard);
  });
}

// Create individual job card
function createJobCard(job, index) {
  const card = document.createElement('div');
  card.className = 'block';
  card.style.animationDelay = `${index * 0.1}s`;
  
  // Format posted date
  const postedDate = new Date(job.postedDate).toLocaleDateString();
  
  // Create skills badges (max 3 + more indicator)
  const skillsHtml = job.skills.slice(0, 3).map(skill => 
    `<span class="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded border border-border">${skill}</span>`
  ).join('');
  
  const moreSkills = job.skills.length > 3 ? 
    `<span class="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded border border-border">+${job.skills.length - 3} more</span>` : '';

  card.innerHTML = `
    <div class="h-full bg-gradient-card border border-border rounded-lg transition-all duration-300 hover:shadow-card-hover hover:scale-[1.02] cursor-pointer" onclick="viewJobDetail('${job.id}')">
      <!-- Card Header -->
      <div class="p-6 pb-4">
        <div class="flex justify-between items-start mb-2">
          <h3 class="text-xl font-semibold text-foreground hover:text-primary transition-colors">
            ${job.title}
          </h3>
          <span class="px-3 py-1 bg-secondary text-secondary-foreground text-xs rounded-full">
            ${job.type}
          </span>
        </div>
        <p class="text-lg font-medium text-muted-foreground">${job.company}</p>
      </div>
      
      <!-- Card Content -->
      <div class="px-6 pb-4">
        <div class="space-y-3">
          <div class="flex items-center text-muted-foreground">
            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="text-sm">${job.location}</span>
          </div>
          
          <div class="flex items-center text-muted-foreground">
            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
            <span class="text-sm font-medium">${job.salary}</span>
          </div>
          
          <div class="flex items-center text-muted-foreground">
            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V8a2 2 0 012-2V6"></path>
            </svg>
            <span class="text-sm">${job.experienceLevel}</span>
          </div>
          
          <div class="flex items-center text-muted-foreground">
            <svg class="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3a2 2 0 012-2h4a2 2 0 012 2v4m-6 9l2 2 4-4"></path>
            </svg>
            <span class="text-sm">Posted ${postedDate}</span>
          </div>
        </div>
        
        <p class="text-sm text-muted-foreground mt-4 line-clamp-3">
          ${job.description}
        </p>
        
        <div class="flex flex-wrap gap-2 mt-4">
          ${skillsHtml}
          ${moreSkills}
        </div>
      </div>
      
      <!-- Card Footer -->
      <div class="px-6 pt-4 pb-6">
        <div class="w-full text-center">
          <span class="text-sm text-primary font-medium hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </div>
  `;
  
  return card;
}

// Navigate to job detail page
function viewJobDetail(jobId) {
  window.location.href = `job-detail.html?id=${jobId}`;
}