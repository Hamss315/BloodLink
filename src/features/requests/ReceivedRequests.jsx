import { useEffect, useState } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import {
  BsGeoAltFill,
  BsDropletFill,
  BsPersonCircle,
  BsTelephoneFill,
  BsCalendarDate,
} from "react-icons/bs";
import report2Gif from "../../assets/images/report (1).gif";
import noResultGif from "../../assets/images/no-data (1).gif";

export default function ReceivedRequestsPage() {
  const [user, setUser] = useState(null);
  const [requests, setRequests] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];

    setUser(storedUser);
    setRequests(storedRequests);
    setUsers(storedUsers);
  }, []);

  if (!user) {
    return (
      <h3 style={{ textAlign: "center", marginTop: 30 }}>
        Please login first
      </h3>
    );
  }

  const receivedRequests = requests.filter(
    (r) =>
      r.user_phone !== user.phone &&
      r.blood_type_needed === user.bloodType &&
      users.find(
        (u) =>
          u.phone === r.user_phone &&
          u.governorate?.toLowerCase() === user.governorate?.toLowerCase()
      )
  );

  const requesterInfo = (phone) => {
    const reqUser = users.find((u) => u.phone === phone);
    return reqUser
      ? { name: reqUser.name, phone: reqUser.phone || "N/A" }
      : { name: "Unknown", phone: "N/A" };
  };

  const getStatusBadge = (state) => {
    return (
      <div
        className="d-flex align-items-center justify-content-center p-2 rounded-4 fw-bold"
        style={{
          width: "100%",
          backgroundColor: state === "available" ? "#dbfce7" : "#ffe2e2",
          color: state === "available" ? "#1d6630" : "#9f1526",
          fontSize: "0.85rem",
          border: "2px solid transparent",
        }}
      >
        {state === "available" ? "Available" : "Unavailable"}
      </div>
    );
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-2 fw-bold">
        Received Requests
        <img src={report2Gif} alt="Blood Donation" style={{ width: "80px" }} />
      </h2>
      <p className="text-center text-secondary mb-5">
        View incoming blood donation requests from people in need
      </p>

      {receivedRequests.length > 0 ? (
        <Row className="g-4 justify-content-center">
          {receivedRequests.map((r) => {
            const { name, phone } = requesterInfo(r.user_phone);
            return (
              <Col xs={12} sm={10} md={8} lg={7} xl={6} key={r.id}>
                <Card
                  className="w-100 border-0 p-4"
                  style={{
                    borderRadius: "24px",
                    boxShadow: "0 5px 15px rgba(0,0,0,0.1)",
                    background: "#fff",
                  }}
                >
                  <Row className="align-items-center">
                    <Col xs={12} md={8}>
                      <Card.Body className="text-start p-0">
                        <Card.Title className="d-flex align-items-center mb-3">
                          <BsPersonCircle className="me-2 text-danger" size={28} />
                          <span
                            className="fw-bold"
                            style={{ fontSize: "1.3rem" }}
                          >
                            {name}
                          </span>
                        </Card.Title>
                        <Card.Text className="mb-2 d-flex align-items-center">
                          <BsDropletFill
                            className="me-2 text-danger"
                            size={20}
                          />
                          <strong>Blood Type:&nbsp;</strong> 
                          {r.blood_type_needed}
                        </Card.Text>
                        <Card.Text className="mb-2 d-flex align-items-center">
                          <BsGeoAltFill className="me-2 text-danger" size={20} />
                          <strong>Location:&nbsp;</strong> 
                          {r.place}
                        </Card.Text>
                        <Card.Text className="d-flex align-items-center mt-2">
                          <BsCalendarDate
                            className="me-2 text-danger"
                            size={20}
                          />
                          <strong>Date:&nbsp;</strong> 
                          {r.createdAt
                            ? new Date(r.createdAt).toLocaleDateString()
                            : "N/A"}
                        </Card.Text>
                        <Card.Text className="d-flex align-items-center">
                          <BsTelephoneFill
                            className="me-2 text-danger"
                            size={20}
                          />
                          <strong>Phone:&nbsp;</strong> 
                          {phone !== "N/A" ? (
                            <a
                              href={`tel:${phone}`}
                              className="text-decoration-none text-danger"
                            >
                              {phone}
                            </a>
                          ) : (
                            "N/A"
                          )}
                        </Card.Text>
                      </Card.Body>
                    </Col>
                    <Col
                      xs={12}
                      md={4}
                      className="text-end align-self-start mt-3 mt-md-0"
                    >
                      {getStatusBadge(r.state)}
                    </Col>
                  </Row>
                </Card>
              </Col>
            );
          })}
        </Row>
      ) : (
        <p className="text-center">
          <img
            src={noResultGif}
            alt="No results"
            className="d-block mx-auto mb-3"
            style={{ width: "80px" }}
          />
          No requests found.
        </p>
      )}
    </Container>
  );
}
