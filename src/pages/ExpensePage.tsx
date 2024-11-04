import { Card } from '@/components/Elements/Card/Card'
import { CardTitle } from '@/components/Elements/Card/CardTitle'
import { SectionTitle } from '@/components/Elements/Title/SectionTitle'
import { MainLayout } from '@/components/Layouts/MainLayout'
import React from 'react'

export const ExpensePage: React.FC = () => {
  return (
    <>
         <MainLayout childern={
                <div className="flex flex-col gap-6">
                    <div className="grid grid-cols-12 gap-5">
                        <div className="col-span-12">
                            <CardTitle cardTitle="Expense Comparison" cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero. Etiam lobortis diam ac lectus hendrerit fringilla. Pellentesque ultricies sollicitudin ligula. Vestibulum consectetur felis eget turpis porttitor, sit amet dictum erat varius." />
                        </div>
                    </div>
                   <div>
                    <SectionTitle title="Expense Breakdown" />
                        <div className="grid grid-cols-12 gap-5">
                            <div className="col-span-12 xl:col-span-4">
                                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero." />
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero." />
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero." />
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero." />
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero." />
                            </div>
                            <div className="col-span-12 xl:col-span-4">
                                <Card text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non viverra lacus, eu lacinia eros. Praesent scelerisque fringilla auctor. Maecenas magna quam, faucibus vel convallis et, laoreet a lorem. Vivamus et lacus finibus massa lobortis dignissim. Nullam laoreet volutpat leo, vel congue libero." />
                            </div>
                        </div>
                   </div>
                </div>
            }> 
        </MainLayout>
    </>
  )
}
