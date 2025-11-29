# Tracker AI

<div align="center">
  <img src="https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
  <img src="https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
</div>

## Description

Tracker AI is an intelligent expense tracking application that transforms financial management through AI-powered categorization and insightful analytics. This comprehensive solution combines cutting-edge artificial intelligence with an intuitive design to help users optimize their budgets and make data-driven financial decisions.

## Features

- 🤖 **AI-Powered Categorization**: Automatically categorize expenses using advanced machine learning algorithms
- 📊 **Interactive Dashboards**: Visualize spending patterns with beautiful, responsive charts and graphs
- 💡 **Smart Insights**: Receive personalized recommendations to optimize your financial habits
- 🔒 **Secure Authentication**: JWT-based authentication system to protect your financial data
- 📱 **Responsive Design**: Fully responsive interface that works seamlessly on all devices
- 🌙 **Dark Mode**: Toggle between light and dark themes for comfortable viewing in any environment
- 📈 **Trend Analysis**: Track spending trends over time to identify patterns and opportunities
- 🎯 **Budget Management**: Set and monitor budget goals with real-time notifications
- 📤 **Export Reports**: Generate detailed financial reports in multiple formats

## Screenshots

### Dashboard Overview
![Dashboard](screenshots/dashboard.png)
*Main dashboard showing expense tracking form, charts, and statistics*

### AI-Powered Insights
![AI Insights](screenshots/ai-insights.png)
*Smart financial insights and recommendations powered by AI*

### Expense Analytics
![Expense Analytics](screenshots/expense-analytics.png)
*Detailed expense analytics with comprehensive spending breakdowns*

## Tech Stack

### Frontend

- **Next.js** - React framework for server-side rendering and routing
- **React** - User interface library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Data visualization library

### Backend

- **Node.js** - JavaScript runtime environment
- **MongoDB** - NoSQL database for data storage
- **Prisma** - Modern database toolkit for better database management
- **Clerk** - Complete user management UI for authentication and sign up

## Getting Started

### Prerequisites

- Node.js (v20.9 or higher )
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/osama-2024-ahmad/tracker-ai.git
   cd tracker-ai
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Configure the following environment variables in your `.env.local` file:

   ```
   # Database Connection (PostgreSQL with Prisma)
   DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"

   # Clerk Authentication
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
   NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
   NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
   NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

   # OpenRouter AI API
   OPENROUTER_API_KEY=your_openrouter_api_key
   ```

4. Initialize Prisma and apply migrations:

   ```bash
   npx prisma generate
   npx prisma db push
   ```

5. Run the development server:

   ```bash
   npm run dev
   ```

   This command starts the Next.js development server on port 3000.

6. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

7. To create a production build:

   ```bash
   npm run build
   npm start
   ```

## Usage

1. Create an account or log in to your existing account.
2. Start adding Records and view your expenses organized by categories on the dashboard.
3. After Recording, track your progress and see AI financial analysis.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

Project Link: [https://github.com/yourusername/tracker-ai](https://github.com/yourusername/tracker-ai)

## Acknowledgements

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://reactjs.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Chart.js Documentation](https://www.chartjs.org/docs/latest/)
