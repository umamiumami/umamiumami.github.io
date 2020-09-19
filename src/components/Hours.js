import React from "react";
import LogoImage from "../assets/logo_white.svg";

function Hours() {
  return (
    <article id="about">
      <h2 className="major">Hours</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Lunch</th>
            <th>Dinner</th>
            <th>Happy Hour</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mon</td>
            <td>11am - 2:30pm</td>
            <td>4:30pm - 9:30pm</td>
            <td>4:30pm - 7pm</td>
          </tr>
          <tr>
            <td>Tue</td>
            <td>11am - 2:30pm</td>
            <td>4:30pm - 9:30pm</td>
            <td>4:30pm - 7pm</td>
          </tr>
          <tr>
            <td>Wed</td>
            <td>11am - 2:30pm</td>
            <td>4:30pm - 9:30pm</td>
            <td>4:30pm - 7pm</td>
          </tr>
          <tr>
            <td>Thu</td>
            <td>11am - 2:30pm</td>
            <td>4:30pm - 9:30pm</td>
            <td>4:30pm - 7pm</td>
          </tr>
          <tr>
            <td>Fri</td>
            <td>11am - 2:30pm</td>
            <td>4:30pm - 9:30pm</td>
            <td>4:30pm - 7pm</td>
          </tr>
          <tr>
            <td>Sat</td>
            <td>11am - 2:30pm</td>
            <td>4:30pm - 9:30pm</td>
            <td>4:30pm - 7pm</td>
          </tr>
          <tr>
            <td>Sun</td>
            <td>Closed</td>
            <td>Closed</td>
            <td>Closed</td>
          </tr>
        </tbody>
        {/* <tfoot>
          <tr>
            <td colspan="2"></td>
            <td>100.00</td>
          </tr>
        </tfoot> */}
      </table>
      <img className="image right" src={LogoImage} alt="logo" />
    </article>
  );
}

export default Hours;
