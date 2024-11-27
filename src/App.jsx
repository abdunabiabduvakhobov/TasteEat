import { useEffect } from 'react'
import { BgImgSecion, Book, ClinetsComments, ContactsSection, Footer, Header, MenuSection, Popular, Secion, SecionCenter, SecionEnd } from './components'
import { SecionNews } from './components/secion-news'
import { News } from './components/secion-news/news'
import { SecionOffers } from './components/secion-offers'
import { Offers } from './components/secion-offers/offers'
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        Aos.init();
        Aos.refresh();
    }, []);

  return (
    <>
    
   

    <Header/>
    <ContactsSection/>
    <Secion/>
    <MenuSection/> 
    <ClinetsComments/>
    <BgImgSecion/>
    <SecionOffers/>
    <Offers/>
    <Popular/>
    <SecionCenter/>
    <SecionNews/>
    <News/>
    <Book/>
    <SecionEnd/>
     <Footer/>
    </>
  )
}

export default App
