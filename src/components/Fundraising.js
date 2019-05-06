import React from "react"
import { Link } from "react-router-dom"
const Fundraising = () => {
  return (
    <div className="col s12 homeWrapper">
      <div className="alert_message">
        <h6 className="top_message">
          We are accepting vacancies for September 2019 Intake.{" "}
          <Link to="Contactus"> Contact us </Link>today to secure your place!
        </h6>
      </div>
      <h5 className="blue-text text-lighten-2">Fundraising</h5>
      <p className="grey-text text-darken-2">
        As a registered charity the preschool does various fundraisers
        throughout the year and the most popular being 'Peddle for Preschool'.
        The children enjoy this activity through play & raise money through
        sponsorship.
      </p>
    </div>
  )
}

export default Fundraising
