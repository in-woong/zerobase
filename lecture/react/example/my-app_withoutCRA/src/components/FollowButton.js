// React Component!
// Follow <-> following
import React from 'react';
export default function FollowButton() {
  const [following, setFollowing] = React.useState(false);
  const commonBtnStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '12px',
    right: '16px',
    width: '100px',
    height: '36px',
    borderRadius: '9999px',
    fontWeight: 'bold',
    cursor: 'pointer',
  };

  const followBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: 'black',
    color: 'white',
  };
  const followingBtnStyle = {
    ...commonBtnStyle,
    backgroundColor: 'white',
    color: 'black',
    border: '1px solid #cfd9de',
  };

  return (
    <div
      onClick={() => setFollowing(!following)}
      style={following ? followingBtnStyle : followBtnStyle}
    >
      {following ? 'following' : 'Follow'}
    </div>
  );
}
