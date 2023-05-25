import React, { useState } from 'react';
import { faCheck, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import theme from '../../styles/theme';

const FollowingButton = ({
  width = '80px',
  height = '30px',
  init = false,
  size = '13px',
}) => {
  const [following, setFollowing] = useState(init);

  const handleFollow = () => {
    setFollowing(prev => !prev);
  };

  return (
    <Follow
      onClick={handleFollow}
      isSelect={following}
      width={width}
      height={height}
      size={size}
    >
      {following ? (
        <FontAwesomeIcon icon={faPlus} />
      ) : (
        <FontAwesomeIcon icon={faCheck} />
      )}
      {following ? ' 팔로잉' : ' 팔로우'}
    </Follow>
  );
};

const Follow = styled.button`
  width: ${props => props.width};
  height: ${props => props.height};
  border-radius: 5px;
  background-color: ${props => (props.isSelect ? theme.white : theme.orange)};
  outline: none;
  border: ${props => (props.isSelect ? '1px solid black' : 'none')};
  font-weight: bold;
  font-size: ${props => props.size};
  color: ${props => (props.isSelect ? theme.black : theme.white)};
`;

export default FollowingButton;
