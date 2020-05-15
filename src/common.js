import React, { Component } from 'react';

import Highlight from 'react-highlight.js'


function checkDevelop(){
  if (process.env.NODE_ENV === 'development') {
    console.log('develop environment')

    return true
  }else{
    return false
  }
}


function debugLog(text_in){
  if(checkDevelop()){
    console.log(text_in)
  }
}


export {
  debugLog
}