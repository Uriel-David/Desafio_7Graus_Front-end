import './App.css';
import { Fragment, useEffect, useState } from 'react'
import Button from './components/buttonComponent';
import axios from 'axios';

function App() {

  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(true);
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
    setLoading(true);
    setTimeout(() => {
        if(limitUsers >= userData.length) {
          setLimitUsers(userData.length);
        } else {
          setLimitUsers(limitUsers + 10);
        }
        setLoading(false);
    }, 2000);
  }

  return(
    <div className="App">
        {loading ? (
          <h1>Loading...</h1>
        ):(
          <div className="wrapper">
            {userData.map((user: any, index: number) => {
              for(index; index < limitUsers; index++) {
                return(
                  <Fragment key={index}>
                    <div>
                      <img src={user.picture.large} alt="img-profile"></img>
                      <p>{user.name.first} {user.name.last}</p>
                    </div>
                  </Fragment>
                );
              }
              return <></>;
            })}
          </div>
        )}
      <div className='buttons-icons-content'>
        <Button clicked={onClickHandler} />
      </div>
    </div>
  );
}

export default App;
