import React from "react"
import { SignIn } from "./SignIn";
import { useRef } from "react";

export const Background = () => {
  const Email = useRef(null);

  const SubmitHandle = event => {
    console.log([{"email" : Email.current.value}])
    event.preventDefault();
    event.target.reset();
  }

    return (
        <div className="App">
        <div id='E'>
          <div id='texts'>
            <div id='text1'>team <div id='text2'></div></div>
            <div id='text3'>
              <button id='btn2'>Products</button>
              <button id='btn2'>Services</button>
              <button id='btn2'>Contact</button>
              <button id='btn'>Get Access</button>
            </div>
          </div>
          <form onSubmit={SubmitHandle}>
          <div id='attributes'>
              <div id='text4' >Instant </div>
              <div id='text5' >collaborations for </div>
              <div id='text6' >for remote teams </div>
              <div id='text7' >All in one for your remote team chats,  </div>
              <div id='text8' >collaboration and track projects </div>
              <div id='Input'>
                <input type='email' id="email-input" placeholder='Email' ref={Email} />
                <button id='btn1' type="submit">Get Early Access</button>
              </div>
          </div>
          </form>
          < logo />
        </div>
      </div>
    );
}