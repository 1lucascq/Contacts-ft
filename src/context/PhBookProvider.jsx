import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhBookContext from './PhBookContext';
import LINKS from '../helpers/fetchURL';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [editing, setEditing] = useState(false);
  const [newData, setNewData] = useState({});

  useEffect(() => {
    async function getData() {
      const response = await fetch(LINKS.API_URL);
      const fetchData = await response.json();
      setData(fetchData);
    }
    getData();
    console.log('fez o fet')
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
        setNewData
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
