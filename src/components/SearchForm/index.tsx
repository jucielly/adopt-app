import React, { useState, useEffect } from 'react';
import axios from "axios"
import './style.css';
import { useForm, Controller } from "react-hook-form"
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from "@material-ui/core/FormHelperText"

type Breeds = Record<string, string[]>
type FormValues = {
  breed: string
  subBreed: string
  gender: string
  age: number
}

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(3),
    width: `calc(100% - ${theme.spacing(3) * 2}px)`,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));


let ages: number[] = []
for (let i = 1; i <= 15; i++) {
  ages.push(i)
}

const genders: string[] = ["Fêmea", "Macho"]

const SearchForm = () => {
  const classes = useStyles();
  const { control, handleSubmit, watch, errors } = useForm<FormValues>()

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

  const selectedBreed = watch("breed")

  useEffect(() => {
    setSubBreeds(breeds[selectedBreed] || [])
  }, [selectedBreed])



  const onSubmit = (data: FormValues) => console.log(data)

  return (
    <form className="search-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="search-form-item">
        <FormControl className={classes.formControl} error={!!errors.breed}>
          <InputLabel id="dog-breed-label">Raça</InputLabel>
          <Controller
            name="breed"
            control={control}
            defaultValue=""
            rules={{ required: "Escolha um" }}
            render={props => <Select
              labelId="dog-breed-label"
              id="dog-breed"
              {...props}>
              {Object.keys(breeds).map((breed, index) => <MenuItem value={breed} key={index}>{breed}</MenuItem>)}
            </Select>}
          />
         {errors.breed && <FormHelperText>{errors.breed?.message}</FormHelperText>}

        </FormControl>
      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-sub-breed-label">sub-raça</InputLabel>
          <Controller
            name="subBreed"
            control={control}
            defaultValue=""
            render={props => <Select
              labelId="dog-sub-breed-label"
              id="dog-sub-breed"
              {...props}>
              {subBreeds.map((subBreed, index) => <MenuItem value={subBreed} key={index}>{subBreed}</MenuItem>)}
            </Select>} />
        </FormControl>
      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-gender-label">sexo</InputLabel>
          <Controller
            name="gender"
            control={control}
            defaultValue=""
            render={props => <Select
              labelId="dog-gender-label"
              id="dog-gender"
              {...props}>
              {genders.map((gender, index) => <MenuItem value={gender} key={index}>{gender}</MenuItem>)}
            </Select>} />

        </FormControl>
      </div>

      <div className="search-form-item">
        <FormControl className={classes.formControl}>
          <InputLabel id="dog-age-label">idade</InputLabel>
          <Controller
            name="age"
            control={control}
            defaultValue=""
            render={props => <Select
              labelId="dog-age-label"
              id="dog-age"
              {...props}>
              {ages.map((age, index) => <MenuItem value={age} key={index}>{age}</MenuItem>)}
            </Select>} />
        </FormControl>
      </div>

      <input type="submit" className="form-btn" value="pesquisar" />
    </form>

  );
}

export default SearchForm;
