import './ButtonComponent.css'

const ButtonComponent = ({isChangeText, clicked, verifyIncrement}: any): JSX.Element => {
    return(
        <button onClick={clicked} className='get-button efeito' data-testid="getUsers-button">{isChangeText ? 'There are no more Users' : 'Get more 10 Users'}</button>
    );
};

export default ButtonComponent;