import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PaymentMethods from './components/PaymentMethods'
import UPIPayment from './components/UPIPayment'
import CardPayment from './components/CardPayment'
import NetBankingPayment from './components/NetBankingPayment'
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<PaymentMethods />}>
            <Route path="/upi-payment" element={<UPIPayment />} />
            <Route path="/card-payment" element={<CardPayment />} />
            <Route path="/netbanking-payment" element={<NetBankingPayment />} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
