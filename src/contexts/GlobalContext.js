import React , { Component, createContext } from 'react'

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
  state = {
    helloworld: 'helloworld context'
  };

  updateHelloworld = (text_to_update) => {
    this.setState({...this.state, helloworld: text_to_update})
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        updateHelloworld: this.updateHelloworld
        }}>
        { this.props.children }
      </GlobalContext.Provider>
     );
  }
}

export default GlobalContextProvider;