


import img2 from '../../assets/imgs/poert1.png'
import img3 from '../../assets/imgs/port2.png'
import img4 from '../../assets/imgs/port3.png'
export default function Portfolio() {
  return (
   <div className='port'>
   <div className='heading text-center mb-5'>
  <h1 className="text-uppercase">portfolio component</h1>
  <div class="line m-auto"></div>


   </div>
   <div className="container  my-4">
    <div className="row g-3">
      <div className="col-lg-4 col-md 6">
        <img src={img2} alt="" />

      </div>
      <div className='col-lg-4 col-md-5'>
        <img src={img3} alt="" />

      </div>
      <div className='col-lg-4 col-md 6'>
        <img src={img4} alt="" />
      </div>
      <div className="col-lg-4 col-md 6">
        <img src={img2} alt="" />

      </div>
      <div className='col-lg-4 col-md-5'>
        <img src={img3} alt="" />

      </div>
      <div className='col-lg-4 col-md 6'>
        <img src={img4} alt="" />
      </div>
    </div>

   </div>

   </div>
 
  )
}


