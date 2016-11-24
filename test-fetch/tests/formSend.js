import fetch from 'node-fetch'
//const cfetch = require('fetch-cookie')(require('node-fetch'))
// import

import user from '../user.json'

const creds = new Buffer(`${user.username}:${user.password}`).toString('base64')

describe('re xo service', () => {
  var cookies = "";

  it('test', () => {
    console.log('ok', creds, user)
  })

  //https://rex.rextech.sk/session/login

  it('login', () => {
    return fetch('https://rexo.rextech.sk/session/login', {
      headers : {
        'Authorization': `Basic ${creds}`
      },
      credentials : 'include'
    }).then(res => {
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw());
        console.log(res.headers.get('content-type'))
        const setCookies = res.headers.get('set-cookie')
        console.log(setCookies);
        setCookies && (cookies = setCookies)

        return res.text()
      }).then( text => {
        console.log('text',text);
      })
  })


  it('login 2', () => {
    return fetch('https://rexo.rextech.sk/session/login', {
      headers: {
          'Authorization': `Basic ${creds}`
	   },
      credentials : 'include'
    }).then(res => {
        //console.log(res);
        console.log(res.ok);
        console.log(res.status);
        console.log(res.statusText);
        console.log(res.headers.raw());
        console.log(res.headers.get('content-type'));
        return res.text()
      }).then( text => {
        console.log('text',text);
      })
  })


})
