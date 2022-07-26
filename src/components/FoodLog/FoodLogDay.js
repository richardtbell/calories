import {
  ExpandLess,
  ExpandMore,
  SentimentVeryDissatisfied,
  SentimentVerySatisfied,
} from '@mui/icons-material';
import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { green, pink } from '@mui/material/colors';
import React from 'react';
import { roundToTwo } from '../../utils/calculateCalories';
import FoodLogEntry from './FoodLogEntry';

const FoodLogDay = ({ item, calorieLimit, fetchItems }) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const hasSurpasedCalorieLimit = item.totalCalories > calorieLimit;
  return (
    <>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>
          {hasSurpasedCalorieLimit ? (
            <SentimentVeryDissatisfied sx={{ color: pink[500] }} />
          ) : (
            <SentimentVerySatisfied sx={{ color: green[500] }} />
          )}
        </ListItemIcon>
        <ListItemText
          primary={item.date}
          secondary={`${roundToTwo(item.totalCalories)}kcal`}
        />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item &&
            item.entries.map((entry, index) => (
              <FoodLogEntry
                entry={entry}
                key={entry.time + index}
                fetchItems={fetchItems}
              />
            ))}
        </List>
      </Collapse>
    </>
  );
};
export default FoodLogDay;
