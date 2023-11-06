import { useState } from "react";
import { Modal, Table } from "react-bootstrap";

const EventsCard = ({
  eventName,
  image,
//   students,
  dept,
//   title,
  year,
  firstprice,
  secondprice,
  thirdprice,
  sponseredby,
//   place,
  date,
}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      {/* Card */}
      <div
        class="events-card"
        data-toggle="modal"
        data-target="#exampleModalCenter"
        onClick={handleShow}
      >
        <img src={image} alt="event_picture" />
        <div class="info">
          <h1>{eventName}</h1>
          <h2>{sponseredby}</h2>
          <p>{date}</p>
          <button class="css-button-rounded--blue"> Read More </button>
        </div>
      </div>

      {/* Model */}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Body style={{ padding: "3rem" }}>
          <Table bordered responsive="md" hover>
            <tbody>
              <tr>
                <th>Event Name</th>
                <td>
                  {eventName}
                </td>
              </tr>
              <tr>
                <th>Dept. & Club</th>
                <td>{dept}</td>
              </tr>
              <tr>
                <th>Sponsered By</th>
                <td>{sponseredby}</td>
              </tr>
              <tr>
                <th>Year</th>
                <td>{year}</td>
              </tr>
              <tr>
                <th>Date</th>
                <td>{date}</td>
              </tr>
              <tr>
                <th>First price</th>
                <td>{firstprice}</td>
              </tr>
              <tr>
                <th>Second Price</th>
                <td>{secondprice}</td>
              </tr>
              <tr>
                <th>Third Price</th>
                <td>{thirdprice}</td>
              </tr>
            </tbody>
          </Table>
          <button
            class="css-button-rounded--blue mt-2 float-end"
            onClick={handleClose}
          >
            {" "}
            Close{" "}
          </button>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default EventsCard;
