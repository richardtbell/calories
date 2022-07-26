import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemButton, ListItemText } from '@mui/material';
import React from 'react';
import AddNewFoodModal from '../AddFood/AddNewFoodModal';
import FoodLogDay from '../FoodLog/FoodLogDay';

const UserItem = ({ user, setItems, fetchItems }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemText primary={user.username} />
        <AddNewFoodModal
          setItems={setItems}
          buttonText="Add new food"
          user={user}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {user &&
            user.foodEntries.map((day) => (
              <FoodLogDay
                item={day}
                fetchItems={fetchItems}
                key={user.username + day.date}
              />
            ))}
        </List>
      </Collapse>
    </>
  );
};
export default UserItem;
