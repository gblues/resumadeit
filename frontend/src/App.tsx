import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {
    googleLogout,
} from "@react-oauth/google";

import { GoogleProfile, GoogleAuth} from './components/GoogleAuth.tsx'
import useLocalStorage from "./hooks/useLocalStorage.ts";
import {UNAUTHENTICATED} from "./constants.ts";

function App() {
  const [count, setCount] = useState(0);
  const [profile, setProfile] = useLocalStorage<GoogleProfile>('googleProfile');

  const logOut = () => {
      googleLogout();
      setProfile(UNAUTHENTICATED);
  }

  return (
      <>
          {profile.email === UNAUTHENTICATED.email ? (<GoogleAuth setProfile={setProfile}></GoogleAuth>) : (
              <div>
                  <p>Hello, {profile.name}!</p>
                  <button onClick={() => logOut()}>log out</button>
              </div>)}
          <div>
              <a href="https://vitejs.dev" target="_blank">
                  <img src={viteLogo} className="logo" alt="Vite logo"/>
              </a>
              <a href="https://react.dev" target="_blank">
                  <img src={reactLogo} className="logo react" alt="React logo"/>
              </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
              <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
              </button>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
