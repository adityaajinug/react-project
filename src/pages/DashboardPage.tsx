import { CardTitle } from '@/components/Elements/Card/CardTitle';
import { MainLayout } from '@/components/Layouts/MainLayout';
import React from 'react'

const DashboardPage: React.FC = () => {
    return (
        <>
            <MainLayout childern={
                <div className="grid grid-cols-12 gap-5">
                    <div className="col-span-12 xl:col-span-4">
                        <CardTitle cardTitle="Deskripsi 1" cardText="Deskripsi." />
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                        <CardTitle cardTitle="Deskripsi 2" cardText="Deksripsi 2" />
                    </div>
                    <div className="col-span-12 xl:col-span-4">
                        <CardTitle cardTitle="Deskripsi 3" cardText="Deskripsi 3" />
                    </div>
                </div>
            }> 
            </MainLayout>
        </>
    )
}

export default DashboardPage;