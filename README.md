# QUT IFN636 Assessment 1 – Homework Submission Portal

This repository contains a frontend-only prototype for the QUT IFN636 Assessment 1 homework submission portal. It is designed to demonstrate a mock student assignment upload workflow and lecturer submission register using React and Vite, with no backend, database, or external services.

## Setup

1. Change into the frontend project folder:
   `cd frontend`
2. Install dependencies:
   `npm install`
3. Start the development server:
   `npm run dev`

## Architecture summary

The project is built with React and Vite and uses modular functional components for the interface. The main structure includes:
- App for role switching between student and lecturer views
- Navbar for the portal header and navigation context
- StudentPortal for the assignment brief and client-side PDF submission validation
- LecturerPortal for the class submission register and assessment state
- mockData for the mock assignments, student, lecturer, and submission records
- Client-side validation rules enforce the PDF-only, size-limited upload flow entirely in the browser
- No backend is used, so the app is a static mock prototype only

## Known limitations

- No persistence between sessions or page refreshes
- Submission success is simulated in the browser only
- All user and assignment data is mock data, not live institutional data
- No authentication or authorisation flow is implemented
- Lecturer pagination controls are visual-only, and filtered table results do not update the displayed total-record count.

## Deployment

EC2 public URL: <to be filled in after deployment>