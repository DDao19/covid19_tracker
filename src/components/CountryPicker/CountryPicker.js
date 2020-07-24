import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl, Typography } from '@material-ui/core'
import { fetchCountries } from '../../api/index'

import styles from './CountryPicker.module.css'

const CountryPicker = ({ handleCountryChange }) => {
  const [fetchedCountries, setFetchedCountries] = useState([])

  useEffect(() => {
    const fetchAPI = async () => {
      setFetchedCountries(await fetchCountries())
    }

    fetchAPI()
  }, [setFetchedCountries])

  // mapping over the countries array to get a list of all the countries
  const globalCountries = fetchedCountries.map((country, i) => {
    return <option key={i} vallue={country}>{country}</option>
  }) 


  return (
    <FormControl className={styles.formControl} margin="normal">
      <Typography color="textPrimary" align="center" variant="h5">Please Select A Country</Typography>
      <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
        <option value="">Global</option>
        {globalCountries}
      </NativeSelect>
    </FormControl>
  )
}


export default CountryPicker