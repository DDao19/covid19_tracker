import React from 'react';
import { Cards, Chart, CountryPicker } from './components'
import styles from './App.module.css'
import { fetchData } from './api/index'
import coronaImage from './images/img.jpg'


class App extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    
    this.setState({ data: fetchedData })
  }

  // method for selecting a country and grabbing the data for it
  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);
    this.setState({ data: fetchedData, country: country })
  }

  render() {
    const { data, country } = this.state

    return (
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>COVID-19 TRACKER</h1>
          <img className={styles.image} src={coronaImage} alt="COVID-19" />
        </div>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;
