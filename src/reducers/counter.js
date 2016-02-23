import { INCREMENT_COUNTER, DECREMENT_COUNTER } from '../actions/counter';



export default function counter(state = 0, action) {
  const ACTIONS = {
    INCREMENT_COUNTER : () => { return state + 1 },
    DECREMENT_COUNTER : () => { return state - 1 }
  }

  return ACTIONS[action.type] ? ACTIONS[action.type]() : state;
}
