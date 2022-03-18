interface TitleComponentProps {
  anchor: string,
  showContent?: any,
  title: string,
  content: string,
}

const TitleComponent: React.FC<TitleComponentProps> = ({ anchor, showContent = false, title, content }) => {
  return (
    <div className="grid justify-items-center gap-2 my-12 md:my-16" id={anchor}>
      <p className="text-center uppercase font-bold text-[24px] md:text-[36px] tracking-wider">{title}</p>
      <div className="w-[150px] h-[5px] bg-gradient-to-r from-[#FFAF10] to-[#F97919]" />
      <p className={`{${!showContent ? "" : "hidden"} md:visible text-center text-[16px] md:text-[24px] font-light mt-8 max-w-5xl tracking-wider`}>{content}</p>
    </div>
  )
}

export default TitleComponent