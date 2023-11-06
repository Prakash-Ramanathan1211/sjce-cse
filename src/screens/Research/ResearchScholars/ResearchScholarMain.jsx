import React from "react";
import { scholarsData } from "./Data2";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";


const Supervisors = () => {

  return (
    <div>
      <div className="container">
        <div>
          <h2 className="page_heading">Supervisors</h2>
          <div className="underline_heading"></div>
        </div>

        {scholarsData.map((obj, i) => (
          <div key={i}>

            <br />
            <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">Supervisor Name</th>
                  <th scope="col">University</th>
                  <th scope="col">Reco. No</th>
                </tr>
              </thead>
              <tbody>
                {obj["data"].map((obj, index) => (
                  <tr key={index}>
                    <td><Link to={`/scholars/${index}`}  className='dark-text'>{index+1} </Link></td>
                    <td><Link to={`/scholars/${index}`} className='dark-text'>{obj["supervisorName"]}</Link></td>
                    <td><Link to={`/scholars/${index}`} className='dark-text'>{obj["university"]}</Link></td>
                    <td><Link to={`/scholars/${index}`} className='dark-text'>{obj["recoNo"]}</Link></td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Supervisors;