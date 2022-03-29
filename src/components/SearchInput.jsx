import React, { useContext, useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import PhBookContext from '../context/PhBookContext';
import filterData from '../helpers/filterData';

export default function SearchInput() {
  const { query, setQuery, data } = useContext(PhBookContext);
  const [contactsNames, setContactsNames] = useState([]);

  useEffect(() => {
    if (query) {
      setContactsNames(filterData(data, query).map(({name}) => name));
    }

  }, [data, query]);

  function isOptionEqualToValue(option, fieldValue) {
    console.log(option);
    console.log(fieldValue);
    if (!fieldValue) return true;
    if (option.name) return option.name.includes(fieldValue);
    if (!option.name) return option.toLowerCase().includes(fieldValue.toLowerCase());
  }

  return (
      <Autocomplete
        disablePortal
        // fullWidth="true"
        isOptionEqualToValue={ (opt, fldValue) => isOptionEqualToValue(opt, fldValue) }
        id="nameFilter"
        size="small"
        options={ contactsNames }
        value={ query }
        onInputChange={ (event, newQuery) => setQuery(newQuery || event.target.value) }
        sx={ { width: '100%', paddingLeft: '3em' } }
        renderInput={ (params) => <TextField { ...params } label="Search" /> }
      />
  );
}
