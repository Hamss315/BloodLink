import PlaceList from "../features/places/components/PlacesList";
import NavbarAfterLogin from '../common/NavbarAfterLogin';
import Footer from '../common/Footer';

function DonationPlaces() {
  return (
    <>
    <NavbarAfterLogin/>
    <div className="py-5">
      <PlaceList/>
    </div>
    <Footer/>
    </>
  );
}

export default DonationPlaces;
