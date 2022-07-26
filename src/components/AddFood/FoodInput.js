import { Autocomplete, TextField } from '@mui/material';
import React from 'react';
import { getAutoCompleteOptions } from '../../api/nutritionix';

const FoodInput = ({ handleSelectionChange }) => {
  const [options, setOptions] = React.useState([{ food_name: '' }]);

  const handleTextChange = async (e) => {
    const options = await getAutoCompleteOptions(e.target.value);
    setOptions(options);
  };

  return (
    <>
      <Autocomplete
        id="food-input"
        freeSolo
        options={options && options.map((o) => o.food_name)}
        onChange={handleSelectionChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter food name"
            name="name"
            onChange={handleTextChange}
          />
        )}
      />
    </>
  );
};

export default FoodInput;
