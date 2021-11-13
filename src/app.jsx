import * as React from 'react';
import * as ReactDOM from 'react-dom';
import{ HashRouter, Route, Routes} from 'react-router-dom';
import Intro from './component/intro/intro';
import Lobby from './component/lobby/lobby';
import Room from './component/room/room';

function render() {
  ReactDOM.render(
    <React.StrictMode>
        <HashRouter>
        <Routes>
        <Route path="/" element={<Intro/>} />
        <Route path="/lobby"  element={<Lobby/>} />
        <Route path="/room"  element={<Room/>} />
        </Routes>
        </HashRouter>
    </React.StrictMode>, document.body);
}
render();