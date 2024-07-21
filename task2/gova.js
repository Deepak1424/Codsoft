document.addEventListener('DOMContentLoaded', () => {
    const pages = document.querySelectorAll('.page');
    const navLinks = document.querySelectorAll('nav a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetPage = document.querySelector(link.getAttribute('href'));
        pages.forEach(page => page.classList.remove('active'));
        targetPage.classList.add('active');
      });
    });
  
    // Home Page: Load featured jobs
    const featuredJobs = [
      { id: 1, title: 'Software Engineer', company: 'Tech Corp' },
      { id: 2, title: 'Data Scientist', company: 'Data Inc' }
    ];
  
    const featuredJobsList = document.getElementById('job-list');
    if (featuredJobsList) {
      featuredJobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#job-detail" data-id="${job.id}">${job.title}</a> - ${job.company}`;
        featuredJobsList.appendChild(li);
      });
    }
  
    // Job Listings Page: Load all jobs
    const jobs = [
      { id: 1, title: 'Software Engineer', company: 'Tech Corp', description: 'Develop software applications.' },
      { id: 2, title: 'Data Scientist', company: 'Data Inc', description: 'Analyze data and build models.' }
    ];
  
    const jobList = document.getElementById('job-list');
    jobs.forEach(job => {
      const li = document.createElement('li');
      li.innerHTML = `<a href="#job-detail" data-id="${job.id}">${job.title}</a> - ${job.company}`;
      jobList.appendChild(li);
    });
  
    // Search functionality
    const searchBar = document.getElementById('search-bar');
    searchBar.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredJobs = jobs.filter(job => job.title.toLowerCase().includes(searchTerm));
      jobList.innerHTML = '';
      filteredJobs.forEach(job => {
        const li = document.createElement('li');
        li.innerHTML = `<a href="#job-detail" data-id="${job.id}">${job.title}</a> - ${job.company}`;
        jobList.appendChild(li);
      });
    });
  
    // Job Detail Page: Load job details
    const jobDetailPage = document.getElementById('job-detail');
    document.querySelectorAll('a[href="#job-detail"]').forEach(link => {
      link.addEventListener('click', (e) => {
        const jobId = e.target.getAttribute('data-id');
        const job = jobs.find(j => j.id == jobId);
        jobDetailPage.querySelector('#job-title').textContent = job.title;
        jobDetailPage.querySelector('#job-company').textContent = job.company;
        jobDetailPage.querySelector('#job-description').textContent = job.description;
      });
    });
  
    // Employer Dashboard: Post job
    const postJobForm = document.getElementById('post-job-form');
    postJobForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('job-title-input').value;
      const company = document.getElementById('job-company-input').value;
      const description = document.getElementById('job-description-input').value;
  
      const newJob = {
        id: jobs.length + 1,
        title,
        company,
        description
      };
  
      jobs.push(newJob);
  
      const li = document.createElement('li');
      li.innerHTML = `<a href="#job-detail" data-id="${newJob.id}">${newJob.title}</a> - ${newJob.company}`;
      jobList.appendChild(li);
  
      postJobForm.reset();
      alert('Job posted successfully!');
    });
  
    // Login Form
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email-input').value;
      const password = document.getElementById('password-input').value;
  
      alert(`Logged in with email: ${email}`);
      loginForm.reset();
    });
  
    // Apply for Job
    const applyBtn = document.getElementById('apply-btn');
    if (applyBtn) {
      applyBtn.addEventListener('click', () => {
        alert('Application submitted successfully!');
      });
    }
  });
  