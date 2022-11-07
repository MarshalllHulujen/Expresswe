import React from "react"
import { useRef } from "react";
import { Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import "bootstrap/dist/css/bootstrap.min.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';


export const Background = () => {
  const Email = useRef(null);

  const SubmitHandle = event => {
    console.log([{"email" : Email.current.value}])
    event.preventDefault();
    event.target.reset();
  }

    return (
        <div className="App">
        <div id='header1'>
          <div id='texts'>
            <div id='text1'>team <div id='text2'></div></div>
            <div id='text3'>
              <button id='btn2'>Products</button>
              <button id='btn2'>Services</button>
              <button id='btn2'>Contact</button>
              <Link to={"/SignIn"} id='isItWork' > Login </Link>
              <Button variant="outline-secondary">Get Access</Button>{' '}
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
              <InputGroup className="mb-3 ">
              <Form.Control
                placeholder="Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <Button variant="primary">Get Early Access</Button>{' '}
              </InputGroup>
              </div>
          </div>
          </form>
        </div>
        <div id="header2">
          <div id="text9">
            <div id="text10">Your Hub for</div>
            <div id="text11">teamwork</div>
            <div id="text12">Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place.</div>
            <Link to={"/Stopwatch"}> <p id="text">Learn more</p></Link>
          </div>
          <div id="text13">
            <img src="/image/event-1.png" alt="" />
            <img src="/image/ooto-Meetings-1.jpg" alt=""/>
          </div>
        </div>
      </div>
    );
}