import React , { Component, createContext } from 'react'

import package_list from '../json_sample/package_list.json';
import raw_all_api_manifest from '../json_sample/all_api_manifest_99.json';

export const GlobalContext = createContext();

class GlobalContextProvider extends Component {
  state = {
    helloworld:'helloworld',
    raw_all_api_manifest,
    package_list,
    search_filter: '物業',
    match_api_list: null
  };

  changeTheWorld = (in_text) => {
    this.setState({helloworld: in_text})
  }

  updateSearchFilter = (in_text) => {
    console.log('calling updateSearchFilter');
    this.setState({
      ...this.state,
      search_filter: in_text,
      match_api_list: this.filterApiMainfestByTitle(in_text)
    })


  }

  updateMatchApiList = (api_list) => {
    console.log('calling updateMatchApiList');
    this.setState({...this.state, match_api_list: api_list})
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

  getApiManifestNameAndTitles = () => {
    return this.getApiManifestKeys().map( (name) => {
      return [name, this.getApiManifestTitle(name)]
    })
  }

  getApiManifestTitle = (api_name) => {
    return this.getApiManifestByApiName(api_name).result.title;
  }

  getApiManifestUpdateFrequency = (api_name) => {
    return this.getApiManifestByApiName(api_name).result.update_frequency;
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  filterApiMainfestByTitle = (text_interest) => {
    console.log('filterApiMainfestByTitle');

    if (text_interest.trim().length > 0){
      var re = new RegExp(text_interest,'g')

      return this.getApiManifestNameAndTitles().filter((x) => { return x[1].search(re) > -1 } )
    }else{
      return this.getApiManifestNameAndTitles().filter((x) => { return x[1].search(re) > -1 } )
    }
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        changeTheWorld: this.changeTheWorld,
        getApiManifestKeys: this.getApiManifestKeys,
        getApiManifestByApiName: this.getApiManifestByApiName,
        getApiManifestTitle: this.getApiManifestTitle,
        updateSearchFilter: this.updateSearchFilter,
        getApiManifestNameAndTitles: this.getApiManifestNameAndTitles,
        filterApiMainfestByTitle: this.filterApiMainfestByTitle
        }}>
        { this.props.children }
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
