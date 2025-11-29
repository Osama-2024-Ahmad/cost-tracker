
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl text-center">

        <div className="space-y-8 text-xl text-gray-600 leading-relaxed">
          <p className="text-center max-w-3xl mx-auto mb-6">
            Tracker Cost AI is a revolutionary expense tracking application designed to transform how you manage your personal and business finances. Our intelligent system combines cutting-edge artificial intelligence with user-friendly design to deliver a comprehensive financial management solution.
          </p>
          <p className="text-center max-w-3xl mx-auto mb-6">
            Our platform automatically categorizes your expenses, tracks spending patterns, and provides actionable insights to help you optimize your budget. With intuitive dashboards and detailed reports, you'll gain complete visibility into where your money goes and identify opportunities for savings.
          </p>
          <p className="text-center max-w-3xl mx-auto">
            Whether you're managing household expenses, tracking business costs, or planning for future investments, Tracker Cost AI adapts to your unique financial needs. Our commitment is to empower you with the tools and knowledge to make confident, data-driven financial decisions every day.
          </p>
        </div>
      </div>
    </div>
  );
}
