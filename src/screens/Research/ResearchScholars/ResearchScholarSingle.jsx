import React from "react";
import { researchScholarsData } from "./Data";

import { Table } from "react-bootstrap";
import { Link,useParams } from "react-router-dom";
import { scholarsData } from "./Data2";

const ResearchScholarSingle = () => {
  const { id } = useParams();
  let idx=parseInt(id);
 console.log(scholarsData,scholarsData[0]["data"][idx]["supervisorName"]);
 
  return (
    <div>
      <div className="container">
        <br />
        <h2 style={{ textAlign: "center", fontWeight: "bold", margin: "2rem"}}>
          Scholars
        </h2>
        <div className="underline_heading"></div>
          <div >
            
              <div>
                <h2 className="page_heading">Details of Research scholars pursuing Research under <br />{scholarsData[0]["data"][idx]["supervisorName"]}</h2>
              </div>
          
            {
              idx>=0&&id<researchScholarsData.length?
              (
                <>
                 <h3 className="page_heading">{researchScholarsData[idx]["university"]}</h3>
               
                <Table bordered responsive="md" hover>
              <thead>
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">REGNO</th>
                  <th scope="col">NAME</th>
                  <th scope="col">DEGREE</th>
                  <th scope="col">FACULTY</th>
                  <th scope="col">ACADEMIC YEAR</th>
                  <th scope="col">REG YEAR</th>
                  <th scope="col">REG SESS</th>
                  <th scope="col">SUPERVISOR</th>
                  <th scope="col">STATUS</th>
                </tr>
              </thead>
              
              <tbody>
                {researchScholarsData[idx]["data"].map((obj, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{obj["REGNO"]}</td>
                    <td>{obj["NAME"]}</td>
                    <td>{obj["DEGREE"]}</td>
                    <td>{obj["FACULTY"]}</td>
                    <td>{obj["ACADEMICYEAR"]}</td>
                    <td>{obj["REGYEAR"]}</td>
                    <td>{obj["REGSESS"]}</td>
                    <td>{obj["SUPERVISOR"]}</td>
                    <td>{obj["STATUS"]}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            </>
              ):null
            }
          </div>


       
        
      </div>
    </div>
  );
};

export default ResearchScholarSingle;