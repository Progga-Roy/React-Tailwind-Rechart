
import './App.css'

import Bchart from './component/Bchart/Bchart'
import Dashboard from './component/Dashboard/Dashboard'
import Navbar from './component/Navbar/Navbar'
import PhoneBar from './component/PhoneBar/PhoneBar'
import PriceList from './component/PriceList/PriceList'


function App() {
  

  return (
    <div className="App">
       <Navbar></Navbar>
      <PriceList></PriceList>
      <Dashboard></Dashboard>
    <Bchart></Bchart>
    <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
