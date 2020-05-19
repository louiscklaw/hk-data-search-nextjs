import React, { useContext, useEffect } from 'react';
import Link from 'next/link';
import Router from 'next/router'

import {LangContext, GlobalContext} from '../../../context'
import {Footer} from '../../../components'

function ApiTitleIndexPage({api_title}){

  const {getCurrentLang} = useContext(LangContext)
  const {getApiManifestByApiTitle, getApiManifestNameAndTitles, raw_all_api_manifest}  = useContext(GlobalContext)

  useEffect(()=>{
    if (typeof(api_title) == 'undefined'){

    }else if (api_title.length < 3){
      // filter /en
      Router.replace(`/${getCurrentLang()}`)
    } else  {
      // ok request fallen here
    }
  })

  function trueIfUndefined(in_o){
    return typeof(in_o) == 'undefined'
  }

  function trueIfNull(in_o){
    return typeof(in_o) == 'null'
  }


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

  function test(){
    if (trueIfUndefined(getApiManifestByApiTitle(api_title))){

    }else{
      return(
        getApiManifestByApiTitle(api_title).result.resources.map((x) => {
          return (
            <section key={x}>
              <div class="container">
                Resources: {x.shared_id}
                <table class="table" style={{width: "100%"}}>
                  <tbody>
                      {
                        ['name','description','url','format','is_api','last_modified'].map((y) => {
                          return(
                            <tr key={y}>
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
      )
    }

  }

  function handleApiTitleFound(){
    return(
      <>
      <section>
        <div class="container">
          <Link href={ `/${getCurrentLang()}` } >
            <a>Back</a>
          </Link>
        </div>
      </section>
        {
          test()
        }

        <section>
          <div class="container">
            RAW JSON
            <pre>
              {JSON.stringify( getApiManifestByApiTitle(api_title) , null, 1)}
            </pre>

          </div>
        </section>
        <Footer></Footer>

      </>
    )
  }

  function handleApiTitleNotFound(){
    return(
      <>
        <section>
          <div className="container not_found_head">
            <Link href={ `/${getCurrentLang()}` } >
              <a>Back</a>
            </Link>
          </div>
        </section>
        <section>
          <div className="container has-text-centered not_found_body" >
            Api title not found
          </div>
        </section>


        <div className="not_found_footer">
        <Footer></Footer>
        </div>

        <style jsx>{`
          .not_found_footer {
            min-height: 34vh;
          }
          .not_found_head {
            min-height: 33vh;
          }
          .not_found_body {
            min-height: 33vh;
          }
        `}</style>
      </>
    )
  }

  function handleApiPrint(){
    if (getApiManifestNameAndTitles().filter(x => x[0] == api_title).length > 0){
      return handleApiTitleFound()
    }else{
      return handleApiTitleNotFound()
    }
  }

  return(
    <>
      {handleApiPrint()}
    </>
  )
}

export async function getServerSideProps(context){
  return {
    props: context.params
  }
}

export default ApiTitleIndexPage
