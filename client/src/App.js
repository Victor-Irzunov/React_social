import React from 'react'
import NavBarContainer_w from './components/stat/Navbar_container.jsx'
import HeaderContainer from './components/stat/Header_container.jsx'
import ProfileContainer from './components/content/Profile/Profile_Container.jsx'
import UsersContainer from './components/content/Users/Users_container.jsx'
import DialogContainer_w from './components/content/Dialogs/Dialogs_Container'
import { Login } from './components/content/Login/Login'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'


function App(props) {
  return (

    <div className='app-wrapper'>

      <HeaderContainer />
      <NavBarContainer_w />

      <div className='content'>

        <Route path='/dialogs'>
          <DialogContainer_w />
        </Route>

        <Route path='/profile/:id?'>
          <ProfileContainer />
        </Route>

        <Route path='/users'>
          <UsersContainer />
        </Route>

        <Route path='/login'>
          <Login />
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

//' /:id? - ? парам может быть а может и не быть