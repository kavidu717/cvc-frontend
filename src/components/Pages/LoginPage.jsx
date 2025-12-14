//import './LoginPage.css'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("your password");
  const [password, setPassword] = useState("");

  function login() {
    axios
      .post("http://localhost:5000/api/user/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.user == null) {
          toast.error(res.data.message);
          return;
        }

        toast.success(res.data.message);
        localStorage.setItem("token", res.data.token);

        if (res.data.user.type == "admin") {
          window.location.href = "/admin";
        } else {
          window.location.href = "/";
        }
      });
  }

  return (
    <div className="w-full h-screen bg-rose-100 flex items-center justify-center">
      <div className="w-[500px] h-[500px] bg-pink-50 flex items-center justify-center flex-col gap-4 rounded-2xl shadow-2xl">

        <img
          src="/66736.jpg"
          alt=""
          className="rounded-full w-[100px] h-[100px] object-cover border-4 border-rose-300"
        />

        <span className="text-lg font-semibold text-rose-700">Email</span>
        <input
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 px-4 py-2 rounded-lg outline-none border border-rose-200 focus:ring-2 focus:ring-rose-400"
        />

        <span className="text-lg font-semibold text-rose-700">Password</span>
        <input
          type="password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-72 px-4 py-2 rounded-lg outline-none border border-rose-200 focus:ring-2 focus:ring-rose-400"
        />

        <button
          className="bg-gradient-to-r from-rose-400 to-pink-500 hover:from-rose-500 hover:to-pink-600 text-white font-semibold px-10 py-2 rounded-full transition duration-300 shadow-md"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
