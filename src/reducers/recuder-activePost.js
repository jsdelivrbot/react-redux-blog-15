import {AT_POST} from '../actions/action-types.js';

export default function ReducerPost(state=null, action ){
    switch(action.type){
        case AT_POST.READ:
            return action.payload;
        default :
            return state;
    }
}
