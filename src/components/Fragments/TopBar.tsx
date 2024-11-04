import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell } from '@fortawesome/free-solid-svg-icons';
export const TopBar: React.FC = () => {
  return (
    <>
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
    </>
  )
}
