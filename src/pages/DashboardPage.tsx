import CardGeneral from '@/components/Elements/Card/CardGeneral';
import { CardTitle } from '@/components/Elements/Card/CardTitle';
import { MainLayout } from '@/components/Layouts/MainLayout';
import React from 'react'
import { iconAssets } from '@/datas/IconAssets';

const DashboardPage: React.FC = () => {
    return (
        <>
            <MainLayout childern={
                <>
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-4">
                        <CardGeneral title='Total Balance'>
                            <div className="flex justify-between items-center py-3 border-b border-[#F3F3F3]">
                                <h2 className="text-xl font-extrabold">$240,399</h2>
                                <p className="text-base text-webstyle-grey-200">All Accounts</p>
                            </div>
                            <div className="bg-webstyle-primary rounded-md p-4 flex justify-between items-center mt-3">
                                <div className="flex flex-col">
                                    <h5 className="text-webstyle-addon-white75 text-base">Account type</h5>
                                    <h3 className="text-white text-2xl font-bold">Credit Card</h3>
                                    <p className="text-webstyle-addon-white75 text-base">**** **** **** 2598</p>
                                </div>
                                <div className="flex flex-col gap-3 justify-end items-end">
                                    <img src={iconAssets.mastercard} alt="mastercard" loading="lazy" className="w-20 " />
                                    <div className="flex gap-3">
                                        <h4 className="text-white text-3xl font-semibold">$25000</h4>
                                        <img src={iconAssets.arrowMasterCard}/>
                                    </div>
                                </div>
                            </div>
                        </CardGeneral>
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                        <CardTitle cardTitle="Goals" cardText="Goal" />
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                    <CardGeneral title='Upcoming Bill'>
                            <div className="flex flex-col">
                                <div className="flex justify-between items-center py-3 border-b border-solid border-[#F3F3F3]">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-1 bg-webstyle-addon-special px-3 items-center justify-center rounded-lg">
                                            <h6 className="text-webstyle-grey-300 font-medium">May</h6>
                                            <h3 className="font-extrabold text-2xl">15</h3>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3>icon</h3>
                                            <h3 className="text-base font-semibold text-webstyle-grey-300">Figma - Monthly</h3>
                                            <p className="text-sm font-medium text-webstyle-grey-200">Last Charge - 14 May, 2022</p>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border border-solid border-webstyle-100 p-4 h-fit">
                                        $150
                                    </div>
                                </div>
                                <div className="flex justify-between items-center py-3 border-b border-solid border-[#F3F3F3]">
                                    <div className="flex gap-4">
                                        <div className="flex flex-col gap-1 bg-webstyle-addon-special px-3 items-center justify-center rounded-lg">
                                            <h6 className="text-webstyle-grey-300 font-medium">May</h6>
                                            <h3 className="font-extrabold text-2xl">16</h3>
                                        </div>
                                        <div className="flex flex-col gap-1">
                                            <h3>icon</h3>
                                            <h3 className="text-base font-semibold text-webstyle-grey-300">Adobe - Yearly</h3>
                                            <p className="text-sm font-medium text-webstyle-grey-200">Last Charge - 17 Jun, 2023</p>
                                        </div>
                                    </div>
                                    <div className="rounded-lg border border-solid border-webstyle-100 p-4 h-fit">
                                    $559
                                    </div>
                                </div>
                            </div>
                        </CardGeneral>
                    </div>
                </div>
                <div className="grid grid-cols-12 mt-12 gap-5">
                    <div className="xl:col-span-4">
                        <CardGeneral title='Recent Transaction'>
                            <div className="flex gap-5 mb-3">
                                <button type="button">All</button>
                                <button type="button">Revenue</button>
                                <button type="button">Expenses</button>
                            </div>
                            <div className="py-6 flex justify-between border-b border-solid border-[#F3F3F3]">
                                <div className="flex gap-4">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-1 flex items-center">
                                        <img src={iconAssets.gamepad} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-xl">GTR 5</h3>
                                        <p className="text-webstyle-grey-200">Gadget & Gear</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-xl text-webstyle-grey-400">$160.00</h3>
                                    <p className="text-webstyle-grey-200">17 May 2023</p>
                                </div>
                            </div>
                            <div className="py-6 flex justify-between border-b border-solid border-[#F3F3F3]">
                                <div className="flex gap-4">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-1 flex items-center">
                                        <img src={iconAssets.shopping} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-xl">Polo Shirt</h3>
                                        <p className="text-webstyle-grey-200">XL fashions</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-xl text-webstyle-grey-400">$20.00</h3>
                                    <p className="text-webstyle-grey-200">17 May 2023</p>
                                </div>
                            </div>
                            <div className="py-6 flex justify-between border-b border-solid border-[#F3F3F3]">
                                <div className="flex gap-4">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-1 flex items-center">
                                        <img src={iconAssets.food} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-xl">Biriyani</h3>
                                        <p className="text-webstyle-grey-200">Hajir Biriyani</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-xl text-webstyle-grey-400">$10.00</h3>
                                    <p className="text-webstyle-grey-200">17 May 2023</p>
                                </div>
                            </div>
                            <div className="py-6 flex justify-between border-b border-solid border-[#F3F3F3]">
                                <div className="flex gap-4">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-1 flex items-center">
                                        <img src={iconAssets.shopping} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-xl">Taxi Fare</h3>
                                        <p className="text-webstyle-grey-200">Uber</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-xl text-webstyle-grey-400">$12.00</h3>
                                    <p className="text-webstyle-grey-200">17 May 2023</p>
                                </div>
                            </div>
                            <div className="py-6 flex justify-between border-b border-solid border-[#F3F3F3]">
                                <div className="flex gap-4">
                                    <div className="rounded-lg bg-webstyle-addon-special px-2 py-1 flex items-center">
                                        <img src={iconAssets.shopping} alt="" />
                                    </div>
                                    <div className="flex flex-col">
                                        <h3 className="font-semibold text-xl">Keyboard</h3>
                                        <p className="text-webstyle-grey-200">Gadget & Gear</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <h3 className="font-semibold text-xl text-webstyle-grey-400">$22.00</h3>
                                    <p className="text-webstyle-grey-200">17 May 2023</p>
                                </div>
                            </div>
                        </CardGeneral>
                    </div>
                    <div className="xl:col-span-8">
                       <div className="flex flex-col gap-6">
                        <CardGeneral title='Statistics'>
                            <div className="min-h-[228px]">statistics</div>
                        </CardGeneral>
                        <CardGeneral title='Expense Breakdown'>
                            <div className="grid grid-cols-12 gap-4">
                                <div className="col-span-4">
                                    
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