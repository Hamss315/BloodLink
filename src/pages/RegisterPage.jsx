import Register from "../features/auth/components/RegisterForm"
import NavbarbeforeLogin from "../common/NavbarbeforeLogin"
import Footer from "../common/Footer"

export default function RegisterPage() {
  return (
    <>   
        <NavbarbeforeLogin/>
        <main className="py-5">
        <Register />
        </main>
        <Footer/>
    </>
  )
}
