import './App.css'
import { BrowserRouter, Switch, Route} from 'react-router-dom'

// page components
import Navbar from './components/Navbar'
import Home from './pages/home/Home'
import Create from './pages/create/Create'
import Recipe from './pages/recipe/Recipe'
import Search from './pages/search/Search'
import ThemeSelector from './components/ThemeSelector'

// styles
import './App.css'
import { useTheme } from './hooks/useTheme'


function App() {
  const { mode } = useTheme()
  
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Navbar/>
        <ThemeSelector/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/create' component={Create}/>
          <Route path='/recipe/:id' component={Recipe}/>
          <Route path='/search' component={Search}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App
