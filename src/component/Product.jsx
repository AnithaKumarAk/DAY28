import React, { useState } from 'react';
import { useData } from '../contexts/DataContext';
import '../component/product.css'

const Product = () => {
    const {data, setData} = useData();
    const [number,setNumber] = useState(1);
    const [totalp, setTotalp] = useState(0);
   // const [number,setNumber] =useState(1);
    //const [totalp,setTotalp] = useState(0);
   const quantitydecrement = () =>{
    if (number > 1) {
      setNumber((()=> number - 1));
      let total = 0;
      setTotalp((total += totalp + data.price));
    }
  };
  const quantityincrement = () => {
  setNumber((() => number + 1));
  let total =0;
  setTotalp((total += totalp + data.price));
};
const remove = () => {
  setData((prevData) => prevData.filter((item) => item.id !== 1));
}
   

  return (
  <div className='container '>
    <div className='col'>
      <div className='card'>
      <div className='row m-3'>
      <div className="image col-md-4">
        <img src={data.thumbnail} className='img-fluid rounded-start'/>
      </div>
      <div className='col-md-8'>
        <div className='card-body'>
          <h4 className='card-title'>{data.title}</h4>
          <p className='card-text'>{data.description}</p>
          <p className='card-text'>
            <p className='text-body-secondary'>Price: ${data.price}</p>
          </p>
          <div>
            <p>Stock Left : {data.stock}</p>
          </div>
          <form className='d-flex'>
            <label className='lab me-2'>Quantity</label>
            <div
               onClick={quantitydecrement}
            id='numbers'
            className='btn text-dark bg-white btn-outline-secondary'>
              -
            </div>
            <div className="qnumber mx-2">{number}</div>
            <div onClick={quantityincrement}
            id='numbers'
            className='btn text-dark bg-white btn-outline-secondary'>
              +
            </div>
          </form>
          <button className='btn btn-danger my-3' 
          onClick={remove}>Remove</button>
        </div>
      </div>
    </div>
    <hr />
    <div className='st d-flex mx-5 my-2'>
    <small className='text-secondary'>
        <b>Subtotal : </b>
        </small> 
        <small className='subtotal text-secondary' >
            <b>${totalp}</b>
        </small>
    </div>
    <div className='st d-flex mx-5 my-2'>
        <small className='text-secondary'>
            <b>Shipping : </b>
        </small>
        <small className='subtotal text-secondary'>
            <b>$100</b>
        </small>
    </div>
  <hr /> 
  <div className='st d-flex mx-5 my-2'>
    <small className='text-secondary'>
      <b>Total : </b>
    </small>
    <small className='subtotal text-secondary'>
      <b>${totalp + 100 }</b>
    </small> 
    </div>
    <div className='line d-flex mx-5 my-2'>
    <p className='text-danger m-3'>Get Daily cash with Nespola Card</p>
  </div>
  </div>
  </div>
  </div>
  )
}

export default Product