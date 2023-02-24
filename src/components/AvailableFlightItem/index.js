import './index.css'

const AvailableFlightItem = props => {
  const {data} = props
  const {flightName, flightId, date, price} = data
  return (
    <div className="available-flight-container">
      <p className="flight">{flightName}</p>
      <p className="flight">{flightId}</p>
      <p className="flight">{date}</p>
      <p className="flight">{price}</p>
    </div>
  )
}

export default AvailableFlightItem
