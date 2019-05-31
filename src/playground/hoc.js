import React from 'react';
import ReactDOM from 'react-dom';
import { AST_PropAccess } from 'terser';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);



const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
        {props.isAuthenticated ? <WrappedComponent {...props} /> : <p>Please log in</p>}
        </div>
    )
}

const AuthInfo = requireAuthentication(Info);


// ReactDOM.render(<AdminInfo isAdmin={true} info= "Yo"/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={false} info= "Yo"/>, document.getElementById('app'));