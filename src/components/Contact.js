import React, { Fragment, useReducer } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import { MDBBtn, MDBIcon } from "mdbreact";
import BottomLinks from "../components/homepage/BottomLinks";

const divStyle = {
  textAlign: "left",
  marginTop: "2rem",
  fontFamily: "anton",
  fontWeight: "100",
  letterSpacing: "2px",
  border: ".3px solid gray"
};

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

const initialState = {
  name: "",
  email: "",
  subject: "",
  message: "",
  submitted: false
};

function formReducer(state, action) {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "email":
      return { ...state, email: action.value };
    case "subject":
      return { ...state, subject: action.value };
    case "message":
      return { ...state, message: action.value };
    case "submitted":
      return { ...state, submitted: true };
    default:
      throw new Error();
  }
}

const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  // http://127.0.0.1:5000
  const handleSubmit = e => {
    e.preventDefault();
    axios
      .post("/api/sendmail", {
        headers: { "Content-Type": "application/json" },
        name: state.name,
        subject: state.subject,
        email: state.email,
        message: state.message
      })
      .then(() => dispatch({ type: "submitted" }));
    // .catch(error => alert(error));
    //   fetch("/api/sendmail", {
    //     headers: { "Content-Type": "application/json" },
    //     method: "POST",
    //     body: JSON.stringify({ ...state }) //body: encode({ "form-name": "contact", ...state })
    //   })
    //     .then(() => dispatch({ type: "submitted" }))
    //     .catch(error => alert(error));
  };
  return state.submitted ? (
    <Redirect to="/success" />
  ) : (
    <Fragment>
      <div className="container col-lg-4 sections" style={divStyle}>
        <form
          name="contact"
          method={"POST"}
          // data-netlify="true"
          // data-netlify-honeypot="bot-field"
          // action="/success"
          onSubmit={e => handleSubmit(e)}
        >
          <input type="hidden" name="form-name" value="contact" />
          <p className="h3 text-center mt-4 mb-4">Contact Me</p>
          <label className="grey-text">Your name</label>
          <input
            type="text"
            id="name"
            className="form-control"
            name="name"
            value={state.name}
            onChange={e =>
              dispatch({
                type: "name",
                value: e.target.value
              })
            }
          />
          <br />
          <label className="grey-text">Your email</label>
          <input
            type="email"
            id="email"
            className="form-control"
            name="email"
            value={state.email}
            onChange={e =>
              dispatch({
                type: "email",
                value: e.target.value
              })
            }
          />
          <br />
          <label className="grey-text">Subject</label>
          <input
            type="text"
            id="subject"
            className="form-control"
            name="subject"
            value={state.subject}
            onChange={e =>
              dispatch({
                type: "subject",
                value: e.target.value
              })
            }
          />
          <br />
          <label className="grey-text">Your message</label>
          <textarea
            type="text"
            id="message"
            className="form-control"
            rows="3"
            name="message"
            value={state.message}
            onChange={e =>
              dispatch({
                type: "message",
                value: e.target.value
              })
            }
          />

          <div className="text-center mt-4 mb-4">
            <MDBBtn
              color="dark"
              outline
              type="submit"
              id="submit"
              style={{ color: "#06BEE1" }}
            >
              Send
              <MDBIcon far icon="paper-plane" className="ml-2" />
            </MDBBtn>
          </div>
        </form>
      </div>
      <BottomLinks />
    </Fragment>
  );
};

export default Contact;
