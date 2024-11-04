import React from 'react'
interface SectionTitleProps {
    title?: string
}
export const SectionTitle:React.FC<SectionTitleProps> = (props) => {
  const {title} = props
  return (
    <>
        <h1 className="text-webstyle-300 font-normal text-2xl text-webstyle-grey-300">{title}</h1>
    </>
  )
}
