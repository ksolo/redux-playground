import { SET_CLICKED, SET_NOT_CLICKED } from '../actions/button';

export default function button(state = 'Not Clicked', action) {
  const ACTIONS = {
    SET_CLICKED : () => { return  'Clicked' },
    SET_NOT_CLICKED: () => { return 'Not Clicked' }
  }

  return ACTIONS[action.type] ? ACTIONS[action.type]() : state;
}