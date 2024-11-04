import React from 'react'
interface CardProps {
    text?: string
}
export const Card:React.FC<CardProps> = (props) => {
const {text} = props;
  return (
    <>
      <div className="shadow-xl bg-white rounded-md p-6">
        <p className="font-normal text-base">{text}</p>
      </div>
    </>
  )
}
