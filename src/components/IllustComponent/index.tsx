import React from 'react'

interface IllustComponentProps {
  illust: any,
  title?: any,
  content: any,
  isRTL?: boolean,
}

const IllustComponent: React.FC<IllustComponentProps> = ({ illust, title = "", content, isRTL = false }) => {
  return (
    <div className="grid md:flex gap-x-24 m-auto justify-items-center items-center">
      <div className={`flex ${isRTL ? "md:order-last" : "md:order-first"} mt-10 md:mt-0 order-last w-3/4 md:w-auto min-w-[30%] justify-center`}><img src={illust} alt="Illustrs" /></div>
      <div className="flex-row space-y-4">
        <div className="font-bold uppercase text-[19px] md:text-[28px] leading-[23px] md:leading-[32.81px] tracking-wider max-w-xl">{title}</div>
        <div className="font-thin text-[17px] md:text-[20px] tracking-wide px-2 indent-3 leading-[21px] md:leading-[28.13px] max-w-xl">{content}</div>
      </div>
    </div >
  )
}

export default IllustComponent