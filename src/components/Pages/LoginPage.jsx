//import './LoginPage.css'
import { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const [email, setEmail] = useState("your password");
  const [password, setPassword] = useState("");

  function login() {
    axios
    // to change the backend url 
      .post(import.meta.env.VITE_BACKEND_URL+"/api/user/login", {
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
    <div className="w-full h-screen bg-gradient-to-br from-slate-800 via-gray-900 to-black flex items-center justify-center animate-fadeIn">
      <div className="w-[500px] h-[500px] bg-gradient-to-br from-slate-400 flex items-center justify-center flex-col gap-6 rounded-2xl shadow-2xl p-6 animate-slideUp">
        <img
          src="/66736.jpg"
          alt=""
          className="rounded-full w-[100px] h-[100px] object-cover border-4 border-gradient-to-r from-rose-400 to-pink-500 shadow-lg animate-bounce"
        />

        <span className="text-lg font-semibold text-slate-800">Email</span>
        <input
          defaultValue={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-72 px-4 py-2 rounded-lg outline-none border border-slate-300 focus:ring-2 focus:ring-gradient-to-r from-slate-500 to-gray-700 transition duration-300 shadow-md"
        />

        <span className="text-lg font-semibold text-slate-800">Password</span>
        <input
          type="password"
          defaultValue={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-72 px-4 py-2 rounded-lg outline-none border border-slate-300 focus:ring-2 focus:ring-gradient-to-r from-slate-500 to-gray-700 transition duration-300 shadow-md"
        />

        <button
          className="bg-gradient-to-r from-slate-700 to-slate-900 hover:from-slate-600 hover:to-gray-800 text-white font-semibold px-10 py-2 rounded-full transition duration-300 shadow-lg transform hover:scale-105 animate-pulse"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
}
