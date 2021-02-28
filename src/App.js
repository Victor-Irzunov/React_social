import React from 'react'
import { Header } from './components/stat/Header.jsx'
import { Navbar } from './components/stat/Navbar.jsx'
import { Profile } from './components/content/Profile/Profile.jsx'
import { DialogContainer } from './components/content/Dialogs/Dialogs_Container'
import { BrowserRouter, BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css'


function App(props) {
  return (

    <BrowserRouter>
      <div className='app-wrapper'>

        <Header />
        <Navbar />

        <div className='content'>

          <Route path='/dialogs'>
            <DialogContainer store={props.store} />
          </Route>

          <Route path='/profile'>
            <Profile store={ props.store}/>
          </Route>


          {/* <Route path='/dialogs' render={() => <Dialogs data={props} /> } />
          <Route path='/profile' render={() => <Profile data={props} /> } /> */}

        </div>
      </div>
    </BrowserRouter>

  )
}
export default App;

//(Route - следит за path='/dialogs')

//> wrapper(англ) - обертка
//> workspace(англ) - рабочее место