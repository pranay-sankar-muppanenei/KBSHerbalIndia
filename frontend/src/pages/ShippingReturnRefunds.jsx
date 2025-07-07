import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ShippingTableComponent from "../components/layout/ShippingTableComponent";
import Seo from "../components/ui/Seo";

const ShippingReturnRefunds = () => {
  return(
    <>
      <Seo
        title="Shipping Returns And Refunds | KBS HERBAL India"
        description="Learn about our shipping, returns, and refund policies at KBS HERBAL India. Understand how we handle your orders and ensure customer satisfaction."
        keywords="shipping, returns, refunds, KBS HERBAL, Ayurveda, herbal products, India"
        url="/shipping-return-refunds"
      />
  
      <Header />
      <main className="p-2 md:p-10">
        <div className="space-y-2 mb-6">
             <h1 style={{fontFamily:"sans"}} className="text-2xl md:text-3xl font-bold text-[#325e12]">Shipping Returns And Refunds</h1>
             <p className="text-sm md:text-base text-gray-700 leading-relaxed">At KBS HERBAL India, We understand the importance of receiving your products in a timely and perfect condition. That's why we have 
              partnered with trusted logistics partners to ensure your orders are delivered safely,quickly,securely and efficiently.
              </p>
              <ShippingTableComponent />
             
        </div>
       
        
      </main>
      <Footer />
    </>
  )

}
export default ShippingReturnRefunds;