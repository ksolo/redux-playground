export const SET_CLICKED = 'SET_CLICKED'
export const SET_NOT_CLICKED = 'SET_NOT_CLICKED'

export function setClicked() {
  return {
    type: SET_CLICKED,
  };
}

export function setNotClicked() {
  return {
    type: SET_NOT_CLICKED,
  };
}


export function toggle() {
  return (dispatch, getState) => {
    const { button } = getState();

    if (button === 'Clicked') {
      dispatch(setNotClicked());
    }
    else {
      dispatch(setClicked());
    }
  };
}

