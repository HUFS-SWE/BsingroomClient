import * as React from 'react';
import * as ReactDOM from 'react-dom';
import{ HashRouter, Route, Routes} from 'react-router-dom';
import Intro from './component/intro/intro';
import Lobby from './component/lobby/lobby';
import Room from './component/room/room';
import rootReducer from './modules';

const store = createStore(rootReducer); 

function render() {
  ReactDOM.render(
    <Provider store={store}>
      <React.StrictMode>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Intro/>} />
            <Route path="/lobby"  element={<Lobby/>} />
            <Route path="/room"  element={<Room/>} />
          </Routes>
        </HashRouter>
      </React.StrictMode>
    </Provider>, document.body);
}
render();