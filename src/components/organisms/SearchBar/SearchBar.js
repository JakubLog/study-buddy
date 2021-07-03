import React from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo } from './SeachBar.styles';

const SearchBar = () => {
  return (
    <SearchBarWrapper>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input placeholder="Find student" />
    </SearchBarWrapper>
  );
};

export default SearchBar;
