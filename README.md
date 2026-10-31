# AttendaFlow — Attendance Management Prototype

A React + TypeScript attendance-management web prototype developed with Vite, Tailwind CSS, shadcn/ui components, and Supabase integration.

## Technology

- React and TypeScript for the browser interface
- Vite for local development and builds
- Tailwind CSS and shadcn/ui for interface components
- Supabase client integration
- ESLint for static code checks

## Run locally

```bash
npm install
npm run dev
```

Useful commands: `npm run build`, `npm run lint`, and `npm run preview`.

## Environment settings

Create a local `.env` with the Supabase project configuration if required. Vite variables prefixed `VITE_` are visible to users of the web application: only use publishable keys and never put private credentials into frontend variables. Configure row-level security and database policies before connecting real data.

## Status

Portfolio prototype. The presence of deployment configuration or a website URL does not guarantee current uptime, secure access control, or production readiness.

**Related:** [ClassLens](https://github.com/Harshad8623/Vision-Based-Attendance-System) — a separate attendance project with a Python/FastAPI backend.

**Author:** [Harshad Madhav Dhuppe](https://github.com/Harshad8623)
