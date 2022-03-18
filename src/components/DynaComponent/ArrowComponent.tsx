import { ChevronRightIcon } from "@heroicons/react/solid"

interface ArrowComponentProps {
  content?: string,
  emphasize?: string,
}

const ArrowComponent: React.FC<ArrowComponentProps> = ({ content = "", emphasize = "" }) => {
  return (
    <div className="flex my-4 text-4 leading-[19px] items-center gap-2 pr-4 w-full">
      <span className="border-2 border-white rounded-full "><ChevronRightIcon className="w-8 h-8" /></span>
      <span className="w-full text-justify leading-[20px]">{content}<b className="pl-2 font-bold">{emphasize}</b></span>
    </div>
  )
}

export default ArrowComponent