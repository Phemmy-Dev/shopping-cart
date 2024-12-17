import burgerImage from './assets/images/hamburger.jpg'
import { IoTrashOutline } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useState } from 'react';
import './App.css'

function App() {

  const [quantity, setQuantity] = useState(1)
  const basePrice = 5.99

  const handleIncrement = () => {
    setQuantity((prev) =>(prev < 20 ? prev + 1 : prev))
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
              <h1 className="text-2xl font-bold">Hamburger</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur <br />adipisicing  elit. Quisquam, voluptatem.</p>
              <div className="button__ctrl mt-5 flex items-center justify-between">
                <div className="number__change__ctrl flex justify-center items-center">
                  <button className="bg-black flex items-center   justify-center text-white w-7 h-7 rounded-full"><FaMinus />
                  </button>
                  <span className="px-4 py-2 font-bold">{quantity}</span>
                  <button onClick={handleIncrement} className="bg-black flex items-center   justify-center text-white w-7 h-7 rounded-full"><FaPlus />
                  </button>
                </div>

                <div className="trash__can_ctrl">
                <IoTrashOutline className='w-6 h-6 text-gray-500' />
                </div>
              </div>
            </div>
          
        </div>


        {/* Shopping Cart B */}
        <div className="shopping__cart__b flex bg-white px-8 py-4 rounded-3xl justify-between gap-6">

          {/* Img cont */}
          <div className="img__cont">
            <img src={burgerImage} alt="Hanburger Image" className='w-40 h-40 rounded-3xl' />
          </div>

            {/* Content Cont */}
            <div className="content__cont">
              <h1 className="text-2xl font-bold">Hamburger</h1>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur <br />adipisicing  elit. Quisquam, voluptatem.</p>
              <div className="button__ctrl mt-5 flex items-center justify-between">
                <div className="number__change__ctrl flex justify-center items-center">
                  <button className="bg-black flex items-center   justify-center text-white w-7 h-7 rounded-full"><FaMinus />
                  </button>
                  <span className="px-4 py-2 font-bold">1</span>
                  <button className="bg-black flex items-center   justify-center text-white w-7 h-7 rounded-full"><FaPlus />
                  </button>
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
