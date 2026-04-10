import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import EventLpPage from './pages/EventLpPage'

export default function App() {
  return (
    <Routes>
      {/* LP clone */}
      <Route path="/" element={<EventLpPage />} />
      <Route path="/lp" element={<EventLpPage />} />
      {/* Home antiga Grupo Alta Frequência + captura “Lives diárias” */}
      <Route path="/grupo" element={<HomePage />} />
    </Routes>
  )
}
