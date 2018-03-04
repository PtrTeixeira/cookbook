import axios, { AxiosResponse } from 'axios'
import * as React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import stravaLogo from './api_logo_pwrdBy_strava_horiz_gray.svg'
import './App.css'
import loginButton from './btn_strava_connectwith_light.svg'

import { Dashboard } from './dashboard/Dashboard';
import { Header } from './header/Header'
import { IWeeklyResults } from "./heatmap/actions"


interface IAppState {
  error: any,
  isLoaded: boolean,
  weeklyResults: IWeeklyResults | null
}

function withProps(component: JSX.Element) {
  return (props: {}) => component;
}

function HomeRoute() {
  return (
  <Route exact={true} path="/" render={withProps(
     <a href="/api/strava/login">
       <img src={loginButton} alt="Connect with Strava" className="home-connect-btn" />
     </a>
  )} />)
}

function WeekMapRoute(props: IAppState) {
  return (
  <Route path="/dashboard" render={withProps(
    <Dashboard {...props}/>
  )} />)
}


function loadWeeklyResults(): Promise<IWeeklyResults> {
  const storageContents = sessionStorage.getItem("results")
  if (storageContents != null) {
    return Promise.resolve(JSON.parse(storageContents))
  } else {
    return axios
      .get("/api/punchcard")
      .then((response: AxiosResponse<IWeeklyResults>) => response.data)
      .then((data: IWeeklyResults) => {
        sessionStorage.setItem("results", JSON.stringify(data))
        return data
      });
  }
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any) {
    super(props)
    this.state = {
      error: null,
      isLoaded: false,
      weeklyResults: null
    }
  }

  public componentDidMount() {
    loadWeeklyResults()
      .then(
        (data: IWeeklyResults) => {
          this.setState({
            isLoaded: true,
            weeklyResults: data
          })
        },
        (error) => {
          this.setState({
            error: `Failed to load data from server: ${error.response.data}`,
            isLoaded: true
          })
        })
  }

  public render() {
    return (
      <Router>
        <div className="App">
            <Header />

            <HomeRoute />
            <WeekMapRoute {...this.state} />
            <footer>
              <img src={stravaLogo} alt="Powered by Strava" className="app-strava-logo" />
            </footer>
          </div>
      </Router>
    )
  }
}

export default App;