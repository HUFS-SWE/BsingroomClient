import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./app"
import{ HashRouter, Route, Routes} from 'react-router-dom';
import Intro from './component/intro';
import Lobby from './component/lobby';
import Room from './component/room';

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