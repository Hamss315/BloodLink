import React from "react";
import ReceivedRequests from "../features/requests/ReceivedRequests";
import NavbarAfterLogin from '../common/NavbarAfterLogin';
import Footer from '../common/Footer';

function ReceivedRequestsPage() {
  return(
  <>
    <NavbarAfterLogin/>
    <div className="py-5 mt-5">
      <ReceivedRequests/>
    </div>
    <Footer/>
  </>
  );
}

export default ReceivedRequestsPage;