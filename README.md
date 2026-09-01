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

## Setup instructions
- Prerequisites: Node.js LTS and npm
- Install: cd frontend && npm install
- Run locally: npm run dev
- Lint: npm run lint (uses oxlint)
- Production build: npm run build (output in frontend/dist)
- Preview the build: npm run preview

## Known limitations
- Frontend-only prototype: mock data only, no backend, no database, no authentication, no file storage
- The lecturer pagination bar is visual only; it shows static text ("Page 1 of 8") and does not change pages
- The site is served over HTTP on port 80. The browser may show an "insecure download" warning for the CSV export. This is an HTTP/TLS limitation, not a defect
- The EC2 instance uses an auto-assigned public IPv4 address, which changes if the instance stops
