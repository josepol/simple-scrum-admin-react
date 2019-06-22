import React from 'react';
import PropTypes from 'prop-types';

function LoginForm(props) {
    const { onLoginSubmit } = props;
    return (
        <div>
            <span>loginSubmit</span>
            <button type="button" onClick={onLoginSubmit}>Clickme</button>
        </div>
    );
}

LoginForm.propTypes = {
    onLoginSubmit: PropTypes.func.isRequired,
};

export default LoginForm;
