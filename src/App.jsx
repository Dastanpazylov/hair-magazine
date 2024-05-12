import Header from './components/Header/Header'
import Categories from './components/Categories/Categories'
import Footer from './components/Footer/Footer'

import './App.css'
import SecondCont from './components/SecondCont/SecondCont'
import TheMostImpo from './components/TheMostImpo/TheMostImpo'
import FormGmail from './components/FormGmail/FormGmail'
import Current from './components/Current/Current'
import WatchMore from './components/WatchMore/WatchMore'
import FormAskDoctor from './components/FormAskDoctor/FormAskDoctor'
import PopUps from './components/PopUps/PopUps'


function App() {
  

  return (
    <>
      <Header />
      <Categories />
      <SecondCont />
     <TheMostImpo />
      <FormGmail />
      <WatchMore />
      <Current />
      <FormAskDoctor />
      <PopUps />
      <Footer />
    </>
  )
}

export default App
