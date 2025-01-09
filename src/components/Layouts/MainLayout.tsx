import { SimpleBackdrop } from '@/components/Elements/Backdrop/SimpleBackdrop';
import { Notify } from '@/components/Elements/SnakeBar/Notify';
import { Sidebar } from '@/components/Fragments/Sidebar';
import { TopBar } from '@/components/Fragments/TopBar';
import { useBackgroundTheme } from '@/context/BackgroundThemeContext';
import { useNotif } from '@/context/NotifContext';
import { ThemeContext } from '@/context/ThemeContext';
import { useContext } from 'react';

interface MainLayoutProps {
    childern: React.ReactNode
}
export const MainLayout: React.FC<MainLayoutProps> = (props) => {
    const {childern} = props
    const {theme} = useContext(ThemeContext)
    const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useNotif();
    const { backgroundTheme} = useBackgroundTheme();
      
    const handleCloseSnackbar = () => {
      setOpen(false);
      setMsg(undefined);
    };
  return (
    <>
        <div className="w-full max-w-full">
                {isLoading && (
                    <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
                )}
                {msg && (
                    <Notify
                        openSnackbar={open}
                        snackbarSeverity={msg?.severity || "success"}
                        snackbarMessage={msg?.desc || 'success'}
                        onClose={handleCloseSnackbar}
                    />
                )}
        </div>
        <div className={`flex min-w-full ${theme.name}`}>
            <Sidebar />
            
           <div className={`flex flex-col gap-4 w-full ${backgroundTheme.color}`}>
                <TopBar />
                <div className="px-8 py-5">
                    {childern}
                </div>
           </div>

           
        </div>
    </>
  )
}
