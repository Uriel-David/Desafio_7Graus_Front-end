import './buttonComponent.css'

const Button = ({clicked}: any): JSX.Element => {
    return(
        <button onClick={clicked}>Get more 10 User's</button>
    );
}

export default Button;