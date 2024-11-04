import Logo from '@/components/Elements/Logo/Index'
import React from 'react'
import { iconAssets } from '@/datas/IconAssets'
import { MenuItem } from '@/types/menu'

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
        <div className="flex gap-6">
            <div className="flex flex-col justify-between gap-16 bg-webstyle-secondary px-4 py-12 xl:px-7 xl:py-12 min-h-screen overflow-y-auto w-fit">
                <div className="flex flex-col gap-10">
                    <Logo className="text-webstyle-grey-0 max-w-28 xl:max-w-[224px]" />
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
            
            <div className="px-8 py-5">

            </div>
        </div>
    </>
  )
}
