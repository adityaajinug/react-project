import { Sidebar } from '@/components/Fragments/Sidebar';
import { TopBar } from '@/components/Fragments/TopBar';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

interface MainLayoutProps {
    childern: React.ReactNode
}
export const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const {childern} = props
    const {theme} = useContext(ThemeContext)
  return (
    <>
        <div className={`flex min-w-full ${theme.name}`}>
            <Sidebar />
            
           <div className="flex flex-col gap-4 w-full">
                <TopBar />
                <div className="px-8 py-5">
                    {childern}
                </div>
           </div>

           
        </div>
    </>
  )
}
