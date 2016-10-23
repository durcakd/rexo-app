
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS'
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED'

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

export const login = (username, password) => dispatch => {

    // We use this to update the store state of `isLoggingIn`
    // which can be used to display an activity indicator on the login
    // view.
    dispatch(loginRequest())

    // Note: This base64 encode method only works in NodeJS, so use an
    // implementation that works for your platform:
    // `base64-js` for React Native,
    // `btoa()` for browsers, etc...

    const hash = new Buffer(`${username}:${password}`).toString('base64')
    return fetch('https://rexo.rextech.sk/session/login', {
      headers: {
        'Authorization': `Basic ${hash}`
      },
      credentials: 'include',
      mode: 'no-cors'
    }).then(function(response) {
      console.log(response);
      if (response.type === 'opaque' || response.ok) {
        return response;
      } else {
        throw Error(response.statusText);
      }
    }).then(function(response) {
      dispatch(loginRequestSuccess(username))
    }).catch(function(error) {
      console.log(error);
      dispatch(loginRequestFailed(username))
    });

  }
