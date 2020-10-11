import React,{useState} from 'react';
import { connect } from "react-redux";
import {increment,decrement} from '../actions/actions'

const Counter=(props)=> {
     console.log(props)

     return (
          <>
            <div>
              <h3>COUNTER</h3>
              <div>
                <button onClick={() => props.decrement()}>-</button>
                <span> {props.counter} </span>
                <button onClick={() => props.increment()}>+</button>
              </div>
            </div>      

            
            </>

        );
}
const mapStateToProps = state => {
    return {
      counter: state.counter
    };
   };

   const mapDispatchToProps=(dispatch)=>{
       return{
           increment: ()=>{dispatch(increment())},
           decrement: ()=>{dispatch(decrement())}
       }
   }
export default connect(mapStateToProps,mapDispatchToProps)(Counter);

  