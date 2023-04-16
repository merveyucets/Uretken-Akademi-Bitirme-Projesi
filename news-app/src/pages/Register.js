import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import { register } from "../firebase";
import { useDispatch } from "react-redux";
import { login as loginHandle } from "../store/auth";
import { useNavigate } from "react-router";

function Register() {
  
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
      e.preventDefault();
      const user = await register(email, password);
      if (user) {
        dispatch(loginHandle(user));
        navigate("/", {
          replace: true,
        });
      }
      console.log(user);
    };
    return (
      <div className="form">
        <div className="form-container">
          <span className="title">GÜNCEL HABER</span>
          <form onSubmit={handleSubmit}>
            <input type="text" placeholder="isim" />
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
              Kayıt Ol
            </button>
          </form>
          <p>Hesabınız var mı? <Link to="/login">Giriş Yap</Link></p>
        </div>
      </div>
    );
  }


export default Register;
