import Login from "../features/auth/components/LoginForm"
import Footer from '../common/Footer'
import NavbarbeforeLogin from "../common/NavbarbeforeLogin"

export default function LoginPage() {
  return (
    <>
        <NavbarbeforeLogin/>
        <main className="pt-5">
        <Login />
        </main>
        <Footer/>
    </>
  )
}
