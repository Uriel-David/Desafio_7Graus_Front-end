import './UsersProfileComponent.css';

const UsersProfileComponent = (props: any): JSX.Element => {
    return(
        <div className='user-profile'>
            <div className='profile-top'>
                {props.children[0]}
                <div className='profile-info'>
                    {props.children[1]}
                    {props.children[2]}
                    {props.children[3]}
                </div>
            </div>

            <div className='profile-bottom'>
                <div className='profile-info'>
                    {props.children[4]}
                </div>
            </div>

            <div className='profile-bottom'>
                <div className='profile-info'>
                    {props.children[5]}
                </div>
            </div>
        </div>
    );
};

export default UsersProfileComponent;