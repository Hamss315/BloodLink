import React from 'react';
import MyRequests from '../features/requests/MyRequests';
import NavbarAfterLogin from '../common/NavbarAfterLogin';
import Footer from '../common/Footer';

export default function MyRequestsPage() {
  return (
    <>
    <NavbarAfterLogin/>
    <main className="py-5">
        <MyRequests />
    </main>
    <Footer/>
    </>
  )
};
