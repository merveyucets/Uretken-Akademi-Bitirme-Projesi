import React, {useState } from "react";
import "./Register.css";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../firebase";
import { login as loginHandle } from "../store/auth";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if (user) {
      dispatch(loginHandle(user));
      navigate("/", {
        replace: true,
      });
    }
  };
  return (
    <div className="form">
      <div className="form-container">
        <span className="title">GÜNCEL HABER</span>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="şifre"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button disabled={!email || !password} type="submit">
            Giriş Yap
          </button>
        </form>
        <p>Henüz kayıt olmadınız mı? <Link to="/register">Kayıt Ol</Link></p>
      </div>
    </div>
  );
}

export default Login;
