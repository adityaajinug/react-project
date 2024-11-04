import { Card } from '@/components/Elements/Card/Card';
import { SectionTitle } from '@/components/Elements/Title/SectionTitle';
import React from 'react'
interface CardTitleProps  {
    cardTitle?:string;
    cardText?:string;
}
export const CardTitle:React.FC<CardTitleProps> = (props) => {
  const {cardTitle, cardText} = props
  return (
    <>
      <div className="flex flex-col gap-2">
        <SectionTitle title={cardTitle} />
        <Card text={cardText} />
      </div>

    </>
  )
}
