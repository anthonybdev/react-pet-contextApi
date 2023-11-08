import React from "react";
import { AppContext } from "../context";


const withGlobalContext = Component => {
  return props => {
    return (
      <AppContext.Consumer>
      {context => {
        return <Component {...props} context={context} />;
      }}
    </AppContext.Consumer>
    )
  }
};

export default withGlobalContext;