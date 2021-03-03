import React from 'react'
import { Header } from './components/stat/Header.jsx'
import { Navbar } from './components/stat/Navbar.jsx'
import { Profile } from './components/content/Profile/Profile.jsx'
import UsersContainer from './components/content/Users/Users_container.jsx'
import DialogContainer from './components/content/Dialogs/Dialogs_Container'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'


function App() {
  return (

    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='content'>

        <Route path='/dialogs'>
          <DialogContainer />
        </Route>

        <Route path='/profile'>
          <Profile />
        </Route>

        <Route path='/users'>
          <UsersContainer />
        </Route>

        {/* <Route path='/dialogs' render={() => <Dialogs data={props} /> } />
          <Route path='/profile' render={() => <Profile data={props} /> } /> */}
      </div>
    </div>

  )
}
export default App;

//(Route - следит за path='/dialogs')

//> wrapper(англ) - обертка
//> workspace(англ) - рабочее место