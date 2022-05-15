<img alt="React Native Typescript Boilerplate" src="../assets/logo.png" width="1050"/>
<img alt="React Native Typescript Boilerplate" src="../assets/redux.png" />

# 🍾 [Redux](https://redux.js.org/) Custom Service Usage

## Features

- Everything already setup for redux usage
- Zero configuration, but configurable if needed
- If you want to change / learn something about the redux configuration please check the [Redux Service](../src/services/redux)
- There is a basic example which is `User`


## Basic Example

- Create your own redux reducer for each of them: [UserReducers](./src/services/redux/user/UserReducers.ts)
- Write your own redux usage service: [UserService](./src/screens/home/services/userService.ts)
- Set a data to redux via User Service: [User Redux Set Example](./src/screens/home/HomeScreen.tsx)
```jsx
UserService.setUserData(mockUserData); 
```

- Fetch a data with `react-redux`'s `useSelector` hook [User Redux Fetch Data](./src/screens/profile/ProfileScreen.tsx)

```jsx
const userData = useSelector(
  (state: MainState) => state.user.userData as IUser,
);
```


## Side Note

Of course, you can change the whole Redux usage structure. This one is just an example 👊
