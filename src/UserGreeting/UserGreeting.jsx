import PropTypes from 'prop-types';
import './UserGreeting.css';

function UserGreeting(props){
    
    /* if(props.isLoggedIn){
        return <h2>Welcome {props.username || "Guest"}</h2>;
    }
    else{
        return <h2>Please log in</h2>;
    } */

    /* return(props.isLoggedIn ? <h2 className="welcome-message">Welcome {props.username}</h2> :
                              <h2 className="login-message">Please log in</h2>); */

    const welcomeMessage =  <h2 className="welcome-message">
                            Welcome {props.username}
                            </h2>

    const loginMessage =    <h2 className="login-message">
                            Please log in
                            </h2>

    return(props.isLoggedIn ? welcomeMessage : loginMessage);

}

UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}

UserGreeting.defaultProps = {
    isLoggedIn: false, 
    username: "Guest", 
}

export default UserGreeting