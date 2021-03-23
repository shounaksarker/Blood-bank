import React, { useContext } from 'react';
import { Redirect, Route } from "react-router";
import { DataContext } from '../../App';


function PrivateRoute({ children, ...rest }) {
    const [user, ] =useContext(DataContext)
    return (
      <Route
        {...rest}
        render={({ location }) =>
          user.email ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
  }
  export default PrivateRoute;

// const PrivateRoute = ({ children, ...rest }) => {
//     const [user, ] =useContext(DataContext)
//     return (
//       <Route
//         {...rest}
//         render={({ location }) =>
//           user.email ? (
//             children
//           ) : (
//             <Redirect
//               to={{
//                 pathname: "/login",
//                 state: { from: location }
//               }}
//             />
//           )
//         }
//       />
//     );
//   }
  

// export default PrivateRoute;