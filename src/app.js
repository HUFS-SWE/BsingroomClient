import React,{ createContext, useState } from 'react';
import{ HashRouter, Route, Routes} from 'react-router-dom';
import Intro from './component/intro/intro';
import Lobby from './component/lobby/lobby';
import Room from './component/room/room'

export const UserDispatch = createContext(null);


function App(){
    const [user, setuser] = useState(null);

    return(
        <HashRouter>
          <Routes>
            <Route path="/" element={<UserDispatch.Provider value={{user,setuser}}><Intro/></UserDispatch.Provider>}/>
          
            <Route path="/lobby" element={<UserDispatch.Provider value={{user,setuser}}><Lobby/></UserDispatch.Provider>}/>
          
            <Route path="/room" element={ <UserDispatch.Provider value={{user,setuser}}><Room/></UserDispatch.Provider>}/>
          </Routes>
        </HashRouter>
    )
}
export default App