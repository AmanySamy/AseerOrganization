/* This API wrapper is useful because it:
   1. Centralizes our Axios default configuration.
   2. Abstracts away the logic for determining the baseURL.
   3. Provides a clear, easily consumable list of JavaScript functions
      for interacting with the API. This keeps API calls short and consistent. 
*/
import axios from 'axios';
import { Component } from 'react'
import  {base} from "../base_url.js";


let api = null;
class API extends Component {
  constructor(props) {
    super(props)
    console.log(base)
    this.state = {
       
    }
  }
  
  
  getInitializedApi = () => {
    if (api) return api; // return initialized api if already initialized.
    return (api = axios.create({
      baseURL: this.getBaseUrl(),
      responseType: 'json'
    }));
  }
  
  // Helper functions
  getBaseUrl = () => {
    if(base !== '') return base +'/ar';
    return 'http://asda.codabella.net/ar';
  }
  
  get = (url) => {   
    let Initial = this.getInitializedApi()
    return Initial.get(url);
  }
  
  post = (url, data) => {
    return this.getInitializedApi().post(url, data);
  }

  getContent = (url) => {
    return this.get(url);
  }
  
}

export default (new API())