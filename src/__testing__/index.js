import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

export const mockStore = configureMockStore([thunk, promise]);

