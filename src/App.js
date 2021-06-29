import './App.css';
import './css-vars/CSSVars.css'
import Home from './pages'
import SigninPage from './pages/signin'
import ThemeToggle from './components/ThemeToggle'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<>
		<Router>
			<Switch>
				<Route path="/" component={Home} exact />
				<Route path="/signin" component={SigninPage} exact />
			</Switch>
		</Router>
		<ThemeToggle />
		</>
	);
}

export default App;
