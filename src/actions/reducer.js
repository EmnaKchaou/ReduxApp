import {INCREMENT,DECREMENT} from './actions';

const initialState = {counter :0};
const Reducer = (state= initialState,action) => {

    switch (action.type){
        case INCREMENT :
            return {
               counter : state.counter +1
            }
         case DECREMENT :
             return {
                 counter : state.counter -1
             }
        default :
        return state ;
    }

}

export default Reducer ;