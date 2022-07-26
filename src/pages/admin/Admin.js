import React from 'react';
import { getAllEntries } from '../../api/admin';
import UserItem from '../../components/Admin/UserItem';

const Admin = () => {
  const [allEntries, setAllEntries] = React.useState([]);

  const fetchItems = React.useCallback(async () => {
    const entries = await getAllEntries();
    setAllEntries(entries.data);
  }, []);
  React.useEffect(() => fetchItems, [fetchItems]);

  return (
    <>
      {allEntries.map((user) => (
        <UserItem
          user={user}
          setItems={setAllEntries}
          fetchItems={fetchItems}
          key={user.username}
        />
      ))}
    </>
  );
};
export default Admin;
