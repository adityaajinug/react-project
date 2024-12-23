import { iconAssets } from '@/datas/IconAssets'
import React from 'react'
import { goalsData } from '@/datas/GoalsDatas'
import GaugeChart from '@/components/Elements/Chart/GaugeChart'

export const CardGoals: React.FC = () => {
    const chartValue: number = (goalsData.presentAmount * 100) / goalsData.targetAmount;
  return (
    <>
        <div className="flex justify-between py-2 border-b border-solid border-[#F3F3F3]">
           <div className="flex gap-2 items-center">
            <h1 className='font-bold text-xl'>$20,000</h1>
            <div className='flex items-center justify-center w-8 h-8 rounded-sm border bg-webstyle-grey-100 cursor-pointer'>
                <img src={iconAssets.edit} alt="" />
            </div>
           </div>
           <h3 className='text-webstyle-grey-200'>May, 2023</h3>
        </div>

        <div className="mt-5 flex gap-4 justify-between">
            <div className="flex flex-col gap-6 w-full">
                <div className="flex gap-2 items-start">
                    <img src={iconAssets.award} alt="award" />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-lg font-normal'>Target Achieved</h4>
                        <h2 className='font-bold text-xl'>${goalsData.presentAmount.toLocaleString()}</h2>
                    </div>
                </div>  
                <div className="flex gap-2 items-start">
                    <img src={iconAssets.target} alt="target" />
                    <div className='flex flex-col gap-2'>
                        <h4 className='text-lg font-normal'>This month Target</h4>
                        <h2 className='font-bold text-xl'>${goalsData.targetAmount.toLocaleString()}</h2>
                    </div>
                </div>  
            </div>

            <div className='flex flex-col gap-3'>
            <GaugeChart desc={chartValue} />
                <div className='flex flex-col gap-3'>
                    <div className="flex justify-between">
                        <span className="text-gray-400">$0</span>
                        <span className="font-bold">12K</span>
                        <span className="text-gray-400">$20K</span>
                    </div>
                    <h1 className='font-semibold text-center'>Target vs Achievement</h1>
                </div>
            </div>
        </div>
    </>
  )
}