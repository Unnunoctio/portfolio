# Portfolio Project

A personal portfolio website built with a modern tech stack, featuring a dynamic frontend and a headless CMS for content management.

## Tech Stack

This project is organized into two main parts:

### Frontend (`/frontend`)
- **Framework**: [Astro](https://astro.build/) (v5) - For fast, content-focused performance.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) (v4) - Utility-first CSS framework.
- **Interactivity**: [Alpine.js](https://alpinejs.dev/) - Lightweight JavaScript framework.
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)
- **Deployment**: [Vercel](https://vercel.com/)

### Studio (`/studio`)
- **CMS**: [Sanity.io](https://www.sanity.io/) - Unified Content Platform.
- **Framework**: React-based Sanity Studio.

## Project Structure

- `frontend/`: Contains the Astro application code.
- `studio/`: Contains the Sanity Studio configuration and schemas.

## Getting Started

### Prerequisites

- Node.js (v18 or later recommended)
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone <your-repository-url>
   cd portfolio
   ```

2. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   ```

3. **Install Studio Dependencies:**
   ```bash
   cd ../studio
   npm install
   ```

## Development

You can run both the frontend and the studio concurrently or separately.

### Running the Frontend
Navigate to the `frontend` directory and start the dev server:
```bash
cd frontend
npm run dev
```
The site will be available at `http://localhost:4321`.

### Running the Studio
Navigate to the `studio` directory and start the Sanity Studio:
```bash
cd studio
npm run dev
```
The studio will be available at `http://localhost:3333`.

## Environment Variables

You will need to set up environment variables for the frontend to connect to Sanity. Create a `.env` file in the `frontend` directory:

```env
PUBLIC_SANITY_PROJECT_ID=your_project_id
PUBLIC_SANITY_DATASET=production
```

## Deployment

### Frontend
The frontend is configured for deployment on Vercel. Connect your repository to Vercel and it should detect the Astro settings automatically.

### Studio
To deploy the Sanity Studio:
```bash
cd studio
npm run deploy
```
