import React, { useContext } from 'react';
import Link from 'next/link';

import {LangContext, GlobalContext} from '../../../context'
import {Footer} from '../../../components'

function ApiTitleIndexPage({api_title}){
  const {getCurrentLang} = useContext(LangContext)
  const {getApiManifestByApiTitle}  = useContext(GlobalContext)
  const api_manifest = getApiManifestByApiTitle(api_title)

  const resources_list = getApiManifestByApiTitle(api_title).result.resources

  function clearDoubleQuote(in_json_href){
    return in_json_href.replace(/"/g,'')
  }

  function getHTMLLinkFromJSON(in_href){
    const diluted_link = clearDoubleQuote(in_href)
    return <a href={diluted_link} target="_blank">{diluted_link}</a>
  }

  function handleNullValue(in_value){
    if (in_value==null){
      return "NULL"
    }else{
      return in_value
    }
  }

  function handleHTMLOutput(in_value){
    if (in_value==null){
      return "NULL"
    }else if(in_value.search('http') > -1){
      return getHTMLLinkFromJSON(in_value)
    }else{
      return in_value
    }
  }

  return(
    <>
      <section>
        <div class="container">
          <Link href={ `/${getCurrentLang()}` } >
            <a>Back</a>
          </Link>
          <div>
            {api_title}
          </div>
        </div>
      </section>

      {
        resources_list.map((x) => {
          return (
            <section>
              <div class="container">
                Resources: {x.shared_id}
                <table class="table" style={{width: "100%"}}>
                  <tbody>
                      {
                        ['description','url','format','is_api','last_modified'].map((y) => {
                          return(
                            <tr>
                              <th>{y}</th>
                              <td>{handleHTMLOutput(x[y])}</td>
                            </tr>
                          )
                        })
                      }

                  </tbody>
                </table>
              </div>
            </section>
          )
        })

      }


      <section>
        <div class="container">
          <pre>
            {JSON.stringify( getApiManifestByApiTitle(api_title) , null, 1)}
          </pre>

        </div>
      </section>

      <Footer></Footer>
    </>
  )
}

export async function getServerSideProps(context){

  return {
    props: context.params
  }
}

export default ApiTitleIndexPage
