import React from 'react'
import { MdOutlineCalendarToday, MdBarChart } from 'react-icons/md'
import Card from '@pages/admin/components/card'
import LineChart from '@pages/admin/components/charts/LineChart'
import { getChartConfig } from '@pages/admin/variables/chartConfig'

const TotalSpent = ({ data }) => {
  const { lineChartOptionsTotalSpent, lineChartDataTotalSpent } = getChartConfig(data || [])

  return (
    <Card extra='!p-[20px] text-center'>
      <div className='flex justify-between'>
        <button className='linear mt-1 flex items-center justify-center gap-2 rounded-lg bg-lightPrimary p-2 text-gray-600 transition duration-200 hover:cursor-pointer hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:hover:opacity-90 dark:active:opacity-80'>
          <MdOutlineCalendarToday />
          <span className='text-sm font-medium text-gray-600'>Month:</span>
        </button>
        <button className='!linear z-[1] flex items-center justify-center rounded-lg bg-lightPrimary p-2 text-brand-500 !transition !duration-200 hover:bg-gray-100 active:bg-gray-200 dark:bg-navy-700 dark:text-white dark:hover:bg-white/20 dark:active:bg-white/10'>
          <MdBarChart className='h-6 w-6' />
        </button>
      </div>
      <div className='flex h-full w-full flex-row justify-between sm:flex-wrap lg:flex-nowrap 2xl:overflow-hidden'>
        <div className='h-full w-full'>
          <LineChart options={lineChartOptionsTotalSpent} series={lineChartDataTotalSpent} />
        </div>
      </div>
    </Card>
  )
}

export default TotalSpent
