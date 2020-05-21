import React, {useContext} from 'react';

import {GlobalContext} from '../context';

function Footer(){
  const {match_api_list} = useContext(GlobalContext);
  return(
    <>
      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">

          <p>
            <a href="" className="social-link">
              {/* <FontAwesomeIcon icon={faFacebookSquare} size="2x" /> */}
              <i class="fab fa-facebook-square"></i>
            </a>

            <a href="" className="social-link">
              {/* <FontAwesomeIcon icon={faTwitterSquare} size="2x" /> */}
              <i class="fab fa-twitter-square"></i>
            </a>
            <a href="" className="social-link">
              {/* <FontAwesomeIcon icon={faInstagram} size="2x" /> */}
              <i class="fab fa-instagram-square"></i>
            </a>
            <a href="" className="social-link">
              {/* <FontAwesomeIcon icon={faSnapchat} size="2x" /> */}
              <i class="fab fa-snapchat-square"></i>
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
