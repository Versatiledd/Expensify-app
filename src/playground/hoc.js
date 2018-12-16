// Higher Order Component(HOC)
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from "react";
import ReactDOM from "react-dom";

const Info = props => {
  return (
    <div>
      <h1>Info</h1>
      <p>The info: {props.info}</p>
    </div>
  );
};

const withAdminWarning = WrappedComponent => {
  return props => (
    <div>
      {props.isAdmin && <p>This is private info. Please dont share </p>}
      <WrappedComponent {...props} />
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);

const requireAuthentication = WrappedComponent => {
  const text = "To jest panel admina : Wypierdalaj";
  return props => (
    <div>
      {/* {props.isAuthenticated && <p> {text}</p>}
      {!props.isAuthenticated && (
        <p> Chłopie wiesz gdzie jesteś ? Zaloguj się</p>
      )} */}
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />
      ) : (
        <p>Chłopie wiesz gdzie jesteś ? Zaloguj się </p>
      )}
    </div>
  );
};

const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(
//   <AdminInfo isAdmin={true} info="Nauka programowania to ciężka sprawa." />,
//   document.getElementById("app")
// );

ReactDOM.render(
  <AuthInfo
    isAuthenticated={false}
    info="Nauka programowania to ciężka sprawa."
  />,
  document.getElementById("app")
);
