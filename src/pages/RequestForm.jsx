import React from 'react';
import RequestForm from '../features/requests/RequestForm';
import NavbarAfterLogin from '../common/NavbarAfterLogin';
import Footer from '../common/Footer';

function RequestFormPage() {
  return (
    <>
    <NavbarAfterLogin/>
    <div className="py-5 mt-5">
      <RequestForm/>
    </div>
    <Footer/>
    </>
  );
}

export default RequestFormPage;