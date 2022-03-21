import Footer from "../../components/Footer"
import Header from "../../components/Header"

const TokenSale: React.FC = () => {
  const handleGoSection = () => {
    console.log("handleGoSelected")
  }

  return (
    <div className="m-auto">
      <Header handler={handleGoSection} />
      <Footer />
    </div>
  )
}

export default TokenSale