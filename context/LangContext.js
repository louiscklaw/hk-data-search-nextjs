import React , { Component, createContext } from 'react'

import zh_hk from '../lang/zh-hk'
import en_us from '../lang/en-us'

export const LangContext = createContext();

class LangContextProvider extends Component {
  state = {
    active_lang: "en_us",
    zh_hk: zh_hk,
    en_us: en_us
  };

  changeLang = (in_text) => {
    console.log(this.state);
    this.setState({...this.state, active_lang: in_text})
  }

  say = (meaning) => {
    console.log(this.state.active_lang)
    // console.log(this.state[this.state.active_lang][meaning]);
    console.log(Object.keys(this.state[this.state.active_lang]).indexOf(meaning) );
    if (Object.keys(this.state[this.state.active_lang]).indexOf(meaning) > -1){
      return this.state[this.state.active_lang][meaning]
    }else{
      return meaning
    }
  }

  render() {
    return (
      <LangContext.Provider value={{
        ...this.state,
        changeLang: this.changeLang,
        say: this.say
        }}>
        { this.props.children }
      </LangContext.Provider>
    );
  }
}

export default LangContextProvider;
