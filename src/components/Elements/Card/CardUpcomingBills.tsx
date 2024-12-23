import React from 'react';
import { upcomingData } from '@/datas/UpcomingBills';

export const CardUpcomingBills: React.FC= () => {
    const formatDate = (date: string) => {
        const options: Intl.DateTimeFormatOptions = { month: 'short', day: 'numeric' };
        const formattedDate = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
        const [month, day] = formattedDate.split(' ');
        return { month, day };
      };
  return (
    <>
        <div className="flex flex-col">
            {upcomingData.map((item, index) => {
                const { month, day } = formatDate(item.date);
                return (
                <div
                    key={index}
                    className="flex justify-between items-center py-3 border-b border-solid border-[#F3F3F3]"
                >
                    <div className="flex gap-4">
                    <div className="flex flex-col gap-1 bg-webstyle-addon-special px-3 items-center justify-center rounded-lg">
                        <h6 className="text-webstyle-grey-300 font-medium">{month}</h6>
                        <h3 className="font-extrabold text-2xl">{day}</h3>
                    </div>
                    <div className="flex flex-col gap-1">
                        <img src={item.icon} alt="icon" className="max-h-24 max-w-24" />
                        <h3 className="text-base font-semibold text-webstyle-grey-300">
                        {item.status}
                        </h3>
                        <p className="text-sm font-medium text-webstyle-grey-200">{item.status}</p>
                    </div>
                    </div>
                    <div className="rounded-lg border border-solid border-webstyle-100 p-4 h-fit">
                    <h3 className='text-base font-semibold'>{item.pricing}</h3>
                    </div>
                </div>
                );
            })}
        </div>
    </>
  )
}
