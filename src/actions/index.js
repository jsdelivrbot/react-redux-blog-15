import axios from 'axios';
import {AT_POST} from './action-types.js';
const END_POINT = "http://localhost:3000";

export function readAllPost(){
    return function(dispatch){
        axios.get(`${END_POINT}/posts`).then(function(response){
            dispatch({
                type: AT_POST.READ_ALL,
                payload: response.data
            })
        })
    }
}

export function readPost(id){
    return function(dispatch){
        axios.get(`${END_POINT}/posts/${id}`).then(function(response){
            dispatch({
                type: AT_POST.READ,
                payload: response.data
            })
        })
    }
}

export function deletePost(id){
    return function(dispatch){
        axios.delete(`${END_POINT}/posts/${id}`).then(function(response){
            dispatch({
                type: AT_POST.DELETE,
                payload: id
            })
        })
    }
}

export function addPost(post){
    return function(dispatch){
        axios.post(`${END_POINT}/posts`, {
            title: post.title,
            content: post.content,
            author: post.author
        }).then(function(response){
            dispatch({
                type: AT_POST.CREATE,
                payload: response.data
            })
        })
    }
}

