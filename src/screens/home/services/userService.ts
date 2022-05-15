import { IUser } from "@services/models";
import { ReduxServices } from "@services/redux/ReduxService";
import { setUserData, resetUserData } from "@services/redux/user/UserReducers";

class UserServiceState {
  setUserData = (userData: IUser) => {
    userData && ReduxServices.dispatchAction(setUserData(userData));
  };
  resetUserData = () => {
    ReduxServices.dispatchAction(resetUserData());
  };
}

const UserService = new UserServiceState();

export default UserService;
