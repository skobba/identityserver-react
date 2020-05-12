import React, { useEffect, useState } from 'react';
import SC from './styled';
import env from '../../env';
import { useAuth } from '../../providers/auth';
const { BACKEND, STS_DOMAIN, CLIENT_ID } = env;

// const url = 'https://localhost:8443/connect/userinfo';
const url = 'http://localhost:8080/connect/userinfo';

const usrInfo = '';

const getUserInfo = () => {
  const key = sessionStorage.key(0);
  const value = key !== null ? sessionStorage.getItem(key) : null;
  const jsonValue = value !== null ? JSON.parse(value) : null;

  const { access_token } = jsonValue;

  return fetch(url, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Authorization: `Bearer ${access_token}`
    }
  })
    .then(response => response.json())
    .then(data => {
      // usrInfo = JSON.stringify(data, null, 2);
        console.log(data); // eslint-disable-line
      return JSON.stringify(data, null, 2);
    });

  //   .then(res => {
  //     const resJson = res.json();
  //     const resJsonString = JSON.stringify(resJson, null, 2);
  //     console.log('res: ' + resJsonString); // eslint-disable-line
  //   });
};

export const useGetUserHook = () => {
  const [userInfo, setUserInfo] = useState('');
  useEffect(() => {
    getUserInfo().then(res => {
      setUserInfo(res);
    });
  }, []);
  return userInfo;
};

export default (() => {
  const auth = useAuth();

  const silentRefresh = () => {
    auth.service.signinSilent().then((user: any) => {
      let tid = (new Date()).toTimeString()
      console.log("silent renew success" + tid, user);
    }).catch(function(e: any) {
        console.log("silent renew error", e.message);
    });
  };

  const key = sessionStorage.key(0);
  const value = key !== null ? sessionStorage.getItem(key) : null;
    console.log( // eslint-disable-line
    `${key}=[${value}]`
  );
  const jsonValue = value !== null ? JSON.parse(value) : null;
  // console.log('access_token: ' + jsonValue!.access_token); // eslint-disable-line

  useEffect(() => {
    // const userResult = getUserInfo().then(res => {
    //     console.log('UserInfo: ' + JSON.stringify(res.json(), null, 2)); // eslint-disable-line
    // });
    console.log('usrInfo: ' + usrInfo); // eslint-disable-line
  }, [usrInfo]);

  const userInfo = useGetUserHook();
  return (
    <SC.Page>
      <h1>Account</h1>
      <SC.DefaultButton
        type="button"
        value="Get User Info"
        onClick={() => {
          getUserInfo();
        }}
      />
      <SC.DefaultButton
        type="button"
        value="Logout"
        onClick={() => {
          auth.service.logout()
        }}
      />
      <SC.DefaultButton
        type="button"
        value="Silent Refresh"
        onClick={() => {
          silentRefresh()
        }}
      />
      <h2>User Info</h2>
      <pre>{userInfo}</pre>
      <h2>env</h2>
      <pre>{JSON.stringify(env, null, 2)}</pre>
      <h2>sessionStorage</h2>
      <pre>{JSON.stringify(jsonValue, null, 2)}</pre>
    </SC.Page>
  );
}) as React.FC;
