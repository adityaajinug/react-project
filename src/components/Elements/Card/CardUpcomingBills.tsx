import axios from 'axios';
import React, { useEffect, useState } from 'react';
interface UpcomingBill {
    id: number;
    name: string;
    description: string;
    logo: string;
    date: string;
    month: string;
    lastCharge: string;
    amount: number;
}
export const CardUpcomingBills: React.FC= () => {
    const [upcomingData, setUpcomingData] = useState<UpcomingBill[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'short', year: 'numeric' };
        return new Intl.DateTimeFormat('en-US', options).format(date);
    };

      useEffect(() => {
        const fetchData = async () => {
          try {
            const refreshToken = localStorage.getItem("refreshToken");
            const response = await axios.get("https://jwt-auth-eight-neon.vercel.app/bills", {
              headers: {
                Authorization: `Bearer ${refreshToken}`,
              },
            });
            
            if (response.data && Array.isArray(response.data.data)) {
                console.log('data upcoming', response.data.data);
                setUpcomingData(response.data.data);
            } else {
                console.error("Error: Response data structure is invalid.");
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          } finally {
            setIsLoading(false);
          }
        };
    
        fetchData();
      }, []);
      const ShimmerLoading: React.FC = () => (
        <div className="flex justify-between items-center py-3 border-b border-solid border-[#F3F3F3]">
          <div className="flex gap-4">
            <div className="flex flex-col gap-1 bg-webstyle-addon-special px-3 items-center justify-center rounded-lg">
              <div className="w-10 h-6 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-8 h-8 bg-gray-200 animate-pulse rounded"></div>
            </div>
            <div className="flex flex-col gap-1">
              <div className="w-16 h-3 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-24 h-5 bg-gray-200 animate-pulse rounded"></div>
              <div className="w-32 h-4 bg-gray-200 animate-pulse rounded"></div>
            </div>
          </div>
          <div className="rounded-lg border border-solid border-webstyle-100 p-4 h-fit">
            <div className="w-16 h-5 bg-gray-200 animate-pulse rounded"></div>
          </div>
        </div>
      );
  return (
    <>
         <div className="flex flex-col">
            {isLoading
                ? Array.from({ length: 2 }, (_, index) => <ShimmerLoading key={index} />)
                : upcomingData.map((item) => (
                    <div
                        key={item.id}
                        className="flex justify-between items-center py-3 border-b border-solid border-[#F3F3F3]"
                    >
                        <div className="flex gap-4">
                            <div className="flex flex-col gap-1 bg-webstyle-addon-special px-3 items-center justify-center rounded-lg">
                                <h6 className="text-webstyle-grey-300 font-medium">{item.month}</h6>
                                <h3 className="font-extrabold text-2xl">{item.date}</h3>
                            </div>
                            <div className="flex flex-col gap-1">
                                <h3 className="text-base font-semibold text-webstyle-grey-300">{item.name}</h3>
                                <p className="text-sm text-webstyle-grey-200">
                                    Last charge - {formatDate(item.lastCharge)}
                                </p>
                            </div>
                        </div>
                        <div className="rounded-lg border border-solid border-webstyle-100 p-4 h-fit">
                            <h3 className="text-base font-semibold">${item.amount}</h3>
                        </div>
                    </div>
                ))}
        </div>
    </>
  )
}
