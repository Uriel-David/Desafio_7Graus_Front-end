import './AddButtonComponent.css'

const AddButtonComponent = ({isChangeText, clicked}: any): JSX.Element => {
    return(
        <button onClick={clicked} className='get-button efeito' data-testid="getUsers-button">
            {isChangeText ? 'There are no more Users' : 'Get more 10 Users'}
        </button>
    );
};

export default AddButtonComponent;