import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../app/redux/store';
import { fetchPerson } from './redux/actions';
import SC from './styled';
import { Person } from '../../types';

export default (() => {
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPerson());
  }, [dispatch]);

  // Why do I need toJson here?
  const person = useSelector((state: RootState) => state.person);

  // console.log('person: ' + JSON.stringify(person, null, 2)); // eslint-disable-line
  // console.log("firstName: " + person.firstName); // eslint-disable-line
  // console.log("healthStatus: " + person.healthStatus); // eslint-disable-line

  if (!person) {
    console.log('return null'); // eslint-disable-line

    return null;
  }

  return (
    <SC.Page>
      <pre>{JSON.stringify(person, null, 2)}</pre>
    </SC.Page>
  );
}) as React.FC;
