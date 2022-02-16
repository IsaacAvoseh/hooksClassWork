import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from '../redux/counter';

function Redux() {
    const { count } = useSelector(
        state => ({
            count: state.counter.value
        })
    );

    const dispatch = useDispatch();

    const handleClickAdd = () => {
        dispatch(increment());
    };

    const handleClickSubtract = () => {
        dispatch(decrement());
    };

    const byAmount = () => {
        dispatch(incrementByAmount(20));
    };  

    // const decrementByAmoun = () => {
    //     console.log('decrementByAmount');
    //     dispatch(decrementByAmount(20));
    // };

  return(
      <div className='container' >
          <div className=' d-flex ' >
              <h1>Counter</h1>
              <h2 className='mx-5' >{count}</h2>
        </div>
          <button className='btn btn-success mx-4' onClick={handleClickAdd} > Increment </button>
          <button className='btn btn-danger mx-4' onClick={handleClickSubtract} > Decrement </button>
          <button className='btn btn-warning mx-4' onClick={byAmount} >Increment By Amount </button>
          {/* <button className='btn btn-danger' onClick={decrementByAmount}> Decrease by Amount </button> */}
     </div>
  )

     
}

export default Redux;
