// ** Reducers Imports
import { combineReducers } from "@reduxjs/toolkit"

import layout from "./layout"
import navbar from "./navbar"
import authentication from "./authentication"
import permission from "./permission"

const appReducer = combineReducers({
  permission,
  auth: authentication,
  navbar,
  layout
})

const rootReducer = (state, action) => {
  if (action.type === "authentication/handleLogout") {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
