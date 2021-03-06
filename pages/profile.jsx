import React from 'react';

import AdDisplay from '../src/components/AdComponent';

import Header from '../src/components/Header';
import BoxProfile from '../src/components/profile/profilebox';

function Profile() {
  return (
    <div>
      <Header />
      <AdDisplay />
      <BoxProfile />
    </div>
  );
}

export default Profile;
