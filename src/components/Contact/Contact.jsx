import React from 'react'

export default function Contact() {
  return (
  

  
    <div className='heading text-center mb-5 bg-3'>
      <h1 className=' text-uppercase'>conatct section</h1>
      <div class="line m-auto"></div>
      <div className='container my-4'>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <input type="text" placeholder='UserName'  className='form-control m-4'/>

          </div>
          <div className="col-lg-12 col-md-12">
            <input type="text" placeholder='UserAge'  className='form-control m-4'/>

          </div>
          <div className="col-lg-12 col-md-12">
            <input type="text" placeholder='UserEmail'  className='form-control m-4'/>

          </div>
          <div className="col-lg-12 col-md-12">
            <input type="text" placeholder='UserPassword'  className='form-control m-4'/>

          </div>

         
        </div>
       

      </div>
      <button className='btn btn-dark'>SEND MESSAGE</button>

    </div>
    
    
   
   
  
  )
}
