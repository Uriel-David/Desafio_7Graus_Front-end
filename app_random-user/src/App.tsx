import { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import AddButtonComponent from './components/AddButtonComponent';
import UsersWrappreComponent from './components/UsersWrappreComponent';
import UsersProfileComponent from './components/UsersProfileComponent';
import SubButtonComponent from './components/SubButtonComponent';

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [subVerifyButtonText, setSubVerifyButtonText] = useState(false);
  const [addVerifyButtonText, setAddVerifyButtonText] = useState(false);
  const [limitUsers, setLimitUsers] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      axios.get('https://randomuser.me/api/?results=2000')
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

  const onClickHandlerAdd = () => {
    setTimeout(() => {
        if(limitUsers >= userData.length) {
          setLimitUsers(userData.length);
          setAddVerifyButtonText(true);
        } else {
          setSubVerifyButtonText(true);
          setLimitUsers(limitUsers + 10);
        }
    }, 2000);
  }

  const onClickHandlerSub = () => {
    setTimeout(() => {
        if(limitUsers == 10) {
          setSubVerifyButtonText(false);
        } else {
          setSubVerifyButtonText(true);
          setLimitUsers(limitUsers - 10);
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
                  <UsersProfileComponent key={index}>
                    <img src={user.picture.large} alt="img-profile"></img>
                    <span>Name: {user.name.first}, {user.name.last}</span>
                    <span>&nbsp;|&nbsp;</span>
                    <span>Age: {user.dob.age}</span>
                    <span>Email: {user.email}</span>
                    <span>Phone: {user.phone}</span>
                  </UsersProfileComponent>
                );
              }
              return <></>;
            })}
          </UsersWrappreComponent>
        )}
      <div className='buttons-icons-content'>
        <AddButtonComponent isChangeText={addVerifyButtonText} clicked={onClickHandlerAdd} />
        <span>&nbsp;|&nbsp;</span>
        <SubButtonComponent isChangeText={subVerifyButtonText} clicked={onClickHandlerSub} />
      </div>
    </div>
  );
}

export default App;
