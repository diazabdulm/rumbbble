import React, { Fragment } from "react";
import Navigation from "../components/Navigation";

// export default function withNavigation(Component) {
//   return (
//     <Fragment>
//       <Navigation />
//       <Component />
//     </Fragment>
//   );
// }

export default function withNavigation(WrappedComponent) {
  return (props) => (
    <Fragment>
      <Navigation />
      <WrappedComponent />
    </Fragment>
  );
}
