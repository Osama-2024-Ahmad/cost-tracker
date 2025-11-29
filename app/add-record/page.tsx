"use client"
import React, { useState } from 'react'
import UserInfo from '../components/UserInfo'
import AddNewRecord from '../components/AddNewRecord'
import RecordChart from '../components/RecordChart'
import ExpenseStats from '../components/ExpenseStats'
import AIInsights from '../components/AIInsights'

function page() {
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 max-w-6xl mx-auto mt-20 gap-5'>

      <UserInfo />
      <AddNewRecord onRecordAdded={() => setRefreshTrigger(prev => prev + 1)} />

      <RecordChart refreshTrigger={refreshTrigger} />
      <ExpenseStats refreshTrigger={refreshTrigger} />

      <AIInsights refreshTrigger={refreshTrigger} />

    </div>
  )
}

export default page