import React from 'react'
import { iconAssets } from '@/datas/IconAssets'
import Logo from '@/components/Elements/Logo/Index';
import { Link } from 'react-router-dom';
import { menuItems } from '@/datas/MenuItem';

export const Sidebar: React.FC = () => {
  return (
    <>
        <div className="flex flex-col justify-between gap-16 bg-webstyle-secondary px-4 py-12 xl:px-7 xl:py-12 min-h-screen overflow-y-auto w-fit xl:w-[280px]">
                <div className="flex flex-col gap-10 w-full">
                    <div className="max-w-28">
                        <Logo className="text-webstyle-grey-0 w-full" />
                    </div>
                    <div className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                        <Link to={item.link} key={index} className={`hover:bg-white hover:bg-opacity-10 items-center justify-center xl:justify-start active:bg-webstyle-primary focus:bg-webstyle-primary flex gap-3 py-4 px-3 rounded w-full ${location.pathname == item.link ? "bg-webstyle-primary" : ""}`}>
                            <div>
                                <img src={item.icon} alt={item.title} loading="lazy" />
                            </div>
                            <h4 className="text-white font-semibold text-base hidden xl:block">{item.title}</h4>
                        </Link>
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
    </>
  )
}
