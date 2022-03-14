import './UsersWrappreComponent.css';

const UsersWrappreComponent = (props: any): JSX.Element => {
    return(
        <div className="wrapper">
            {props.children}
        </div>
    );
};

export default UsersWrappreComponent;