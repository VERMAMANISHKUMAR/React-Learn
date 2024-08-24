import React, { useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState({ name: 'John', age: 25 });

  const updateName = () => {
    setUser(prevState => ({ ...prevState, name: 'Jane' }));
  };

  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={updateName}>Change Name</button>
    </div>
  );
}

export default UserProfile;
