export const GET_ALL_POSTS = 'GET_ALL_POSTS';
export const GET_ALL_USERS = 'GET_ALL_USERS';
export const GET_ALL_USERS_POST = 'GET_ALL_USERS_POST';
export const GET_ALL_COMMENTS_POST = 'GET_ALL_COMMENTS_POST';

export function getAllUsers() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(users => dispatch({
            type: GET_ALL_USERS,
            payload: users
        }))
    };
}

export function getAllUserPosts(id) {
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => res.json())
        .then(post => dispatch({
            type: GET_ALL_USERS_POST,
            payload: post
        }))
    };
}

// https://jsonplaceholder.typicode.com/comments?postId=1
export function getAllCommentsPost(postId) {
    return function(dispatch) {
        return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
        .then(res => res.json())
        .then(json => dispatch({
            type: GET_ALL_COMMENTS_POST,
            payload: json
        }))
    };
}

// https://jsonplaceholder.typicode.com/posts
export function getAllPosts() {
    return function(dispatch) {
        return fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => dispatch({
            type: GET_ALL_POSTS,
            payload: data
        }))
    }
}