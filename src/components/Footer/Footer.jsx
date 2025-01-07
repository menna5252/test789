import React from 'react'

export default function Footer() {
  return (
   <div className='footer'>
  
     <div className=' container'>
        <div className="row ">
            <div className="col-lg-4 col-md-12">
                <h3 className='text-uppercase p-2 text-white'>LOCATION</h3>
                <h5 className='text-white p-2 '>2215 John Daniel Drive</h5>
                <h6 className=' text-white p-2'>Clark, MO 65243</h6>
            </div>
            <div className='col-lg-4 col-md-12'>
               <h2 className='text-white p-2'>AROUND THE WEB</h2>
               <i class="fa-brands fa-twitter fs-1 p-2 text-white"></i>
               <i class="fa-brands fa-facebook fs-1 p-2 text-white" ></i>
               <i class="fa-brands fa-linkedin fs-1 p-2 text-white "></i>
               <i class="fa-brands fa-instagram fs-1 p-2  text-white"></i>

            </div>
            <div className='col-lg-4 col-md-12'>
                <h2 className='text-uppercase text-white'>ABOUT FREELANCER</h2>
              <p className='text-white'>Freelance is a free to use, licensed Bootstrap theme created by Route</p>

            </div>
        </div>
      
    </div>
   
   </div>
  
  )
}

