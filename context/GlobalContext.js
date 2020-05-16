import React , { Component, createContext } from 'react'

import package_list from '../json_sample/package_list.json';
import raw_all_api_manifest from '../json_sample/all_api_manifest_99.json';

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
  state = {
    helloworld:'helloworld',
    raw_all_api_manifest,
    package_list,
    search_filter: ''
  };

  changeTheWorld = (in_text) => {
    this.setState({helloworld: in_text})
  }

  updateSearchFilter = (in_text) => {
    this.setState({...this.state, search_filter: in_text})
  }

  getApiManifestKeys = () => {
    return Object.keys(this.state.raw_all_api_manifest);
  }

  getApiManifestByApiName = (api_name) => {
    return this.state.raw_all_api_manifest[api_name]
  }

  getApiManifestByApiNameAndField = (api_name, field) => {
    return this.state.raw_all_api_manifest[api_name][field]
  }

  getApiManifestTitle = (api_name) => {
    return this.getApiManifestByApiName(api_name).result.title;
  }

  getApiManifestUpdateFrequency = (api_name) => {
    return this.getApiManifestByApiName(api_name).result.update_frequency;
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        changeTheWorld: this.changeTheWorld,
        getApiManifestKeys: this.getApiManifestKeys,
        getApiManifestByApiName: this.getApiManifestByApiName,
        getApiManifestTitle: this.getApiManifestTitle,
        updateSearchFilter: this.updateSearchFilter
        }}>
        { this.props.children }
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
