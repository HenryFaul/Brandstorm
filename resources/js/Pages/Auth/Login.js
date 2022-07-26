import React from 'react';
import Helmet from 'react-helmet';
import {useForm} from '@inertiajs/inertia-react';
import Logo from '@/Shared/Logo';
import LoadingButton from '@/Shared/LoadingButton';
import TextInput from '@/Shared/TextInput';
import NavBar from "@/Shared/NavBar";

export default () => {
  const {data, setData, errors, post, processing} = useForm({
    email: 'johndoe@example.com',
    password: 'secret',
    remember: true
  });

  function handleSubmit(e) {
    e.preventDefault();
    post(route('login.attempt'));
  }

  return (
    <>
      <NavBar></NavBar>
      <div
        className="bg-gradient-to-br from-light_blue via-darker_blue to-medium_blue flex items-center justify-center min-h-screen p-6">
        <Helmet title="Login"/>
        <div className="w-full max-w-md">
          <h1 className="text-5xl font-semibold text-center font-sans text-black">
            WELCOME!
          </h1>
          <h2 className="text-2xl font-light text-center font-sans text-my_gray">
            Let's get started
          </h2>
          <form
            onSubmit={handleSubmit}
            className="mt-8 overflow-hidden bg-lighter_blue rounded-lg shadow-2xl"
          >
            <div className="px-10 py-12">
              <Logo
                className="block w-full max-w-xs mx-auto fill-current mb-10"
                height={90}
              />
              <div className="mx-auto mt-4 mb-5 border-b-2 border-black"/>
              <TextInput
                className="mt-5"
                label="Email"
                name="Email"
                type="email"
                placeholder="Enter your email"
                errors={errors.email}
                value={data.email}
                onChange={e => setData('email', e.target.value)}
              />
              <TextInput
                className="mt-5"
                label="Password"
                name="password"
                type="password"
                placeholder="Enter your password"
                errors={errors.password}
                value={data.password}
                onChange={e => setData('password', e.target.value)}
              />
              <label
                className="flex items-center mt-6 select-none"
                htmlFor="remember"
              >
                <input
                  name="remember"
                  id="remember"
                  className="mr-1"
                  type="checkbox"
                  checked={data.remember}
                  onChange={e => setData('remember', e.target.checked)}
                />
                <span className="text-sm">Remember Me</span>
              </label>
            </div>
            <div className="flex items-center justify-between px-10 py-4 bg-lighter_blue border-t border-black">
              <a
                className="hover:underline"
                tabIndex="-1"
                href="#reset-password"
              >
                Forgot password?
              </a>
              <LoadingButton
                type="submit"
                loading={processing}
                className="btn-blue text-white rounded-lg"
              >
                Login
              </LoadingButton>
              <button type="submit"
                      className="btn-blue text-white rounded-lg"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
