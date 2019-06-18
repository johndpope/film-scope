export default function userReducer(state = { users: [] }, action) {
    switch(action.type) {
      case 'LOAD_USERS':
        return { ...state, loading: true }
      case 'FETCH_USERS':
        return { ...state, loading: false, users: action.payload
      }
      default: return state;
  }
}
