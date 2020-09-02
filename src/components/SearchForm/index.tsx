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
  useEffect(() => {
    const fetchBreeds = async () => {
      const result = await axios("https://dog.ceo/api/breeds/list/all")
      setBreeds(
        result.data.message
      )
    }
    fetchBreeds()
  }, [])

  const [subBreeds, setSubBreeds] = useState<string[]>([])



  const [age, setAge] = useState<number | undefined>()
  const handleAgeChange = (event: React.ChangeEvent<{ value: unknown }>) => setAge(event.target.value as number)
  let ages: number[] = []
  for (let i = 1; i <= 15; i++) {
    ages.push(i)
  }

  const [breed, setBreed] = useState<string | undefined>()
  const handleBreedChange = (event: React.ChangeEvent<{ value: unknown }>) => setBreed(event.target.value as string)

  const [subBreed, setSubBreed] = useState<string | undefined>()
  const handleSubBreedChange = (event: React.ChangeEvent<{ value: unknown }>) => setSubBreed(event.target.value as string)


  const [gender, setGender] = useState<string | undefined>()
  const handleGenderChange = (event: React.ChangeEvent<{ value: unknown }>) => setGender(event.target.value as string)
  const genders: string[] = ["Fêmea", "Macho"]


  useEffect(() => {
    setSubBreed(undefined)
    setSubBreeds(breeds[breed || ""] || [])
  }, [breed])


  return (
    <div className="search-form">
      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-breed-label">Raça</InputLabel>
          <Select
            labelId="dog-breed-label"
            id="dog-breed"
            value={breed}
            onChange={handleBreedChange}

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
            value={subBreed}
            onChange={handleSubBreedChange}
          >

            {subBreeds.map((subBreed, index) => <MenuItem value={subBreed} key={index}>{subBreed}</MenuItem>)}


          </Select>

        </FormControl>
      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-breed-label">sexo</InputLabel>
          <Select
            labelId="dog-breed-label"
            id="dog-breed"
            value={gender}
            onChange={handleGenderChange}
          >
            {genders.map((gender, index) => <MenuItem value={gender} key={index}>{gender}</MenuItem>)}


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
            {ages.map((age, index) => <MenuItem value={age} key={index}>{age}</MenuItem>)}


          </Select>

        </FormControl>
      </div>

      <input type="submit" className="form-btn" value="pesquisar"/>
    </div >

  );
}

export default SearchForm;
