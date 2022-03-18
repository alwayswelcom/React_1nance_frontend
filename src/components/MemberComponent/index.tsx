import linkedin from "../../assets/svg/linkedin.svg"
import { IconButton } from "../../components/ButtonComponent"

interface MemberComponentProps {
  profile?: any,
  name: any,
  role: any,
  link?: any,
  className?: any,
}

const MemberComponent: React.FC<MemberComponentProps> = ({ profile = null, name, role, link, className = "" }) => {
  const img = require(`../../assets/team/${profile === null ? 'user.png' : profile}`)
  return (
    <div className={`grid justify-items-center gap-2 ${className}`}>
      <div className="grid place-content-center align-middle rounded-full w-[220px] h-[220px] bg-gradient-radial from-[#E0790A] to-[#F9A74E]">
        <div className="bg-white w-[190px] h-[190px] rounded-full" >
          <img src={img} alt="profile" className="rounded-full w-full h-full" />
        </div>
      </div>
      <div className="grid justify-items-start gap-1">
        <p className="flex font-bold text-[24px]">{name}</p>
        <p className="flex text-[18px]">{role}</p>
        <a href={link} target="_blank" rel="noreferrer"><IconButton icon={linkedin} className="w-[24px] h-[24px]" /></a>
      </div>
    </div>
  )
}

export default MemberComponent