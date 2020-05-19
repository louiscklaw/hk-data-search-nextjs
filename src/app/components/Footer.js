import React, {useContext} from 'react';

import {GlobalContext} from '../context';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faSnapchat } from '@fortawesome/free-brands-svg-icons'

function Footer(){
  const {match_api_list} = useContext(GlobalContext);
  return(
    <>
      <footer class="footer">
        <div class="container">
          <div class="content has-text-centered">

          <p>
            <a href="" className="social-link">
              <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
            </a>

            <a href="" className="social-link">
              <FontAwesomeIcon icon={faTwitterSquare} size="2x" />
            </a>
            <a href="" className="social-link">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="" className="social-link">
              <FontAwesomeIcon icon={faSnapchat} size="2x" />
            </a>
          </p>

          <p>
            <a href="https://bulma.io">
                <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24" />
            </a>
          </p>

          </div>
        </div>
      </footer>
        <style jsx>{`
          .social-link {
            padding-right: 30px;
          }
        `}</style>
    </>
  )
}

export default Footer;
