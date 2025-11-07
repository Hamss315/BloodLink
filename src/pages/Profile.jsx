import NavbarAfterLogin from "../common/NavbarAfterLogin"
import Footer from "../common/Footer"
import Profile from "../features/user/components/ProfilePage.jsx"

function ProfilePage() {
  return (
    <>
      <NavbarAfterLogin />
      <Profile />
      <Footer />
    </>
  )
}

export default ProfilePage