import React from "react"
import "../App.css"
import { Link } from "react-router-dom"
const Earlyyears = () => {
  return (
    <div className="col s12 homeWrapper">
      <div className="alert_message">
        <h6 className="top_message">
          We are accepting vacancies for September 2019 Intake.{" "}
          <Link to="Contactus"> Contact us </Link>today to secure your place!
        </h6>
      </div>
      <h5 className="blue-text text-lighten-2">Early Years Foundation Stage</h5>
      <p className="grey-text text-darken-2">
        All activities that the pre-school provides support the seven areas of
        learning and development which form the essential basis for later stage
        studies in school and beyond.
      </p>
      <p className="grey-text text-darken-2">
        To track children’s learning and development, the allocated keyperson
        produces and maintains a variety of evidence such as observations,
        Learning Journeys, pictorial evidence and termly summary reports. These
        evidence records are kept confidential of all children by their key
        person to help their further development and kept between parent/carer
        and staff.
      </p>
      <p className="grey-text text-darken-2">
        When they move onto their next setting (nursery or reception class), the
        keyperson and parents together fill out a ‘Transition document’ to send
        it to the new setting as an evidence of the children’s learning and
        development and to ensure continuity of education.
      </p>
      <br />
      <p className="grey-text text-darken-2">
        The Prime areas are fundamental, work together and move through to
        support development in all other areas, they are:
      </p>
      <ul className=" list grey-text text-darken-2">
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Personal, social and
          emotional development.
        </li>
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Communication and
          language.
        </li>
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Physical
          development.
        </li>
      </ul>
      <br />
      <p className="grey-text text-darken-2">
        The specific areas include essential skills and knowledge for children
        to participate successfully in society, they are:
      </p>
      <ul className="list grey-text text-darken-2">
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Literacy
        </li>
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Mathematics.
        </li>
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Understanding of the
          World.
        </li>
        <li>
          <i className=" tiny material-icons">child_care</i>Expressive Arts and
          Design
        </li>
      </ul>
      <br />
      <p className="grey-text text-darken-2">
        The principles which guide the work of all early years practioners are
        grouped into four themes:
      </p>
      <ul className="list grey-text text-darken-2">
        <li className="list">
          <i className=" tiny material-icons">child_care</i>A unique child.
        </li>
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Positive
          relationships.
        </li>
        <li className="list">
          <i className=" tiny material-icons">child_care</i>Learning and
          development.
        </li>
      </ul>
      <br />
      <h5 className="grey-text grey-bold-2 text-darken-2">
        2yr old progress checks
      </h5>
      <p className="grey-text text-darken-2">
        The Early Years Foundation Stage (EYFS) requires that parents and carers
        must be supplied with a short written summery of their child’s
        development in the three prime learning and development areas of the
        EYFS: Personal, Social and Emotional Development, Physical Development
        and Communication and Language, when the child is aged between 24.
      </p>
      <p className="grey-text text-darken-2">
        In accordance with the Local Authority, we carry out and record a two
        years old progress check on the three prime areas with the support of
        the parents/carers. This is photo copied with one copy for your child’s
        progress file, one copy for your red book. Parents are expected to book
        an appointment with their Health Visitor for ASQ developmental check to
        be done when the child age is under 3. Parents provides the outcome of
        this assessment to the allocated keyperson when the child starts the
        setting to enable the child’s development to thrive.
      </p>
    </div>
  )
}

export default Earlyyears
