
import { BgImgSecion, Book, ClinetsComments, ContactsSection, Header, MenuSection, Popular, Secion, SecionCenter } from './components'
import { SecionNews } from './components/secion-news'
import { News } from './components/secion-news/news'
import { SecionOffers } from './components/secion-offers'
import { Offers } from './components/secion-offers/offers'

function App() {
 
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
    </>
  )
}

export default App
