import { ACTION_SET_TOKEN } from './actions';

export default {
  token(state = null, action: any) {
    const { type, payload } = action
    switch (type) {
      case ACTION_SET_TOKEN:
        return payload;
      default:
    }
    return state;
  }
}