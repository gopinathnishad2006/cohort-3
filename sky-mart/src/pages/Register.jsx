import React, { useContext } from "react";
import { User, Mail, Lock, ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Auth } from "../context/Auth";

const Register = () => {
  const { registeredUser, setRegisteredUser } = useContext(Auth);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const navigate = useNavigate();

  const formSubmit = (data) => {

    const userRegister = [...registeredUser, data];
    setRegisteredUser(userRegister);

    localStorage.setItem("registerdata", JSON.stringify(userRegister));

    reset();
  };

  return (
    <div className="min-h-screen bg-[#0d0d0e] flex flex-col items-center justify-center p-4 text-white font-sans">
      {/* Logo */}
      <div className="flex items-center gap-2 mb-8">
        <div className="w-10 h-10 bg-[#ccff00] rounded-xl flex items-center justify-center text-black">
          <Zap className="w-6 h-6 fill-black stroke-black" />
        </div>
        <span className="text-2xl font-bold tracking-tight">SkyMart</span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-[#141416] border border-[#222225] rounded-3xl p-8 shadow-2xl">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">Create account</h1>
          <p className="text-gray-400 mt-1 text-sm">
            Join SkyMart and start shopping
          </p>
        </div>

        <form onSubmit={handleSubmit(formSubmit)}>
          <div className="space-y-4">

            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                {...register("name", {
                  required: "Name is Required",
                })}
                type="text"
                placeholder="Full name"
                className="w-full bg-[#1c1c1f] text-white placeholder-gray-500 rounded-2xl pl-12 pr-4 py-3.5 border border-transparent focus:border-[#ccff00] focus:outline-none"
              />
            </div>

            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

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
                className="w-full bg-[#1c1c1f] text-white placeholder-gray-500 rounded-2xl pl-12 pr-4 py-3.5 border border-transparent focus:border-[#ccff00] focus:outline-none"
              />
            </div>

            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />

              <input
                {...register("password", {
                  required: "Password is Required",
                  minLength: {
                    value: 6,
                    message: "Minimum 6 characters",
                  },
                })}
                type="password"
                placeholder="Password (min 6 chars)"
                className="w-full bg-[#1c1c1f] text-white placeholder-gray-500 rounded-2xl pl-12 pr-4 py-3.5 border border-transparent focus:border-[#ccff00] focus:outline-none"
              />
            </div>

            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-[#ccff00] hover:bg-[#b8e600] text-black font-semibold rounded-2xl py-3.5 flex items-center justify-center gap-2 mt-4"
            >
              Create Account
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-400 mt-6">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-[#ccff00] font-semibold hover:underline cursor-pointer"
          >
            Sign in
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;