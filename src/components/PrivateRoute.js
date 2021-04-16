import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({children, ...rest}) => {
    //const [loggedInUser, setLoggedInUser] = useContext(UserContext)
    var loggedInUser;
    return (
            <div>
        <Route
          {...rest}
          render={({ location }) =>
          loggedInUser.email ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/",
                  state: { from: location },
                }}
              />
            )
          }
        />
      
        </div>
    );
};

export default PrivateRoute;


