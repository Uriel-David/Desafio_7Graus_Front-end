import './ButtonComponent.css'

const ButtonComponent = ({isChangeText, clicked}: any): JSX.Element => {
    return(
        <button onClick={clicked} className='get-button efeito'>{isChangeText ? 'There are no more Users' : 'Get more 10 Users'}</button>
    );
};

export default ButtonComponent;