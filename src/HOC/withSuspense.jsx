import React from 'react';
import {Redirect, withRouter} from "react-router-dom";
import {connect} from "react-redux";
import Preloader from "../common/preloader/preloader";




export const  withSuspense =(Component) => {



    return (props)=>{
      return   <React.Suspense fallback={<Preloader/>}>
        <Component {...props} />
      </React.Suspense>
    }
}


export default withSuspense