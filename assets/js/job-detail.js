// Job detail page functionality
let currentJob = null;

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const jobId = urlParams.get('id');
  
  if (!jobId) {
    showJobNotFound();
    return;
  }
  
  // Find the job in the data
  const jobsData = window.jobsData || [];
  currentJob = jobsData.find(job => job.id === jobId);
  
  if (!currentJob) {
    showJobNotFound();
    return;
  }
  
  displayJobDetail();
});

// Show job not found message
function showJobNotFound() {
  document.getElementById('jobNotFound').classList.remove('hidden');
  document.getElementById('jobDetailContent').classList.add('hidden');
}

// Display job detail information
function displayJobDetail() {
  document.getElementById('jobNotFound').classList.add('hidden');
  document.getElementById('jobDetailContent').classList.remove('hidden');
  
  // Update page title
  document.title = `${currentJob.title} at ${currentJob.company} - HireNow`;
  
  // Populate job header information
  document.getElementById('jobTitle').textContent = currentJob.title;
  document.getElementById('jobCompany').textContent = currentJob.company;
  document.getElementById('jobLocation').textContent = currentJob.location;
  document.getElementById('jobSalary').textContent = currentJob.salary;
  document.getElementById('jobExperience').textContent = currentJob.experienceLevel;
  document.getElementById('jobType').textContent = currentJob.type;
  
  // Populate skills
  const skillsContainer = document.getElementById('jobSkills');
  skillsContainer.innerHTML = currentJob.skills.map(skill => 
    `<span class="px-3 py-1 bg-secondary text-secondary-foreground text-sm rounded border border-border">${skill}</span>`
  ).join('');
  
  // Populate description
  document.getElementById('jobDescription').textContent = currentJob.description;
  
  // Populate requirements
  const requirementsContainer = document.getElementById('jobRequirements');
  requirementsContainer.innerHTML = currentJob.requirements.map(requirement => 
    `<li class="flex items-start">
      <svg class="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-muted-foreground">${requirement}</span>
    </li>`
  ).join('');
  
  // Populate benefits
  const benefitsContainer = document.getElementById('jobBenefits');
  benefitsContainer.innerHTML = currentJob.benefits.map(benefit => 
    `<li class="flex items-start">
      <svg class="w-5 h-5 text-primary mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
      <span class="text-muted-foreground">${benefit}</span>
    </li>`
  ).join('');
  
  // Format and populate dates
  const postedDate = new Date(currentJob.postedDate).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  const deadlineDate = new Date(currentJob.applicationDeadline).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  document.getElementById('jobPostedDate').textContent = postedDate;
  document.getElementById('jobDeadline').textContent = deadlineDate;
}

// Share job functionality
function shareJob(platform) {
  const jobUrl = window.location.href;
  const jobTitle = currentJob ? currentJob.title : 'Check out this job';
  const company = currentJob ? currentJob.company : '';
  
  let shareUrl = '';
  
  switch (platform) {
    case 'twitter':
      shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(`${jobTitle} at ${company}`)}&url=${encodeURIComponent(jobUrl)}`;
      break;
    case 'linkedin':
      shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(jobUrl)}`;
      break;
    case 'copy':
      // Copy to clipboard
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(jobUrl).then(() => {
          showToast('Link copied to clipboard!');
        }).catch(() => {
          fallbackCopyToClipboard(jobUrl);
        });
      } else {
        fallbackCopyToClipboard(jobUrl);
      }
      return;
  }
  
  if (shareUrl) {
    window.open(shareUrl, '_blank', 'width=600,height=400');
  }
}

// Fallback copy to clipboard for older browsers
function fallbackCopyToClipboard(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.left = '-999999px';
  textArea.style.top = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  
  try {
    document.execCommand('copy');
    showToast('Link copied to clipboard!');
  } catch (err) {
    showToast('Unable to copy link');
  }
  
  document.body.removeChild(textArea);
}

// Simple toast notification
function showToast(message) {
  // Create toast element
  const toast = document.createElement('div');
  toast.className = 'fixed bottom-4 right-4 bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg z-50 transition-all duration-300 transform translate-y-full';
  toast.textContent = message;
  
  document.body.appendChild(toast);
  
  // Show toast
  setTimeout(() => {
    toast.classList.remove('translate-y-full');
  }, 100);
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.add('translate-y-full');
    setTimeout(() => {
      document.body.removeChild(toast);
    }, 300);
  }, 3000);
}