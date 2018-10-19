import axios from 'axios'
import * as actionTypes from './actionTypes'

export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    idToken: token,
    userId: userId
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}

export const auth = (email, password, isSignup) => {
  return dispatch => {
    dispatch(authStart())
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true
    }
    let url ="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyCustomToken?key=[api_key]"
    if (isSignup) {
      url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=[api_key]"
    }
    axios.post('', authData)
      .then(res => {
        console.log(res)
        dispatch(authSuccess(res.data.idToken, res.data.localId))
      })
      .catch(err => {
        dispatch(authFail(err.response.data.error))
      })
  }
}