import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

function Registration() {
  const [newUser, setNewUser] = useState<any>({});

  const { signup, currentUser }: any = useAuth();
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function createUser(e: any) {
    const { name, value } = e.target;

    if (name == "username") {
      setUserName(e.target.value);
    } else if (name == "email") {
      setEmail(e.target.value);
    } else if (name == "password") {
      setPassword(e.target.value);
    }

    setNewUser({
      ...newUser,
      [name]: value,
    });
  }

  function register() {
    try {
      signup(newUser.email, newUser.password, newUser.username);

      navigate("/");
    } catch (err: any) {
      console.error("here: ", err.message);
    }
  }
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 bg-white">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign up to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          // action="#"
          method="POST"
          onSubmit={register}
        >
          <div>
            <label
              htmlFor="username"
              className=" text-sm font-medium leading-6 flex  text-gray-900"
            >
              user name
            </label>
            <div className="mt-2">
              <input
                id="username"
                name="username"
                type="username"
                autoComplete="username"
                value={username}
                required
                className="block w-full rounded-md border-0 pl-1.5 py-1.5  text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => createUser(e)}
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="email"
              className=" text-sm font-medium leading-6 flex  text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                required
                className="block w-full rounded-md border-0 pl-1.5 py-1.5  text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => createUser(e)}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 pl-1.5 py-1.5  text-white-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e) => createUser(e)}
              />
            </div>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => {
                register();
              }}
            >
              Sign Up
            </button>
            <button
              onClick={() => {
                navigate("/login");
              }}
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registration;
