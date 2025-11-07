import { useEffect, useState } from "react";
import noResultGif from "../../assets/images/no-data (1).gif";
import { Button, Table } from "react-bootstrap";
import { BsGeoAltFill, BsCalendarFill, BsDropletFill } from "react-icons/bs";
import reportGif from "../../assets/images/report.gif";

function MyRequests() {
  const [requests, setRequests] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedRequests = JSON.parse(localStorage.getItem("requests")) || [];

    setUser(storedUser);
    setRequests(storedRequests);
  }, []);

  if (!user) {
    return (
      <h3 style={{ textAlign: "center", marginTop: 30 }}>
        Please login first
      </h3>
    );
  }

  const myRequests = requests.filter((r) => r.user_phone === user.phone);

  const handleToggle = (req) => {
    const newState = req.state === "available" ? "not available" : "available";

    const updatedRequests = requests.map((r) =>
      r.id === req.id ? { ...r, state: newState } : r
    );

    setRequests(updatedRequests);
    localStorage.setItem("requests", JSON.stringify(updatedRequests));
  };

  return (
    <>
      <h2 className="mt-5 text-center fw-bold">
        My Donation Requests
        <img src={reportGif} alt="Blood Donation" style={{ width: "80px" }} />
      </h2>
      <p className="text-center mb-5 text-secondary">
        Track the status of your blood donation requests
      </p>

      {myRequests.length === 0 ? (
        <p className="text-center">
          <img
            src={noResultGif}
            alt="No results"
            className="d-block mx-auto mb-3"
            style={{ width: "80px" }}
          />
          No requests found.
        </p>
      ) : (
        <div className="container mt-4 mb-5">
          <Table responsive className="table table-hover align-middle">
            <thead className="fw-bold">
              <tr>
                <th>Place</th>
                <th>Blood Type</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myRequests.map((r) => {
                const date = r.createdAt ? new Date(r.createdAt) : null;
                return (
                  <tr key={r.id}>
                    <td>
                      <BsGeoAltFill className="me-2 text-danger" size={20} />
                      {r.place || "—"}
                    </td>
                    <td>
                      <BsDropletFill className="me-2 text-danger" size={20} />
                      {r.blood_type_needed || "—"}
                    </td>
                    <td>
                      <BsCalendarFill className="me-2 text-danger" size={20} />
                      {date ? date.toLocaleDateString() : "_"}
                    </td>
                    <td>
                      <span
                        className="px-3 py-1 rounded-pill fw-bold"
                        style={{
                          backgroundColor:
                            r.state === "available" ? "#dbfce7" : "#ffe2e2",
                          color: r.state === "available" ? "#1d6630" : "#9f1526",
                        }}
                      >
                        {r.state || "—"}
                      </span>
                    </td>
                    <td>
                      <Button
                        variant="danger"
                        size="sm"
                        onClick={() => handleToggle(r)}
                      >
                        Change State
                      </Button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>
      )}
    </>
  );
}

export default MyRequests;
