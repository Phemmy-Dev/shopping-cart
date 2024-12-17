import burgerImage from './assets/images/hamburger.jpg'
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import './App.css'

function App() {

  const [quantityA, setQuantityA] = useState(1)
  const basePrice = 5.99

  const handleIncrementA = () => {
    setQuantityA((prev) =>(prev < 20 ? prev + 1 : prev))
  }

  const handledecrementA = () => {
    setQuantityA((prev) =>(prev > 1 ? prev - 1 : prev))
  }

  // Shopping Cart B

  const [quantityB, setQuantityB] = useState(1)
  const basePriceB = 5.99

  

  const handleChange = (e) => {
    setQuantityB(e.target.value)
  }
  return (
    <>
      {/* Shopping Cart Container */}
      <div className="shopping__cart__cont h-screen flex flex-col justify-center items-center gap-20 md:flex-row">


        {/* Shopping Cart A */}
        <div className="shopping__cart__a flex bg-white px-8 py-4 rounded-3xl justify-between gap-6">

          {/* Img cont */}
          <div className="img__cont">
            <img src={burgerImage} alt="Hanburger Image" className='w-40 h-40 rounded-3xl' />
          </div>

          {/* Content Cont */}
          <div className="content__cont">
              <div className="title__and__price mb-2 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Hamburger</h1>
              <div className="price font-bold text-2xl"> ${(quantityA * basePrice).toFixed(2)}</div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur <br />adipisicing  elit. Quisquam, voluptatem.</p>
              <div className="button__ctrl mt-5 flex items-center justify-between">
                <div className="number__change__ctrl flex justify-center items-center">
                  <button onClick={handledecrementA} className="bg-black flex items-center   justify-center text-white w-7 h-7 rounded-full"><FaMinus />
                  </button>
                  <span className="px-4 py-2 font-bold">{quantityA}</span>
                  <button onClick={handleIncrementA} className="bg-black flex items-center   justify-center text-white w-7 h-7 rounded-full"><FaPlus />
                  </button>
                </div>

                <div className="trash__can_ctrl">
                <IoTrashOutline className='w-6 h-6 text-gray-500' />
                </div>
              </div>
          </div>
          
        </div>

        {/* Shopping Cart B */}
        <div className="shopping__cart__a flex bg-white px-8 py-4 rounded-3xl justify-between gap-6">

          {/* Img cont */}
          <div className="img__cont">
            <img src={burgerImage} alt="Hanburger Image" className='w-40 h-40 rounded-3xl' />
          </div>

          {/* Content Cont */}
          <div className="content__cont">
              <div className="title__and__price mb-2 flex justify-between items-center">
              <h1 className="text-2xl font-bold">Hamburger</h1>
              <div className="price font-bold text-2xl"> ${(quantityB * basePriceB).toFixed(2)}</div>
              </div>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur <br />adipisicing  elit. Quisquam, voluptatem.</p>
              <div className="button__ctrl mt-5 flex items-center justify-between">
                <div className="number__change__ctrl flex justify-center items-center">
                  <select name="" id="" value={quantityB} onChange={handleChange} className='bg-black text-white px-3 py-1 rounded-full flex justify-center items-center text-center'>
                    {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
                      <option key={num} value={num}>
                        {num}
                      </option>
                      ))}
                  </select>
                </div>

                <div className="trash__can_ctrl">
                <IoTrashOutline className='w-6 h-6 text-gray-500' />
                </div>
              </div>
          </div>
          
        </div>

        

        
      </div>
    </>
  )
}

export default App
