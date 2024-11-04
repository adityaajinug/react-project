import { Sidebar } from '@/components/Fragments/Sidebar';
import { TopBar } from '@/components/Fragments/TopBar';
export const MainLayout: React.FC = () => {
  return (
    <>
        <div className="flex min-w-full">
            <Sidebar />
            
           <div className="flex flex-col gap-4 w-full">
                <TopBar />
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
