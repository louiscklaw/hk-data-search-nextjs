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
    match_api_list: [null]
  };

  componentDidMount(){
    this.updateSearchFilter(this.state.search_filter)
  }

  changeTheWorld = (in_text) => {
    this.setState({helloworld: in_text})
  }

  updateSearchFilter = (in_text) => {
    this.setState({
      ...this.state,
      search_filter: in_text,
      match_api_list: this.filterApiMainfestByTitle(in_text)
    })


  }

  updateMatchApiList = (api_list) => {
    this.setState({...this.state, match_api_list: api_list})
  }

  getApiManifestKeys = () => {
    return Object.keys(this.state.raw_all_api_manifest);
  }

  getApiManifestByApiTitle = (api_name) => {
    return this.state.raw_all_api_manifest[api_name]
  }

  getApiManifestByApiTitleAndField = (api_name, field) => {
    return this.state.raw_all_api_manifest[api_name][field]
  }


  getApiManifestDescription = (api_name) => {
    return this.getApiManifestByApiTitle(api_name).result.resources[0].description;
  }

  getApiManifestNameAndDescriptions = () => {
    return this.getApiManifestKeys().map( (name) => {
      return [name, this.getApiManifestDescription(name)]
    })
  }

  getApiManifestNote = (api_name) => {
    return this.getApiManifestByApiTitle(api_name).result.notes;
  }

  getApiManifestNameAndNotes = () => {
    return this.getApiManifestKeys().map( (name) => {
      return [name, this.getApiManifestNote(name)]
    })
  }



  getApiManifestTitle = (api_name) => {
    return this.getApiManifestByApiTitle(api_name).result.title;
  }

  getApiManifestNameAndTitles = () => {
    return this.getApiManifestKeys().map( (name) => {
      return [name, this.getApiManifestTitle(name)]
    })
  }

  getApiManifestUpdateFrequency = (api_name) => {
    return this.getApiManifestByApiTitle(api_name).result.update_frequency;
  }

  filterApiMainfestByTitle = (text_interest) => {

    var re = new RegExp(text_interest,'g')


    // search by title
    return [
      ...this.getApiManifestNameAndTitles().filter((x) => { return x[1].search(re) > -1 } ),
      ...this.getApiManifestNameAndNotes().filter((x) => { return x[1].search(re) > -1 } ),
      // ...this.getApiManifestNameAndDescriptions().filter((x) => { return x[1].search(re) > -1 } )
    ]

    // if (text_interest.trim().length > 0){
    //   var re = new RegExp(text_interest,'g')

    //   return this.getApiManifestNameAndTitles().filter((x) => { return x[1].search(re) > -1 } )
    // }else{
    //   return this.getApiManifestNameAndTitles().filter((x) => { return x[1].search(re) > -1 } )
    // }
  }

  render() {
    return (
      <GlobalContext.Provider value={{
        ...this.state,
        changeTheWorld: this.changeTheWorld,
        getApiManifestKeys: this.getApiManifestKeys,
        getApiManifestByApiTitle: this.getApiManifestByApiTitle,
        getApiManifestTitle: this.getApiManifestTitle,
        updateSearchFilter: this.updateSearchFilter,
        getApiManifestNameAndTitles: this.getApiManifestNameAndTitles,
        filterApiMainfestByTitle: this.filterApiMainfestByTitle,
        getApiManifestNameAndTitles:this.getApiManifestNameAndTitles,
        }}>
        { this.props.children }
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;
