import React, { useContext } from "react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/Auth";

const Login = () => {
  const {registeredUser , loggedUser, setLoggedUser } = useContext(Auth);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formSubmit = (data) => {
    let user = registeredUser.find((val)=>{
      return val.password ===data.password && val.email===data.email
    })
    if(!user){
      alert("User not founded")
      reset()
      return
      
    }
    setLoggedUser(user)
    localStorage.setItem("userlogged",JSON.stringify(user))
    alert("logged in")
    reset()
    navigate("/main")}
  ;

  return (
    <div className="min-h-screen bg-[#0b0b0b] flex items-center justify-center p-4 font-sans text-gray-100">
      <div className="w-full max-w-md bg-[#141415] border border-zinc-800/80 rounded-[2.5rem] p-8 md:p-10 shadow-2xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-white mb-2">
            Sign in
          </h1>
          <p className="text-zinc-400 text-sm">
            Enter your credentials to continue
          </p>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit(formSubmit)}>
          {/* Email */}
          <div className="relative flex items-center">
            <svg
              className="absolute left-4 w-5 h-5 text-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>

            <input
              {...register("email", {
                required: "E-mail is Required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Enter valid E-mail",
                },
              })}
              type="email"
              placeholder="Email address"
              className="w-full bg-[#1c1c1e] text-zinc-200 placeholder-zinc-500 rounded-2xl py-3.5 pl-12 pr-4 outline-none border border-transparent focus:border-zinc-700 transition duration-200 text-sm"
            />
          </div>

          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}

          {/* Password */}
          <div className="relative flex items-center">
            <svg
              className="absolute left-4 w-5 h-5 text-zinc-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
              />
            </svg>

            <input
              {...register("password", {
                required: "Password is Required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 characters",
                },
              })}
              type="password"
              placeholder="Password"
              className="w-full bg-[#1c1c1e] text-zinc-200 placeholder-zinc-500 rounded-2xl py-3.5 pl-12 pr-12 outline-none border border-transparent focus:border-zinc-700 transition duration-200 text-sm"
            />
          </div>

          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}

          <div className="pt-2">
            <button
              type="submit"
              className="w-full bg-[#ccff00] hover:brightness-110 text-black font-semibold rounded-2xl py-3.5 flex items-center justify-center space-x-2 transition duration-200 active:scale-[0.99]"
            >
              <span>Sign in</span>
            </button>
          </div>
        </form>

        <div className="mt-8 text-center text-sm text-zinc-400">
          Don't have an account?{" "}
          <span
            onClick={() => navigate("/")}
            className="text-[#ccff00] font-semibold hover:underline ml-1 cursor-pointer"
          >
            Create one
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;