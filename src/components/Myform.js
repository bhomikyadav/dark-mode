import React, { useState } from "react";

export default function Myform() {
const [btntxt, setbtntxt] = useState("Dark")
const [btnstyle, setbtnstyle] = useState({
    color: "white",
    backgroundColor : "black",
    // border: " 1px solid white",
    borderRadius: "1px"
})
const [mystyle, setmystyle] = useState({
    color: "black",
    backgroundColor : "white",
    border: "0.5px solid black",
    borderRadius: "2px"
   
  });
let darkmode =()=>{
    if(mystyle.color === "black"){
        setmystyle({
            color: "white",
            backgroundColor : "black",
            // border: "0.5px solid white",
            borderRadius: "2px"
             })
             setbtntxt("Light")
             setbtnstyle({
                color: "black",
                backgroundColor : "white",
                // border: " 1px solid black",
                borderRadius: "1px"
            })
            }
             
             else {
                 setmystyle({
                    color: "black",
                    backgroundColor : "white",
                    border: "0.5px solid black",
                    borderRadius: "2px"
                   
                 })
                 setbtntxt("Dark")
                 setbtnstyle({
                    color: "white",
                    backgroundColor : "black",
                    border: " 1px solid white",
                    borderRadius: "1px"
                })

          }
    
}


  return (
    <>
      <div style={mystyle} className="container my-5 py-3 ">
        <div style={mystyle} className="input-group my-3 ">
          <span style={mystyle} className="input-group-text">First and last name</span>
          <input style={mystyle} type="text" aria-label="First name" className="form-control" />
          <input style={mystyle} type="text" aria-label="Last name" className="form-control" />
        </div>
        <div style={mystyle} className="input-group mb-3">
          <span style={mystyle} className="input-group-text" id="basic-addon1">
            @
          </span>
          <input style={mystyle}
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>

        <div style={mystyle} className="input-group mb-3">
          <input style={mystyle}
            type="text"
            className="form-control"
            placeholder="Recipient's username"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <span style={mystyle} className="input-group-text" id="basic-addon2">
            @example.com
          </span>
        </div>

        <label style={mystyle} htmlFor="basic-url" className="form-label">
          Your vanity URL
        </label>
        <div style={mystyle} className="input-group mb-3">
          <span style={mystyle} className="input-group-text" id="basic-addon3">
            https://example.com/users/
          </span>
          <input style={mystyle}
            type="text"
            className="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>

        <div style={mystyle} className="input-group mb-3">
          <span style={mystyle} className="input-group-text">$</span>
          <input style={mystyle}
            type="text"
            className="form-control"
            aria-label="Amount (to the nearest dollar)"
          />
          <span style={mystyle} className="input-group-text">.00</span>
        </div>

        <div style={mystyle} className="input-group mb-3">
          <input style={mystyle}
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
          />
          <span style={mystyle} className="input-group-text">@</span>
          <input style={mystyle}
            type="text"
            className="form-control"
            placeholder="Server"
            aria-label="Server"
          />
        </div>

        <div style={mystyle} className="input-group">
          <span style={mystyle} className="input-group-text">With textarea</span>
          <textarea style={mystyle}
            className="form-control"
            aria-label="With textarea"
          ></textarea>
        </div>
        <button style={btnstyle} type="button" onClick={darkmode} className="btn btn-dark my-3">
          {btntxt}
        </button>
      </div>
    </>
  );
}
