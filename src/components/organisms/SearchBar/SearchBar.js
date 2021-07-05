import React, { useRef, useEffect } from 'react';
import { Input } from 'components/atoms/Input/Input';
import { SearchBarWrapper, StatusInfo, HintWrapper, HintItem } from './SeachBar.styles';
import useSearchBar from 'hooks/useSearchBar';
import { useCombobox } from 'downshift';
import { debounce } from 'lodash';

const SearchBar = () => {
  const searchInput = useRef(null);
  const { found, prepareAndSendQuery } = useSearchBar(searchInput);
  const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
    items: found,
    onInputValueChange: prepareAndSendQuery,
  });

  useEffect(() => {
    const input = searchInput.current;
    input.addEventListener('keyup', debounce(prepareAndSendQuery, 500));
    return () => input.removeEventListener('keyup', prepareAndSendQuery);
    // eslint-disable-next-line
  }, []);

  return (
    <SearchBarWrapper {...getComboboxProps()}>
      <StatusInfo>
        <p>Logged as:</p>
        <p>
          <strong>Teacher</strong>
        </p>
      </StatusInfo>
      <Input {...getInputProps({ ref: searchInput })} placeholder="Find student" />
      <HintWrapper {...getMenuProps()} isVisible={isOpen && found.length > 0}>
        {isOpen &&
          found.map((item, index) => (
            <HintItem isHighlighted={highlightedIndex === index} key={`${item}${index}`} {...getItemProps({ item, index })}>
              {item}
            </HintItem>
          ))}
      </HintWrapper>
    </SearchBarWrapper>
  );
};

export default SearchBar;
