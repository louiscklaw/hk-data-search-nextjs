import React , { Component, createContext } from 'react'
import meanings from '../lang/meanings';

import zh from '../lang/zh'
import en from '../lang/en'

export const LangContext = createContext();

class LangContextProvider extends Component {
  state = {
    active_lang: "en",
    meanings: meanings
  };

  updateLang = (lang) =>{
    this.setState({...this.state, active_lang: lang})
  }

  say = (lang, meaning) => {
    console.log(lang)

    if (this.state.active_lang == 'zh'){
      return zh.HELLOWORLD
    }else{
      return en.HELLOWORLD
    }
  }

  render() {
    return (
      <LangContext.Provider value={{
        ...this.state,
        updateLang: this.updateLang,
        say: this.say
        }}>
        { this.props.children }
      </LangContext.Provider>
    );
  }
}

export default LangContextProvider;
