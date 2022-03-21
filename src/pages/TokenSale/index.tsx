import { useState } from "react"
import { useHistory } from "react-router-dom"
import TitleComponent from "../../components/DynaComponent/TitleComponent"
import Footer from "../../components/Footer"
import Header from "../../components/Header"

interface TokenSaleProps {
  handler: any
}

const TokenSale: React.FC<TokenSaleProps> = ({ handler }) => {

  const history = useHistory()

  const handleNavigate = (idx: string) => {
    handler(idx)
    history.push('/')
  }

  const [pValue, setPValue] = useState('0')

  return (
    <div className="m-auto">
      <Header handler={handleNavigate} />
      <div>
        <TitleComponent title="Purchase Token" anchor="" content="" />
        <div className="grid grid-cols-2 mx-32 gap-12">
          <div className="text-[24px] font-bold tracking-[2px] pt-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae mauris lobortis imperdiet convallis mauris. Pulvinar facilisis quis nisl, pellentesque viverra erat amet. Elementum in lacus tempor lacus, neque. Tortor ornare velit vulputate pulvinar feugiat iaculis neque egestas tristique. Eros donec diam sem facilisis suspendisse in et ut gravida. Dui sed risus eu, tempor, sodales tellus id id vel. Nunc arcu malesuada turpis diam non integer cras pellentesque.
          </div>
          <div className="grid justify-items-center items-center bg-gradient-to-b from-[#FFAF10] to-[#F97919] h-[500px]">
            <div>
              <input value={pValue} onChange={(e) => setPValue(e.target.value)} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default TokenSale