import Header from "../components/Auth/Header"
import Login from "../components/Auth/Login"

export default function LoginPage () {
    return (
        <div className="max-w-lg w-full space-y-8">            
            <Header
                heading="Login to your account"
                paragraph="Don't have an account yet? "
                linkName="Signup"
                linkUrl="/signup"
            />
            <Login/>
        </div>
    )
}