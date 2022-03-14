import './SubButtonComponent.css'

const SubButtonComponent = ({isChangeText, clicked}: any): JSX.Element => {
    return(
        <button onClick={clicked} className='get-button efeito' data-testid="removeUsers-button">
            {isChangeText ? 'Remove 10 Users' : 'There is no allows less Users'}
        </button>
    );
};

export default SubButtonComponent;