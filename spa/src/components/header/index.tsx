import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import SC from './styled';
// import { useAuth } from '../../providers/auth';

export default (() => {
  // const auth = useAuth();
  // auth.service.getUser().then((data: any) => {
  //   console.log(`auth: ${JSON.stringify(data.profile, null, 2)}`); // eslint-disable-line
  // });
  // debugger; // eslint-disable-line
  // auth.getUser();
  // console.log(`auth: ${JSON.stringify(usr, null, 2)}`); // eslint-disable-line
  return (
    <SC.Header>
      <SC.HeaderNav>
        <SC.Logo>IDP &amp; SPA Demo</SC.Logo>
        <SC.HeaderLink to="/persons">Persons</SC.HeaderLink>
        <SC.HeaderLink to="/test">Test</SC.HeaderLink>
      </SC.HeaderNav>
      <SC.AccountInfo to="/account">
        <SC.AccountItem>John Doe</SC.AccountItem>
        <SC.AccountItem>
          <SC.FavIcon icon={faUser} size="lg" color="blue" />
        </SC.AccountItem>

        {/* <SC.DropDown>
          <SC.FavIcon icon={faUser} size="lg" color="blue" />
          <SC.StyledA>DropDown</SC.StyledA>
          <SC.DropDownContent>
            {' '}
            <SC.SubA>Link 1</SC.SubA>
            <SC.SubA>Link 2</SC.SubA>
            <SC.SubA>Link 3</SC.SubA>
          </SC.DropDownContent>
        </SC.DropDown> */}
      </SC.AccountInfo>
    </SC.Header>
  );
}) as React.FC;
