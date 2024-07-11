import { BrowserRouter, Route, Routes } from "react-router-dom"
import DetailPage from "./pages/DetailPage"
import Header from "./components/Header"
import MainPage from "./pages/MainPage"

function App() {
  

  return (
   <BrowserRouter>
   <div className="p-5 md:p-10 lg:p-14 xl:p-20">
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />}/>
      <Route path="/movie/:id" element={<DetailPage />}/>
    </Routes>
   </div>
   </BrowserRouter>
  )
}

export default App
