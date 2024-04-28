'use client'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSignUp = async (event:any) => {
    event.preventDefault();
    try {
      setLoading(true);
      const response = await axios.post("/api/user/signup", user);
      console.log("Signup success", response.data);
      router.push("/login");
    } catch (error:any) {
      console.log("Signup failed");
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <>
      <section className="container mx-auto px-5 py-10">
        <div className="w-full max-w-sm mx-auto">
          <h1 className="font-roboto text-2xl font-bold text-center text-dark-hard mb-8">
            Sign Up
          </h1>
          <form>
            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="username"
                className="text-[#5a7184] font-semibold block"
              >
                Username
              </label>
              <input
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-3 py-4 font-semibold block outline-none border"
                type="username"
                id="username"
                value={user.username}
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                placeholder="Enter Username"
              />
            </div>

            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="email"
                className="text-[#5a7184] font-semibold block"
              >
                Email
              </label>
              <input
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-3 py-4 font-semibold block outline-none border"
                type="email"
                id="email"
                value={user.email}
                onChange={(e) => setUser({ ...user, email: e.target.value })}
                placeholder="Enter Email"
              />
            </div>

            <div className="flex flex-col mb-6 w-full">
              <label
                htmlFor="password"
                className="text-[#5a7184] font-semibold block"
              >
                Password
              </label>
              <input
                className="placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-3 py-4 font-semibold block outline-none border"
                type="password"
                id="password"
                value={user.password}
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                placeholder="Enter Password"
              />
            </div>

            <button
              type="submit"
              onClick={onSignUp}
              className="bg-primary text-white font-bold text-lg py-4 px-8 w-full rounded-lg mb-6 disabled:opacity-70 disabled:cursor-not-allowed"
              disabled={buttonDisabled}
            >
              {loading ? "Processing" : "SignUp"}
            </button>

            <p className="text-sm font-semibold text-[#5a7184]">
              Already Registered?{" "}
              <Link href="/login" className="text-primary">
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
