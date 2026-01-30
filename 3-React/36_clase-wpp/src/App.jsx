import { useState } from 'react'
import ContactSidebar from './Components/ContactSidebar/ContactSidebar'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import SupportScreen from './Screens/SupportScreen/SupportScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'

function App() {

  return (
    <div>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Contact" element={<ContactScreen />} />
        <Route path="/Support" element={<SupportScreen />} />
        <Route path="/contact/:contact_id" element={<ContactDetailScreen />} />
      
      </Routes>
    </div>
  )
}

export default App
