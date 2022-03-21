import { useHistory } from "react-router-dom"
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

  return (
    <div className="m-auto">
      <Header handler={handleNavigate} />
      <Footer />
    </div>
  )
}

export default TokenSale