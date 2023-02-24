import './index.css'
import {Component} from 'react'
import Header from '../Header'
import Nav from '../Nav'
import AvailableFlightItem from '../AvailableFlightItem'

const availableFlights = [
  {
    id: 1,
    uniqueId: 'PB-BA',
    flightName: 'Indigo',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 2,
    uniqueId: 'PB-BA',
    flightName: 'Emirates',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 3,
    uniqueId: 'PB-BA',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 4,
    uniqueId: 'PB-BA',
    flightName: 'American Airlines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 5,
    uniqueId: 'PB-BA',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 6,
    uniqueId: 'PB-CH',
    flightName: 'JetBlue',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 7,
    uniqueId: 'PB-CH',
    flightName: 'Ryanair',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 8,
    uniqueId: 'PB-CH',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 9,
    uniqueId: 'PB-CH',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 10,
    uniqueId: 'PB-CH',
    flightName: 'Emirates',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 11,
    uniqueId: 'PB-KK',
    flightName: 'Ryanair',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 12,
    uniqueId: 'PB-KK',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 13,
    uniqueId: 'PB-KK',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 14,
    uniqueId: 'PB-KK',
    flightName: 'American Airlines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 15,
    uniqueId: 'PB-KK',
    flightName: 'IndiGo',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 16,
    uniqueId: 'PB-MB',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 17,
    uniqueId: 'PB-MB',
    flightName: 'Ryanair',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 18,
    uniqueId: 'PB-MB',
    flightName: 'JetBlue',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 19,
    uniqueId: 'PB-MB',
    flightName: 'IndiGo',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 20,
    uniqueId: 'PB-MB',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 21,
    uniqueId: 'PB-DL',
    flightName: 'Air India',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 22,
    uniqueId: 'PB-DL',
    flightName: 'Emirates',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 23,
    uniqueId: 'PB-DL',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 24,
    uniqueId: 'PB-DL',
    flightName: 'Qatar Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 25,
    uniqueId: 'PB-DL',
    flightName: 'Singapore Airlines ',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 26,
    uniqueId: 'CH-PB',
    flightName: 'United Airlines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 27,
    uniqueId: 'CH-PB',
    flightName: 'Lufthansa',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 28,
    uniqueId: 'CH-PB',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 29,
    uniqueId: 'CH-PB',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 30,
    uniqueId: 'CH-PB',
    flightName: 'Cathay Pacific',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 31,
    uniqueId: 'KK-PB',
    flightName: 'Cathay Pacific',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 32,
    uniqueId: 'KK-PB',
    flightName: 'Qatar Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 33,
    uniqueId: 'KK-PB',
    flightName: 'Emirates',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 34,
    uniqueId: 'KK-PB',
    flightName: 'IndiGo',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 35,
    uniqueId: 'KK-PB',
    flightName: 'Emirates',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 36,
    uniqueId: 'MB-PB',
    flightName: 'British Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 37,
    uniqueId: 'MB-PB',
    flightName: 'American Airlines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 38,
    uniqueId: 'MB-PB',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 39,
    uniqueId: 'MB-PB',
    flightName: 'Ryanair',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 40,
    uniqueId: 'MB-PB',
    flightName: 'JetBlue',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 41,
    uniqueId: 'DL-PB',
    flightName: 'Lufthansa',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 42,
    uniqueId: 'DL-PB',
    flightName: 'Delta Air Lines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 43,
    uniqueId: 'DL-PB',
    flightName: 'Southwest Airlines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 44,
    uniqueId: 'DL-PB',
    flightName: 'Ryanair',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 45,
    uniqueId: 'DL-PB',
    flightName: 'Qatar Airways',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
  {
    id: 46,
    uniqueId: 'BA-PB',
    flightName: 'Emirates',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6500',
  },
  {
    id: 47,
    uniqueId: 'BA-PB',
    flightName: 'United Airlines',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 7500',
  },
  {
    id: 48,
    uniqueId: 'BA-PB',
    flightName: 'AirAsia',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 8000',
  },
  {
    id: 49,
    uniqueId: 'BA-PB',
    flightName: 'Ryanair',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6000',
  },
  {
    id: 50,
    uniqueId: 'BA-PB',
    flightName: 'Lufthansa',
    flightId: 'MAA-IXZ',
    date: '24-11-2023',
    price: 'Rs. 6700',
  },
]

class Home extends Component {
  state = {from: 'PORT BLAIR', destination: 'CHENNAI', activeId: 'PB-CH'}

  onFromChange = event => {
    this.setState({from: event.target.value})
  }

  onDestinationChange = event => {
    this.setState({destination: event.target.value})
  }

  filterFlights = () => {
    const {from, destination} = this.state
    if (
      from.toLowerCase().includes('port blair') &&
      destination.toLowerCase().includes('banglore')
    ) {
      this.setState({activeId: 'PB-BA'})
    } else if (
      from.toLowerCase().includes('port blair') &&
      destination.toLowerCase().includes('chennai')
    ) {
      this.setState({activeId: 'PB-CH'})
    } else if (
      from.toLowerCase().includes('port blair') &&
      destination.toLowerCase().includes('kolkata')
    ) {
      this.setState({activeId: 'PB-KK'})
    } else if (
      from.toLowerCase().includes('port blair') &&
      destination.toLowerCase().includes('mumbai')
    ) {
      this.setState({activeId: 'PB-MB'})
    } else if (
      from.toLowerCase().includes('port blair') &&
      destination.toLowerCase().includes('delhi')
    ) {
      this.setState({activeId: 'PB-DL'})
    } else if (
      from.toLowerCase().includes('banglore') &&
      destination.toLowerCase().includes('port blair')
    ) {
      this.setState({activeId: 'BA-PB'})
    } else if (
      from.toLowerCase().includes('chennai') &&
      destination.toLowerCase().includes('port blair')
    ) {
      this.setState({activeId: 'CH-PB'})
    } else if (
      from.toLowerCase().includes('kolkata') &&
      destination.toLowerCase().includes('port blair')
    ) {
      this.setState({activeId: 'KK-PB'})
    } else if (
      from.toLowerCase().includes('mumbai') &&
      destination.toLowerCase().includes('port blair')
    ) {
      this.setState({activeId: 'MB-PB'})
    } else if (
      from.toLowerCase().includes('delhi') &&
      destination.toLowerCase().includes('port blair')
    ) {
      this.setState({activeId: 'DL-PB'})
    }
  }

  render() {
    const {from, destination, activeId} = this.state
    console.log(availableFlights)
    console.log(activeId)

    const filteredFlights = availableFlights.filter(
      eachFlight => eachFlight.uniqueId === activeId,
    )

    return (
      <div className="home">
        <Header />
        <Nav />

        <h1 className="flight-page-title">🤫 Lowest Price's Here 😉 🚀</h1>
        <div className="buttons-container">
          <button className="button-1" type="button">
            One Way
          </button>
          <button className="button-1" type="button">
            Two Way
          </button>
        </div>
        <div className="search-container">
          <div className="from-search-container">
            <p>FROM</p>
            <input
              type="text"
              className="from-search-input"
              placeholder=" FROM "
              value={from}
              onChange={this.onFromChange}
            />
          </div>
          <h2>TO</h2>
          <div className="from-search-container">
            <p>DESTINATION</p>
            <input
              type="text"
              className="from-search-input"
              placeholder=" DESTINATION "
              value={destination}
              onChange={this.onDestinationChange}
            />
          </div>
          <button
            className="search-btn"
            type="button"
            onClick={this.filterFlights}
          >
            Search
          </button>
        </div>

        <h2 className="des">Featured Flights</h2>
        {filteredFlights.map(each => (
          <AvailableFlightItem key={each.id} data={each} />
        ))}
      </div>
    )
  }
}

export default Home
