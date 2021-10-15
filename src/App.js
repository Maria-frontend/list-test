import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MainList from "./components/MainList";
import Planet from "./components/Planet";
import { Switch, Route } from "react-router-dom";
import { getList } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const rootList = useSelector((state) => state.rootList);

  useEffect(() => {
    dispatch(getList());
  }, [dispatch]);

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          {rootList && <MainList list={rootList} />}
        </Route>
        <Route exact path="/:planet">
          <Planet />
        </Route>
      </Switch>

      <button className="update-button" onClick={() => dispatch(getList())}>
        UPDATE
      </button>
    </div>
  );
}

export default App;
