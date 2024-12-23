import CardGeneral from '@/components/Elements/Card/CardGeneral';
import { CardTitle } from '@/components/Elements/Card/CardTitle';
import { MainLayout } from '@/components/Layouts/MainLayout';
import React from 'react'
import { iconAssets } from '@/datas/IconAssets';
import { CardUpcomingBills } from '@/components/Elements/Card/CardUpcomingBills';
import { CardRecentTransaction } from '@/components/Elements/Card/CardRecentTransaction';
import { CardAccount } from '@/components/Elements/Card/CardAccount';

const DashboardPage: React.FC = () => {
    return (
        <>
            <MainLayout childern={
                <>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-4">
                        <CardGeneral title='Total Balance'>
                            <CardAccount />
                        </CardGeneral>
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                        <CardTitle cardTitle="Goals" cardText="Goal" />
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                    <CardGeneral title='Upcoming Bill'>
                        <CardUpcomingBills />
                    </CardGeneral>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-12 gap-5">
                    <div className="xl:col-span-4">
                        <CardGeneral title='Recent Transaction'>
                            <CardRecentTransaction />
                        </CardGeneral>
                    </div>
                    <div className="xl:col-span-8">
                       <div className="flex flex-col gap-6">
                        <CardGeneral title='Statistics'>
                            <div className="min-h-[228px]">statistics</div>
                        </CardGeneral>
                        <CardGeneral title='Expense Breakdown'>
                            <div className="grid grid-cols-12 gap-5">
                                <div className="col-span-4 flex gap-6 items-center">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-4 flex items-center min-w-14">
                                        <img src={iconAssets.housing} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="flex-flex-col">
                                        <h4 className="font-medium text-webstyle-grey-200 text-base">Housing</h4>
                                        <h3 className="font-bold text-xl">$250.00</h3>
                                        <div className="flex gap-2 items-center">
                                            <h6 className="text-webstyle-grey-300">15%*</h6>
                                            <img src={iconAssets.arrowUp} alt="" className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="min-w-12">
                                        <img src={iconAssets.arrowRight} alt="" className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-6 items-center">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-4 flex items-center min-w-14">
                                        <img src={iconAssets.housing} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="flex-flex-col">
                                        <h4 className="font-medium text-webstyle-grey-200 text-base">Housing</h4>
                                        <h3 className="font-bold text-xl">$250.00</h3>
                                        <div className="flex gap-2 items-center">
                                            <h6 className="text-webstyle-grey-300">15%*</h6>
                                            <img src={iconAssets.arrowUp} alt="" className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="min-w-12">
                                        <img src={iconAssets.arrowRight} alt="" className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-6 items-center">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-4 flex items-center min-w-14">
                                        <img src={iconAssets.housing} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="flex-flex-col">
                                        <h4 className="font-medium text-webstyle-grey-200 text-base">Housing</h4>
                                        <h3 className="font-bold text-xl">$250.00</h3>
                                        <div className="flex gap-2 items-center">
                                            <h6 className="text-webstyle-grey-300">15%*</h6>
                                            <img src={iconAssets.arrowUp} alt="" className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="min-w-12">
                                        <img src={iconAssets.arrowRight} alt="" className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-6 items-center">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-4 flex items-center min-w-14">
                                        <img src={iconAssets.housing} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="flex-flex-col">
                                        <h4 className="font-medium text-webstyle-grey-200 text-base">Housing</h4>
                                        <h3 className="font-bold text-xl">$250.00</h3>
                                        <div className="flex gap-2 items-center">
                                            <h6 className="text-webstyle-grey-300">15%*</h6>
                                            <img src={iconAssets.arrowUp} alt="" className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="min-w-12">
                                        <img src={iconAssets.arrowRight} alt="" className="w-6 h-6" />
                                    </div>
                                </div>
                                <div className="col-span-4 flex gap-6 items-center">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-4 flex items-center min-w-14">
                                        <img src={iconAssets.housing} alt="" className="w-full h-full" />
                                    </div>
                                    <div className="flex-flex-col">
                                        <h4 className="font-medium text-webstyle-grey-200 text-base">Housing</h4>
                                        <h3 className="font-bold text-xl">$250.00</h3>
                                        <div className="flex gap-2 items-center">
                                            <h6 className="text-webstyle-grey-300">15%*</h6>
                                            <img src={iconAssets.arrowUp} alt="" className="w-4 h-4" />
                                        </div>
                                    </div>
                                    <div className="min-w-12">
                                        <img src={iconAssets.arrowRight} alt="" className="w-6 h-6" />
                                    </div>
                                </div>
                            </div>
                        </CardGeneral>
                       </div>
                    </div>
                </div>
                </>
            }> 
            </MainLayout>
        </>
    )
}

export default DashboardPage;