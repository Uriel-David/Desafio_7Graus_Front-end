import { Fragment, useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import ButtonComponent from './components/ButtonComponent';
import UsersWrappreComponent from './components/UsersWrappreComponent';
import UsersProfileComponent from './components/UsersProfileComponent';

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verifyButtonText, setVerifyButtonText] = useState(false);
  const [limitUsers, setLimitUsers] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://randomuser.me/api/?results=20')
        .then((response) => {
          setUserData(response.data.results);
        }).catch((error) => {
          console.log(error);
          setLoading(true);
        }).finally(() => {
          setLoading(false);
        });
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickHandler = () => {
    setTimeout(() => {
        if(limitUsers >= userData.length) {
          setLimitUsers(userData.length);
          setVerifyButtonText(true);
        } else {
          setLimitUsers(limitUsers + 10);
        }
    }, 2000);
  }

  return(
    <div className="App">
        {loading ? (
          <div id='loading-page'>
            <h1>Loading...</h1>
          </div>
        ):(
          <UsersWrappreComponent>
            {userData.map((user: any, index: number) => {
              for(index; index < limitUsers; index++) {
                return(
                  <Fragment key={index}>
                    <UsersProfileComponent>
                      <img src={user.picture.large} alt="img-profile"></img>
                      <span>Name: {user.name.first}, {user.name.last}</span>
                      <span>&nbsp;|&nbsp;</span>
                      <span>Age: {user.dob.age}</span>
                      <span>Email: {user.email}</span>
                      <span>Phone: {user.phone}</span>
                    </UsersProfileComponent>
                  </Fragment>
                );
              }
              return <></>;
            })}
          </UsersWrappreComponent>
        )}
      <div className='buttons-icons-content'>
        <ButtonComponent isChangeText={verifyButtonText} clicked={onClickHandler} />
      </div>
    </div>
  );
}

export default App;
