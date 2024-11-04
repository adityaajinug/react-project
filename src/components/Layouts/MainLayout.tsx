import Logo from '@/components/Elements/Logo/Index'
import React from 'react'
import { iconAssets } from '@/datas/IconAssets'
import { MenuItem } from '@/types/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
export const MainLayout: React.FC = () => {
    const menuItems: MenuItem[] = [
        { icon: iconAssets.overview, title: "Overview" },
        { icon: iconAssets.ballance, title: "Balances" },
        { icon: iconAssets.transaction, title: "Transactions" },
        { icon: iconAssets.billing, title: "Bills" },
        { icon: iconAssets.expenses, title: "Expenses" },
        { icon: iconAssets.goal, title: "Goals" },
        { icon: iconAssets.setting, title: "Settings" },
    ];
  return (
    <>
        <div className="flex min-w-full">
            <div className="flex flex-col justify-between gap-16 bg-webstyle-secondary px-4 py-12 xl:px-7 xl:py-12 min-h-screen overflow-y-auto w-fit xl:w-[280px]">
                <div className="flex flex-col gap-10 w-fit">
                    <div className="max-w-28">
                        <Logo className="text-webstyle-grey-0 w-full" />
                    </div>
                    <div className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                        <a href="#" key={index} className="hover:bg-white hover:bg-opacity-10 items-center justify-center xl:justify-start active:bg-webstyle-primary flex gap-3 py-4 px-3 rounded">
                            <div>
                                <img src={item.icon} alt={item.title} loading="lazy" />
                            </div>
                            <h4 className="text-white font-semibold text-base hidden xl:block">{item.title}</h4>
                        </a>
                    ))}
                    </div>
                </div>
                
                <div className="flex flex-col gap-11">
                    <a href="#" className="flex items-center justify-center xl:justify-start gap-3 py-4 px-3 bg-opacity-10 rounded bg-white">
                        <div>
                            <img src={iconAssets.logout} alt="logout" loading="lazy" />
                        </div>
                        <h4 className="text-white font-semibold text-base hidden xl:block">Logout</h4>
                    </a>

                    <div className="border-t py-8 border-white border-opacity-5 flex justify-center xl:justify-between items-center">
                        <div className="max-w-8 max-h-8">
                            <img src={iconAssets.profile} alt="profile" loading="lazy"/>
                        </div>
                        <div className="xl:flex hidden flex-col">
                            <h4 className="font-semibold text-webstyle-grey-0">Tanzir Rahman</h4>
                            <a href="#" className="text-white text-opacity-50 hover:text-white">View profile</a>
                        </div>
                        <a href="#" className="max-w-6 hidden xl:block">
                            <img src={iconAssets.bullets} alt="icon bullets" />
                        </a>
                    </div>
                </div>
            </div>
            
           <div className="flex flex-col gap-4 w-full">
                <div className="px-8 py-5 flex justify-between border-b border-gray-300 w-full h-fit">
                        <div className="flex gap-6 items-center">
                            <h1 className="font-bold text-2xl">Hello Tanzir</h1>
                            <p className="">May 19, 2023</p>
                        </div>
                        <div className="flex items-center gap-10">
                            <FontAwesomeIcon icon={faBell}/>
                            <form action="#">
                                <div className="bg-white shadow-md rounded-md">
                                    <input type="text" placeholder="Search" className="px-6 py-3 border-none outline-none" />

                                </div>
                            </form>
                        </div>

                </div>
                <div className="px-8 py-5">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12 xl:col-span-4">
                            <div className="shadow-lg px-5 py-6 w-full">
                                Deskripsi 1
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="shadow-lg px-6 py-6 w-full">
                                Deskripsi 1
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="shadow-lg px-5 py-6 w-full">
                                Deskripsi 1
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="shadow-lg px-5 py-6 w-full">
                                Deskripsi 1
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="shadow-lg px-5 py-6 w-full">
                                Deskripsi 1
                            </div>
                        </div>
                        <div className="col-span-12 xl:col-span-4">
                            <div className="shadow-lg px-5 py-6 w-full">
                                Deskripsi 1
                            </div>
                        </div>
                    </div>
                </div>
           </div>

           
        </div>
    </>
  )
}
