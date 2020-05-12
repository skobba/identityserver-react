import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/redux/store';
import SC from './styled';

export default (() => {
  const messages = useSelector((state: RootState) => state.messages);

  const { BACKEND, STS_DOMAIN } = process.env;

  return (
    <SC.Page>
      <h1>test-page</h1>
      <h2>process.env</h2>
      <pre>{JSON.stringify(process.env, null, 2)}</pre>

      <h2>ENV</h2>
      <pre>BACKEND: {BACKEND}</pre>
      <pre>STS_DOMAIN: {STS_DOMAIN}</pre>

      <pre>{JSON.stringify(messages, null, 2)}</pre>
      <input
        type="button"
        value="Knapp!!"
        onClick={() => {
          console.log('click!!'); // eslint-disable-line
        }}
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac nibh
        enim. Nullam fringilla malesuada lacinia. Duis sodales, tellus ac
        hendrerit congue, nunc diam blandit est, et fringilla sapien lorem ut
        augue. Vestibulum at pharetra turpis. Suspendisse nibh urna, aliquam non
        condimentum nec, mattis ultrices nisl. Duis porta volutpat neque, eget
        vehicula lorem venenatis non. Curabitur at volutpat augue. Vivamus ut
        sagittis tortor. Nam auctor orci eget ligula venenatis, at feugiat est
        venenatis. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Phasellus viverra posuere iaculis.
        Cras viverra vitae neque eu congue. Mauris massa lorem, feugiat at est
        eu, interdum maximus libero. Etiam auctor pulvinar dui, at fringilla ex
        tincidunt sit amet. Maecenas porta enim urna, ut porttitor felis
        facilisis et. Morbi dolor lacus, aliquam vitae nunc non, eleifend semper
        quam.
      </p>
    </SC.Page>
  );
}) as React.FC;
