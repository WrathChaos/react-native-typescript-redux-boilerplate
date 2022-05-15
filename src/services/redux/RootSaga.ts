import { all, AllEffect, call, ForkEffect, spawn } from "redux-saga/effects";

function* RootSaga(): Generator<AllEffect<ForkEffect<void>>> {
  const sagas: any = [];

  yield all(
    sagas.map((saga: any) =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga);
            break;
          } catch (e) {
            console.error(e);
          }
        }
      }),
    ),
  );
}

export default RootSaga;
