import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { StarIcon } from "./assets/Star";

export const Background = () => {
  const Email = useRef(null);

  const SubmitHandle = (event) => {
    console.log([{ email: Email.current.value }]);
    event.preventDefault();
    event.target.reset();
  };

  return (
    <div className="App">
      <div id="header1">
        <div id="texts">
          <div id="text1">
            team <div id="text2"></div>
          </div>
          <div id="text3">
            <button id="btn2">Products</button>
            <button id="btn2">Services</button>
            <button id="btn2">Contact</button>
            <Link to={"/SignIn"} id="isItWork">
              {" "}
              Login{" "}
            </Link>
            <Button variant="outline-secondary">Get Access</Button>{" "}
          </div>
        </div>
        <form onSubmit={SubmitHandle}>
          <div id="attributes">
            <div id="text4">Instant </div>
            <div id="text5">collaborations for </div>
            <div id="text6">for remote teams </div>
            <div id="text7">All in one for your remote team chats, </div>
            <div id="text8">collaboration and track projects </div>
            <div id="Input">
              <InputGroup className="mb-3 ">
                <Form.Control
                  placeholder="Email"
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button variant="primary">Get Early Access</Button>{" "}
              </InputGroup>
            </div>
          </div>
        </form>
      </div>
      <div id="header2">
        <div id="text9">
          <div id="text10">Your Hub for</div>
          <div id="text11">teamwork</div>
          <div id="text12">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <Link to={"/Stopwatch"}>
            {" "}
            <p id="text">Learn more</p>
          </Link>
        </div>
        <div id="text13">
          <img src="/image/event-1.png" alt="" id="Icon2" />
          <img src="/image/ooto-Meetings-1.jpg" alt="" />
        </div>
      </div>
      <div id="header3">
        <div id="text9">
          <div id="text10">Simple task</div>
          <div id="text11">managment</div>
          <div id="text12">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <Link to={"/Stopwatch"}>
            {" "}
            <p id="text">Learn more</p>
          </Link>
        </div>
        <div id="text14">
          <img src="/image/Mask-group.png" alt="" />
        </div>
      </div>
      <div id="header4">
        <div id="text9">
          <div id="text10">Simple task</div>
          <div id="text11">managment</div>
          <div id="text12">
            Give everyone you work with—inside and outside your company—a more
            productive way to stay in sync. Respond faster with emoji, keep
            conversations focused in channels, and simplify all your
            communication into one place.
          </div>
          <Link to={"/Stopwatch"}>
            {" "}
            <p id="text">Learn more</p>
          </Link>
        </div>
        <div id="text15">
          <img src="/image/brooke-cagle-JBwcenOuRCg-unsplash (1) 1.png" />
        </div>
      </div>
      <div id="header5">
        <div id="text16">What people say about us</div>

        <div id="Workers">
          <div id="Worker1">
            <div id="PinguWannabe">
              <div id="work">
                <div id="Img">
                  {" "}
                  {[1, 2, 3, 4, 5].map((el) => (
                    <StarIcon width={"30px"} height={"30px"} />
                  ))}{" "}
                </div>
                <div id="text17">
                  Give everyone you work with—inside and outside your emoji,
                  keep conversations focused in channels, and simplify all your
                  communication into one place.
                </div>
              </div>
              <div id="Icon">
                <img src="/image/Ellipse.png" id="icon" />
                <div id="Name">Amy Klassen</div>
              </div>
            </div>
          </div>

          <div id="Worker1">
            <div id="PinguWannabe">
              <div id="work">
                <div id="Img">
                  {" "}
                  {[1, 2, 3, 4, 5].map((el) => (
                    <StarIcon width={"30px"} height={"30px"} />
                  ))}{" "}
                </div>
                <div id="text17">
                  Give everyone you work with—inside and outside your emoji,
                  keep conversations focused in channels, and simplify all your
                  communication into one place.
                </div>
              </div>
              <div id="Icon">
                <img src="/image/Avatar.png" id="icon" />
                <div id="Name">Jane Cooper</div>
              </div>
            </div>
          </div>

          <div id="Worker1">
            <div id="PinguWannabe">
              <div id="work">
                <div id="Img">
                  {" "}
                  {[1, 2, 3, 4, 5].map((el) => (
                    <StarIcon width={"30px"} height={"30px"} />
                  ))}{" "}
                </div>
                <div id="text17">
                  Give everyone you work with—inside and outside your emoji,
                  keep conversations focused in channels, and simplify all your
                  communication into one place.
                </div>
              </div>
              <div id="Icon">
                <img src="/image/Avatar-(1).png" id="icon" />
                <div id="Name">Eleanor Pena</div>
              </div>
            </div>
          </div>

          <div id="Worker1">
            <div id="PinguWannabe">
              <div id="work">
                <div id="Img">
                  {" "}
                  {[1, 2, 3, 4, 5].map((el) => (
                    <StarIcon width={"30px"} height={"30px"} />
                  ))}{" "}
                </div>
                <div id="text17">
                  Give everyone you work with—inside and outside your emoji,
                  keep conversations focused in channels, and simplify all your
                  communication into one place.
                </div>
              </div>
              <div id="Icon">
                <img
                  src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/0107d413-a96d-4c96-ba2a-409799dd900a/dex366g-c49c601a-87f8-45af-8a31-9a3d00f856de.png/v1/fill/w_750,h_950,strp/german_wojak_smirk_by_ppercival_dex366g-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9OTUwIiwicGF0aCI6IlwvZlwvMDEwN2Q0MTMtYTk2ZC00Yzk2LWJhMmEtNDA5Nzk5ZGQ5MDBhXC9kZXgzNjZnLWM0OWM2MDFhLTg3ZjgtNDVhZi04YTMxLTlhM2QwMGY4NTZkZS5wbmciLCJ3aWR0aCI6Ijw9NzUwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.GAilRVv9x2KOBjr6Vvx3UGHhSIPm0xV9VgJPrWfs_k8"
                  width={"50px"}
                  height={"50px"}
                  id="icon"
                />
                <div id="Name">Hulugen -2022</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
