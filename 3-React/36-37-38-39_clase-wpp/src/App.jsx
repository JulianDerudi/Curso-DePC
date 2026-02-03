import { useState } from 'react'
import ContactSidebar from './Components/ContactSidebar/ContactSidebar'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import SupportScreen from './Screens/SupportScreen/SupportScreen'
import ContactDetailScreen from './Screens/ContactDetailScreen/ContactDetailScreen'
import ContactContextProvider from './Context/ContactContext'
import ContactDetailContext from './Context/ContactDetailContext'

function App() {

  return (
    <div>
      <Routes>
        <Route element={<ContactContextProvider />}>
          <Route path="/" element={<HomeScreen />}  />
          <Route path="/contact/:contact_id" element={<ContactDetailContext />}>
            <Route path="/contact/:contact_id" element={<ContactDetailScreen />} />
          </Route>
        </Route>
        
        <Route path="/Contact" element={<ContactScreen />} />
        <Route path="/Support" element={<SupportScreen />} />
        
      
      </Routes>
    </div>
  )
}

export default App
