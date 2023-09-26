import Banner from "./assets/Components/Banner/Banner"
import Contact from "./assets/Components/Contact/Contact"
import Copyright from "./assets/Components/Copyright/Copyright"
import Counter from "./assets/Components/Counter/Counter"
import Delivery from "./assets/Components/Delivery/Delivery"
import Find from "./assets/Components/Find/Find"
import Footer from "./assets/Components/Footer/Footer"
import Navbar from "./assets/Components/Navbar/Navbar"
import Newsletter from "./assets/Components/Newsletter/Newsletter"
import Service from "./assets/Components/Service/Service"
import Testimonial from "./assets/Components/Testimonial/Testimonial"


function App() {

  return (
    <>
    <Navbar></Navbar>
    <Banner></Banner>
    <Service></Service>
    <Counter></Counter>
    <Delivery></Delivery>
    <Testimonial></Testimonial>
    <Contact></Contact>
    <Find></Find>
    <Newsletter></Newsletter>
    <Footer></Footer>
    <Copyright></Copyright>
    </>
  )
}

export default App