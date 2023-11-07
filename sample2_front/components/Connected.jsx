"use client";
import React from "react";
import { useEffect, useState } from "react";

const Connected = (props) => {
  return (
    <section className="lg:pt-8 flex flex-items justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img relative items-center flex-cols">
      {/* overlay */}
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2] " />
      <div className="z-[9]">
        <div className="connected-header m-auto text-md p-3 border rounded-lg text-center items-center">
          You are connected to metamask
        </div>
        <div className="text-md p-2 m-auto text-center items-center">
          Connected account is <br /> {props.account}
        </div>
        <p>Remaining Time: {props.remainingTime}</p>
        {props.showButton ? (
          <p>you have already voted</p>
        ) : (
          <div>
            <input
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              type="number"
              placeholder="Enter candidate Index"
              value={props.number}
              onChange={props.handleNumberChange}
            ></input>
            <div className="flex items-center">
              <button
                onClick={props.voteFunction}
                className="login-button items-center justify-center my-3"
              >
                Vote
              </button>
            </div>
          </div>
        )}

        <div>
          <table id="myTable">
            <thead>
              <tr>
                <th>Index</th>
                <th>Candidate name</th>
                <th>Candidate votes</th>
              </tr>
            </thead>
            <tbody>
              {props.candidates.map((candidate, index) => (
                <tr key={index}>
                  <td>{candidate.index}</td>
                  <td>{candidate.name}</td>
                  <td>{candidate.voteCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Connected;
