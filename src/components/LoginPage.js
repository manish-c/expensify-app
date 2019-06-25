import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
    <div className="box-layout">
        <div className="box-layout__box">
            <h1 className="box-layout__title">Expensify</h1>
            <p>Let's simplify your expenses.</p>
            <button className="button" onClick={startLogin}>Login with Google</button>
        </div>
        
    </div>
);

const maoDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined, maoDispatchToProps)(LoginPage);