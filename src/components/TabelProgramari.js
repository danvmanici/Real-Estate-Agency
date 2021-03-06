import React from "react";
import PropTypes from "prop-types";

const TabelProgramari = ({ programari }) => {
  return (
    <div className="my-table">
      <div className="scrollit">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Appointments</th>
            </tr>
          </thead>

          <tbody>
            {programari.map((elem, i) => (
              <tr key={i}>
                <td>{elem}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

TabelProgramari.prototypes = {
  programari: PropTypes.object,
};

export default TabelProgramari;
