import 'whatwg-fetch';

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED'

import {CTX_HOST} from '../config'

const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginRequestSuccess = (username) => ({
  type: LOGIN_REQUEST_SUCCESS,
  data: {
    username: username,
    loginAt: Date.now()
  }
})

export const loginRequestFailed = (username) => ({
  type: LOGIN_REQUEST_FAILED,
  username
})

export const login = (username, password, onSuccess, onError) => dispatch => {
    //dispatch(loginRequest()) // TODO

    const url = CTX_HOST+'/session/login';
    const hash = new Buffer(`${username}:${password}`).toString('base64')
    var request = new Request(url, {
      credentials: 'include',
      headers: new Headers({
        'Authorization': `Basic ${hash}`,
      })
    });
    return fetch(request).then(function(response) {
      console.log('LOGIN RES',response);
      if (response.ok) {
        //dispatch(loginRequestSuccess(username))
        onSuccess && onSuccess() || true;
        return response;
      } else {
        throw Error(response.statusText);
      }
    }).catch((e) => {
        onError && onError();
        console.error('Login request failer:', e)
        //dispatch(loginRequestFailed(username))
    })
  }
