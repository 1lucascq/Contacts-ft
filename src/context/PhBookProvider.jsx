import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import PhBookContext from './PhBookContext';
import LINKS from '../helpers/LinksObj';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [editData, setEditData] = useState([]);
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await fetch(LINKS.API_URL);
      const fetchData = await response.json();
      setData(fetchData);
    }
    getData();
  }, []);

  return (
    <PhBookContext.Provider
      value={{
        data,
        setData,
        editData,
        setEditData,
        editing,
        setEditing
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
