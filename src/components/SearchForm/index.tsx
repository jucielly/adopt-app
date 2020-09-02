import React, { useState, useEffect } from 'react';
import axios from "axios"
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    width: `calc(100% - ${theme.spacing(3) * 2}px)`,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

type Breeds = Record<string, string[]>
const SearchForm = () => {
  const classes = useStyles();

  const [breeds, setBreeds] = useState<Breeds>({})

  const [age, setAge] = useState<number | undefined>()

  const handleAgeChange = (event: React.ChangeEvent<{ value: unknown }>) => setAge(event.target.value as number)

  useEffect(() => {
    const fetchBreeds = async () => {
      const result = await axios("https://dog.ceo/api/breeds/list/all")
      setBreeds(
        result.data.message
      )
    }
    fetchBreeds()
  }, [])

  return (
    <div className="search-form">
      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-breed-label">Raça</InputLabel>
          <Select
            labelId="dog-breed-label"
            id="dog-breed"

          >
            {Object.keys(breeds).map((breed, index) => <MenuItem value={breed} key={index}>{breed}</MenuItem>)}


          </Select>

        </FormControl>

      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-breed-label">sub-raça</InputLabel>
          <Select
            labelId="dog-breed-label"
            id="dog-breed"

          >
            <MenuItem value="1">raça1</MenuItem>
            <MenuItem value="2">raça2</MenuItem>
            <MenuItem value="3">raça3</MenuItem>
          </Select>

        </FormControl>
      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-breed-label">sexo</InputLabel>
          <Select
            labelId="dog-breed-label"
            id="dog-breed"
          >
            <MenuItem value="1">macho</MenuItem>
            <MenuItem value="2">femea</MenuItem>
          </Select>

        </FormControl>
      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-breed-label">idade</InputLabel>
          <Select
            labelId="dog-breed-label"
            id="dog-breed"
            value={age}
            onChange={handleAgeChange}
          >
            <MenuItem value="1">1</MenuItem>
            <MenuItem value="2">2</MenuItem>
          </Select>

        </FormControl>
      </div>

      <button type="submit" className="form-btn">pesquisar</button>
    </div >

  );
}

export default SearchForm;
