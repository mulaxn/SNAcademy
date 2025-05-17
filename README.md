# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


## 🌐 Live Demo

Access the site here 👉 [snacademy-website](http://snacademy-website.s3-website-us-east-1.amazonaws.com)

This project is fully deployed using free-tier AWS services, with the following stack:
🔧 Backend

    Framework: Node.js with GraphQL API

    Deployment: AWS Elastic Beanstalk (t2.micro instance)

    Environment Variables: Configured with eb setenv to connect to the database

    Hosting URL: Elastic Beanstalk-generated domain (e.g., http://snacademy-backend-env.eba-xxxxx.us-east-2.elasticbeanstalk.com)

🌐 Frontend

    Framework: React (Vite)

    Build: npm run build

    Deployment: AWS S3 static website hosting

    Public URL: snacademy-website

    Bucket Policy: Configured for public read access

    Static Hosting Enabled: Set index document and error document in S3 settings

🗄️ Database

    Engine: PostgreSQL

    Hosting: AWS RDS (free-tier eligible)

    Connection: Backend reads DB credentials via Elastic Beanstalk environment variables

🔁 Update Workflow
🖼️ For Frontend Changes:

    Run npm run build to generate updated dist/ files.

    Upload the contents of the dist/ folder to your S3 bucket (overwrite existing).

    Your static site will reflect changes immediately.

⚙️ For Backend Changes:

    Make your code updates in the backend/ folder.

    Run:

    eb deploy

    Elastic Beanstalk will redeploy with the new code.

🧱 If You Add a New Table (DB Schema Change):

    Connect to your RDS PostgreSQL using psql or a DB tool (like DBeaver).

    Run the appropriate CREATE TABLE SQL command.

    Update your backend resolvers/schemas to reflect the new model.

    Then run eb deploy again if code was modified
