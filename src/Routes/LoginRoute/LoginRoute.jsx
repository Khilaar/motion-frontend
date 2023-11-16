import CounterTest from "../../Components/CounterTest/CounterTest";

const Login = () => {
    return (
        <div>
            <h1>Login Page</h1>
            <CounterTest/>
            <form>
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </form>
        </div>
    );
};

export default Login;