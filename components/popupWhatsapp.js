import React, { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { Disclosure, Transition } from "@headlessui/react";
import { IconWhatsapp } from "./Icons";

const PopupWhatsApp = () => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitSuccessful, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState("");

  const userName = useWatch({ control, name: "name", defaultValue: "Someone" });

  const onSubmit = async (data, e) => {
    console.log(data);
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data, null, 2),
    })
      .then(async (response) => {
        let json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          e.target.reset();
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage("Client Error. Please check the console.log for more info");
        console.log(error);
      });
  };

  return (
    <div>
      <Disclosure>
        {({ open }) => (
          <>
            <a
              href="https://api.whatsapp.com/send?phone=5544999536451&text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20a%20Select%20Prime"
              target="_blank"
            >
              {/* <Disclosure.Button className="fixed z-40 flex items-center justify-center transition duration-300  rounded-full shadow-lg right-5 bottom-5 w-14 h-14 focus:outline-none ease"> */}
              <span className="sr-only">Enviar mensagem pelo whatsapp</span>
              <div className="fixed bottom-0 right-0 z-50 p-10 hover:scale-125 transition duration-700 ease-in-out cursor-pointer">
                <span className="relative flex h-3 w-3 top-2 left-9">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                <IconWhatsapp className="text-green-500 bg-white w-40 h-40 rounded-full p-1 hover:scale-125 transition duration-700 ease-in-out " />
              </div>
            </a>
            {/* <Transition
                show={!open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 -rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 -rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>{" "}
              </Transition>

              <Transition
                show={open}
                enter="transition duration-200 transform ease"
                enterFrom="opacity-0 rotate-45 scale-75"
                leave="transition duration-100 transform ease"
                leaveTo="opacity-0 rotate-45"
                className="absolute w-6 h-6 text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>{" "}
              </Transition> */}
            {/* </Disclosure.Button> */}
            <Transition
              className="fixed  z-50 bottom-[100px] top-0 right-0  left-0 sm:top-auto sm:right-5 sm:left-auto"
              enter="transition duration-200 transform ease"
              enterFrom="opacity-0 translate-y-5"
              leave="transition duration-200 transform ease"
              leaveTo="opacity-0 translate-y-5"
            >
              <Disclosure.Panel className=" flex flex-col  overflow-hidden left-0 h-full w-full sm:w-[350px] min-h-[250px] sm:h-[600px] border border-gray-300 dark:border-gray-800 bg-white shadow-2xl rounded-md sm:max-h-[calc(100vh-120px)]"></Disclosure.Panel>
            </Transition>
          </>
        )}
      </Disclosure>
    </div>
  );
};

export default PopupWhatsApp;
