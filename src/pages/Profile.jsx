import NavbarAfterLogin from "../common/NavbarAfterLogin"
import Footer from "../common/Footer"
import Profile from "../features/user/components/ProfilePage.jsx"

function ProfilePage() {
  return (
    <>
    <div className="pt-4">
      <NavbarAfterLogin />
      <Profile />
      <Footer />
    </div>
    </>
  )
}

export default ProfilePage