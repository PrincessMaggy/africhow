import React from 'react'
import { BrowserRouter, Routes, Route} from "react-router-dom"
import Incoming from '../components/OrderManagement/Incoming'
import Outgoing from '../components/OrderManagement/Outgoing'
import History from '../components/OrderManagement/History'
import Layout from '../components/OrderManagement/Layout/Layout'


function OrderManagement() {
  return (
    // <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='incoming' element={<Incoming/>} />
          <Route path='outgoing' element={<Outgoing/>} />
          <Route path='history' element={<History/>} />
        </Route>
      </Routes>
    // </BrowserRouter>
  )
}

export default OrderManagement