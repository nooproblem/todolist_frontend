//import { TOGGLE_MODAL, TOGGLE_ALERT, ALERT_MODAL, ALERT_OK, ALERT_CANCEL, BACKEND_FAILURE } from '../constants'
import * as constants from '../constants'

export default (state = {open: false}, action) => {
  switch(action.type) {
    case constants.TOGGLE_MODAL:
      return { open: action.open, component: action.component }
    case constants.ALERT:
      return { open: true, component: constants.ALERT_MODAL, body: action.body }
    case constants.CONFIRMATION_ALERT:
      return { open: true, component: constants.CONFIRMATION_ALERT_MODAL, body: action.body }
    case constants.BACKEND_FAILURE:
      return {open: true, component: constants.ALERT_MODAL, body: action.body }
    case constants.ALERT_OK:
    case constants.ALERT_CANCEL:
      return {open: false }
  }
  return state;
}
