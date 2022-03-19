import { IconButton } from "../../components/ButtonComponent"
import twitter from "../../assets/svg/twitter.svg"
import telegram from "../../assets/svg/telegram.svg"
import facebook from "../../assets/svg/facebook.svg"
import reddit from "../../assets/svg/reddit.svg"
import backpattern from "../../assets/svg/footerframe1.svg"
import logoSM from "../../assets/png/logoSM.png"

const Footer: React.FC = () => {

  return (
    <div className="w-full mt-32">
      <img src={backpattern} className="w-full" alt="back" />
      <div className="flex gap-6 lg:gap-12 justify-end mx-8 md:mx-24 lg:mx-8 lg:justify-center -mt-16 md:-mt-24 lg:-mt-32 content-center">
        <a href="https://twitter.com" target="_blank" rel="noreferrer"><IconButton icon={twitter} className="w-[24px] h-[24px] md:w-8 md:h-8 lg:w-12 lg:h-12" /></a>
        <a href="https://web.telgram.org" target="_blank" rel="noreferrer"><IconButton icon={telegram} className="w-[24px] h-[24px] md:w-8 md:h-8 lg:w-12 lg:h-12" /></a>
        <a href="https://facebook.com" target="_blank" rel="noreferrer"><IconButton icon={facebook} className="w-[24px] h-[24px] md:w-8 md:h-8 lg:w-12 lg:h-12" /></a>
        <a href="https://www.reddit.com" target="_blank" rel="noreferrer"><IconButton icon={reddit} className="w-[24px] h-[24px] md:w-8 md:h-8 lg:w-12 lg:h-12" /></a>
      </div>
      <a href="/"><img src={logoSM} className="mt-[-50px] md:mt-[-100px] ml-8 md:ml-16 w-8 h-8 md:w-12 md:h-12 lg:mt-[-220px] lg:ml-32 lg:w-16 lg:h-16" alt="logo" /></a>
    </div>
  )
}

export default Footer