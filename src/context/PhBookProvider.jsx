import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhBookContext from './PhBookContext';
import LINKS from '../helpers/fetchURL';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [newData, setNewData] = useState({});
  const [query, setQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(LINKS.API_URL);
      const fetchData = await response.json();
      setData(fetchData);
    }
    getData();
    console.log('fetching')
  }, [newData]);

  return (
    <PhBookContext.Provider
      value={{
        data,
        setData,
        editData,
        setEditData,
        editing,
        setEditing,
        newData,
        setNewData,
        filteredData,
        setFilteredData,
        query,
        setQuery
      }}
    >
      {children}
    </PhBookContext.Provider>
  );
}

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
