"use client";

import React, { useState } from "react";

import "./styles.css";

const RangeSlide = () => {
  const [value, setValue] = useState(500);
  const [hidden, setHidden] = useState(1);

  function handleRangeChange(event) {
    const { value } = event.target;
    setValue(parseInt(value));
  }

  const handleFormSimulate = () => {
    setHidden(0);
  };

  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {hidden === 1 ? (
        <>
          <div className="flex justify-center">
            <div className="range-wrapper">
              <div className="mb-6 text-6xl text-center text-black font-roboto">
                {new Intl.NumberFormat("pr-BR", {
                  style: "currency",
                  currency: "BRL",
                  minimumFractionDigits: 2,
                }).format(value)}
              </div>
              <input
                type="range"
                min="500"
                max="40000"
                step="500"
                value={value}
                className="slider w-full"
                name=""
                onChange={handleRangeChange}
              />
              <datalist>
                {arr.map((a) => (
                  <option key={a} value="">
                    |
                  </option>
                ))}
              </datalist>
            </div>
          </div>

          <button
            className="bg-black flex mx-auto text-white border-2 py-2 px-8 focus:outline-none rounded text-lg "
            onClick={handleFormSimulate}
          >
            Avançar
          </button>
        </>
      ) : (
        <section className="text-gray-600 body-font relative">
          <div className="container px-5 pt-5 pb-0 mx-auto">
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="name"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Nome
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      E-mail
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Whatsapp
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Linha de Crédito desejada
                    </label>
                    <select
                      name=""
                      id=""
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    >
                      <option value="a">Investimento</option>
                      <option value="a">Aumento Patrimonial</option>
                      <option value="a">Aumento de Capital</option>
                      <option value="a">Renovação de Frota</option>
                      <option value="a">Crédito Imobiliário</option>
                      <option value="a">Crédito Rural</option>
                      <option value="a">Crédito Veículos</option>
                    </select>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="email"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Valor escolhido
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={value}
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    />
                  </div>
                </div>
                <div className="p-2 w-full">
                  <div className="relative">
                    <label
                      htmlFor="message"
                      className="leading-7 text-sm text-gray-600"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button className="bg-black flex mx-auto text-white border-2 py-2 px-8 focus:outline-none rounded text-lg ">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default RangeSlide;
