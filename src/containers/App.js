import React from 'react'

import { GlobalCss } from '../helpers/Global'
import { TranslationContext, translations } from '../helpers/translations'

import { Header } from '../components/Header'
import { Dashboard } from '../pages/dashboard'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      language: 'en-US' 
    }
  }

  handleLanguageChange = (lang) => {
    this.setState(state => ({
      language: lang,
    }))
  }
  render() {
    return (
      <React.Fragment>
        <TranslationContext.Provider value={translations[this.state.language]}>
          <GlobalCss />
          <Header handleLanguageChange={this.handleLanguageChange}/>
          <Dashboard />
        </TranslationContext.Provider>
      </React.Fragment>
    )
  }
}

export default App
