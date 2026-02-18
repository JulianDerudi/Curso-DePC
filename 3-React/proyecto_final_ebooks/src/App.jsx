import { Route, Routes } from "react-router"
import HomeScreen from "./Screens/HomeScreen/HomeScreen"
import EbookDetailScreen from "./Screens/EbookDetailScreen/EbookDetailScreen"
import ChapterReaderScreen from "./Screens/ChapterReaderScreen/ChapterReaderScreen"
import EbookDetailContextProvider, { EbookDetailContext } from "./Context/EbookDetailContext"
import EbookContextProvider from "./Context/EbookContext"
import AddEbookScreen from "./Screens/AddEbookScreen/AddEbookScreen"


function App() {

  return (
      <Routes>
        <Route element={ <EbookContextProvider/> } >
          <Route path="/" element={ <HomeScreen /> } />
          <Route path="/ebook/:id" element={ <EbookDetailContextProvider/>} >
            <Route path="/ebook/:id" element={ <EbookDetailScreen /> } />
          </Route>
          <Route path="/ebook/:id/chapter/:chapterId" element={ <ChapterReaderScreen /> } />
          <Route path="/add-ebook" element={ <AddEbookScreen /> } />
        </Route>
      </Routes>
  )
}

export default App
