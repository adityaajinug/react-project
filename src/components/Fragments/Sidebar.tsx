import React, { useContext } from 'react'
import { iconAssets } from '@/datas/IconAssets'
import Logo from '@/components/Elements/Logo/Index';
import { Link, useNavigate } from 'react-router-dom';
import { menuItems } from '@/datas/MenuItem';
import { ThemeContext } from '@/context/ThemeContext';
import { useAuth } from '@/context/AuthContext';
import axios from 'axios';
import { useNotif } from '@/context/NotifContext';

interface Theme {
    name: string;
    bgcolor: string;
    color: string;
}
export const Sidebar: React.FC = () => {
    const themes: Theme[] = [
        { name: "theme-green", bgcolor: "bg-[#299D91]", color: "#299D91" },
        { name: "theme-blue", bgcolor: "bg-[#1E90FF]", color: "#1E90FF" },
        { name: "theme-purple", bgcolor: "bg-[#6A5ACD]", color: "#6A5ACD" },
        { name: "theme-pink", bgcolor: "bg-[#DB7093]", color: "#DB7093" },
        { name: "theme-brown", bgcolor: "bg-[#8B4513]", color: "#8B4513" },
      ];
      
        const context = useContext(ThemeContext);

        if (!context) {
            throw new Error("ThemeContext must be used within a ThemeContextProvider");
        }
    
        const { theme, setTheme } = context;
        const { name, logout } = useAuth();
        const navigate = useNavigate();
        const { setMsg, setOpen, setIsLoading } = useNotif();

        const handleLogout = async () => {
            setIsLoading(true);
            const refreshToken = localStorage.getItem("refreshToken");
        
            if (!refreshToken) {
              console.error("No refresh token found");
              return;
            }
        
            try {
              await axios.get("https://jwt-auth-eight-neon.vercel.app/logout", {
                headers: {
                  Authorization: `Bearer ${refreshToken}`,
                },
              });
              setIsLoading(false);
              setOpen(true);
              setMsg({
                severity: "success", 
                message: "Logout successful",
                desc: "You have successfully logged out.",
              });
              logout();
              localStorage.removeItem("refreshToken");
              navigate("/");
            } catch (error) {
              console.error("Logout failed:", error);
            }
          };
  return (
    <>
        <div className={`flex flex-col justify-between gap-16 bg-webstyle-secondary ${theme.name} px-4 py-12 xl:px-7 xl:py-12 min-h-screen overflow-y-auto w-fit xl:w-[380px]`}>
                <div className="flex flex-col gap-10 w-full">
                    <div className="max-w-28">
                        <Logo className="text-webstyle-primary w-full" />
                    </div>
                    <div className="flex flex-col gap-4">
                    {menuItems.map((item, index) => (
                        <Link to={item.link} key={index} className={`hover:bg-white hover:bg-opacity-10 items-center transition-transform duration-150 active:scale-95 justify-center xl:justify-start active:bg-webstyle-primary focus:bg-webstyle-primary flex gap-3 py-4 px-3 rounded w-full ${location.pathname == item.link ? "bg-webstyle-primary" : ""}`}>
                            <div>
                                <img src={item.icon} alt={item.title} loading="lazy" />
                            </div>
                            <h4 className="text-white font-semibold text-base hidden xl:block">{item.title}</h4>
                        </Link>
                    ))}
                    </div>
                    <div className="flex gap-2 items-center h-full w-full flex-wrap">
                        <h5 className='text-white text-base font-semibold'>Themes</h5>
                        {themes.map((item, index) => (
                            <button type='button'
                            key={index}
                            className={`${item.bgcolor} w-8 h-6 rounded-md cursor-pointer transition-transform duration-150 active:scale-95`}
                            onClick={() => setTheme(item)}
                            ></button>
                        ))}
                    </div>
                </div>

                
                <div className="flex flex-col gap-11">
                    <button type='button' onClick={() => handleLogout()} className="flex items-center justify-center xl:justify-start gap-3 py-4 px-3 bg-opacity-10 rounded bg-white hover:bg-gray-700">
                        <div>
                            <img src={iconAssets.logout} alt="logout" loading="lazy" />
                        </div>
                        <h4 className="text-white font-semibold text-base hidden xl:block">Logout</h4>
                    </button>

                    <div className="border-t py-8 border-white border-opacity-5 flex justify-center xl:justify-between items-center">
                        <div className="max-w-8 max-h-8">
                            <img src={iconAssets.profile} alt="profile" loading="lazy"/>
                        </div>
                        <div className="xl:flex hidden flex-col">
                            <h4 className="font-semibold text-webstyle-grey-0">{ name || "John Doe" }</h4>
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
