import {AT_POST} from '../actions/action-types.js';

export default function ReducerActivePost(state= [], action ){
    switch(action.type){
        case AT_POST.READ_ALL:
            return action.payload;
        case AT_POST.DELETE:
            return state.filter((post)=>{
                if(post.id == action.payload){
                    return false;
                } else{
                    return true;
                }
            })
            case AT_POST.CREATE:
                return [...state,action.payload]
        default :
            return state;
    }
}
