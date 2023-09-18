import React from 'react'
import CustomizedTables from './CustomTable'

export const MainYield = () => {
  return (
    <>
        <CustomizedTables title="Final Advised Rates" />
        <CustomizedTables title="Overall Pace" />
        <CustomizedTables title="Today vs YearAgo" />
    </>
  )
}
