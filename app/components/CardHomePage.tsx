import { LineChart, Layers, BarChart3 } from "lucide-react";
import React from "react";

function CardHomePage() {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch ">
      <div className="bg-white shadow-blue-100 p-6 shadow-xl rounded-xl text-center flex flex-col justify-center">
        <LineChart
          size={56}
          className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white p-3 rounded-xl mx-auto"
        />
        <h1 className="mt-4 text-2xl text-blue-700 font-bold">
          Smart Analytics
        </h1>
        <p className="text-gray-600">
          Gain instant insights into your data trends.
        </p>
      </div>

      <div className="bg-white shadow-blue-100 p-6 shadow-xl rounded-xl text-center flex flex-col justify-center">
        <Layers
          size={56}
          className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white p-3 rounded-xl mx-auto"
        />
        <h1 className="mt-4 text-2xl text-blue-700 font-bold">
          Auto Categorization
        </h1>
        <p className="text-gray-600">
          Automatically group your expenses into smart categories.
        </p>
      </div>

      <div className="bg-white shadow-blue-100 p-6 shadow-xl rounded-xl text-center flex flex-col justify-center">
        <BarChart3
          size={56}
          className="bg-gradient-to-r from-blue-500 via-blue-400 to-blue-600 text-white p-3 rounded-xl mx-auto"
        />
        <h1 className="mt-4 text-2xl text-blue-700 font-bold">
          Financial Dashboard
        </h1>
        <p className="text-gray-600">
          Get a clear, visual overview of your finances at a glance.
        </p>
      </div>
    </div>
  );
}

export default CardHomePage;
