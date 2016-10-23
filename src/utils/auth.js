




export default {
  loggedIn : () => (!!localStorage.token),
  log : () => {localStorage.token = "this my token"}
}
