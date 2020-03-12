export const initialMenuState = { isSideBarOpen: false };

export function MenuReducer(state, action) {
  switch(action.type) {
    case 'open':
      return { isSideBarOpen: true };
    case 'close':
      return { isSideBarOpen: false };
    case 'toggle':
      const toggleSideBar = state.isSideBarOpen ? false : true;
      return { isSideBarOpen: toggleSideBar };
    default:
      return state
  }
} 