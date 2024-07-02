import './App.css'
import { Image1 } from './components/Image1'
import { Image2 } from './components/Image2'
import { Image3 } from './components/Image3'
import { Image4 } from './components/Image4'
import { Image5 } from './components/Image5'
import { Image6 } from './components/Image6'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Navigation } from './components/Navigation'

function App() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <div>
          <h1 id='title' className='text-center my-3' >Proyecto Galería</h1>
        </div>
        <Routes>
          <Route path="/image1" element={<Image1 className="image-size" />} />
          <Route path="/image2" element={<Image2 className="image-size" />} />
          <Route path="/image3" element={<Image3 className="image-size" />} />
          <Route path="/image4" element={<Image4 className="image-size" />} />
          <Route path="/image5" element={<Image5 className="image-size" />} />
          <Route path="/image6" element={<Image6 className="image-size" />} />
        </Routes>
        <Navigation />
      </BrowserRouter>
    </>
  )
}

export default App
