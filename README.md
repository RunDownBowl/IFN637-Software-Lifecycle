## Deployment

The frontend-only QUT Submission Portal prototype is deployed manually on an AWS EC2 Ubuntu instance.

**Public URL:** http://3.26.53.10

The deployment serves the Vite production build from `frontend/dist` through nginx.

### Prototype limitations

- The application has no backend, database, authentication, login page, or persistent account data.
- The Student Portal accepts one PDF file per simulated submission and validates files locally in the browser.
- The supported maximum file size is 10 MB.
- The Lecturer Portal uses mock data and can export a CSV file.
- The deployment currently uses HTTP. Therefore, browsers can show an insecure-download warning for the exported CSV. The file is generated successfully, but HTTPS/TLS setup is outside this frontend-only prototype scope.