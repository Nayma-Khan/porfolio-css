// import React from 'react'
import "@/styles/contact.css"
export default function Contact(){
    return (
      <section className=" right-0.5 justify-center">
      <div className="p-12 ml-36 justify-center items-center">
          <div className='flex-justify-center items-center flex-col' data-aos="zoom-in">
              {/* <h1 className='text-5xl  font-serif my-10 mr-12 text-center'>Contact us</h1> */}
  
              <div className='bg-[#72787a] w-2/5 p-6 rounded-lg shadow-md justify-center'>
              <form className='mx-aut0'>
  <div className='my-3 mx-auto'>
  <input type="text" className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Enter your name"/>
  </div>
  
  <div className='my-3 mx-auto'>
  <input type="text" className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Enter your email"  />
  </div>
  
  <div className='my-3 mx-auto'>
  <input type="password" className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Enter your password"  />
  </div>
  
  <div className='my-3 mx-auto'>
      <textarea className='w-full mt-2 p-4 outline-none border-none rounded-lg ' placeholder="Type your message"></textarea>
  <input type="text" className='w-full mt-2 p-4 outline-none border-none rounded-lg' placeholder="Enter your email"  />
  </div>
  <button className="w-full p-3 bg-[#846add] text-lg text-white rounded-lg outline-none font-bold tracking-wide transition-all hover:bg-[#252525] " >
    submit
  </button>
  
  
              </form>
  
              </div>
  
          </div>
        
      </div>
      </section>
    )
  }
  
  