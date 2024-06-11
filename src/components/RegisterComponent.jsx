// import React, { useEffect, useRef, useState } from 'react'
// import { Link, useParams } from 'react-router-dom'

// import AuthenticationService from '../services/AuthenticationService';

// import UserService from '../services/UserService'
// import { faCheck, faTimes, faInfoCircle, faDiagramSuccessor } from "@fortawesome/free-solid-svg-icons"
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import '../styles/RegisterComponent.css'
// const USER_REGEX = /^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;
// const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;

// export const RegisterComponent = () => {
//     const [firstName, setFirstName] = useState('')
//     const [lastName, setLastName] = useState('')
//     const [email, setEmail] = useState('')
//     const [phoneNumber, setPhoneNumber] = useState('')

//     const [role, setRole] = useState('USER')
//     //focus on user input
//     const userRef = useRef()
//     //focus on error appearing
//     const errorRef = useRef()
//     //USERNAME RELATED VARS
//     //username
//     const [user, setUser] = useState('')
//     //if username is valid
//     const [validName, setValidName] = useState(false)
//     //is the focus on username textbox
//     const [userFocus, setUserFocus] = useState(false)
//     const [errMsg, seterrMsg] = useState('')
//     //PASSWORD RELATED VARS
//     //PASSWORD
//     const [pwd, setPwd] = useState('')
//     //if password is valid
//     const [validPwd, setValidPwd] = useState(false)
//     //is the focus on password textbox
//     const [pwdFocus, setPwdFocus] = useState(false)
//     const [success,setSuccess]=useState(false)
//     //CONFIRM PASSWORD RELATED VARS
//     //CONFIRM PASSWORD
//     const [matchPwd, setMatchPwd] = useState('')
//     //if password and confirmpassword are the same
//     const [validMatch, setValidMatch] = useState(false)
//     //is the focus on confirm password textbox
//     const [matchFocus, setMatchFocus] = useState(false)

//     //TO SET USER FOCUS
//     useEffect(() => {
//         //sets the focus on user input
//         userRef.current.focus()
//         console.log("First Hook invoked.. Focus is set on user input")
//     }, []
//     )
//     //validates the username
//     useEffect(() => {
//         const result = USER_REGEX.test(user)
//         console.log("Second Hook invoked.. Result of valid username test for username " + user + " is " + result)
//         setValidName(result)
//         console.log("Valid username state variable set with value: " + result)

//     }, [user])
//     //validates the password and confirm password match
//     useEffect(() => {
//         const result = PWD_REGEX.test(pwd)
//         console.log("Third Hook invoked.. result of valid password test for password: " + pwd + " is " + result)
//         setValidPwd(result)
//         console.log("Valid password state variable set with value: " + result)

//         const matchResult = pwd === matchPwd;
//         console.log("Valid match state variable set with value: " + matchResult)

//         setValidMatch(matchResult)

//     }, [pwd, matchPwd])

//     useEffect(() => {
//         console.log("fourth hook invoked.error message is cleared")
//         seterrMsg('')
//     }, [user, pwd, matchPwd])

//     const { id } = useParams()
//     useEffect(() => {
//         console.log("useEffect triggered...")
//         console.log("id value recieved from URL using useParams() ", id)
//         if (id) {
//             // UserService.getUserById(id)
//             //     .then((response) => {
//             //         console.log("data recieved from getbyid api.", JSON.stringify(response.data));
//             //         setFirstName(response.data.firstName);
//             //         setLastName(response.data.lastName);
//             //         setEmail(response.data.email);
//             //         setPhoneNumber(response.data.phoneNumber);
//             //         setUsername(response.data.username);
//             //         setPassword(response.data.password);
//             //         setRole(response.data.role);
//             //         console.log("state variables changed,");
//             //         console.log("changed state var:")
//             //     }).catch(error => { console.log("Error recieved from getbyid api..", error); });
//         }
//     }, [])
//     const changeTitle = () => {
//         if (id) {
//             console.log("returned title update user . id value from url:", { id });
//             return <h2 className="text-center">Update User</h2>
//         } else {
//             console.log("returned title add user.");
//             return <h2 className="text-center">Add User</h2>
//         }
//     }
//     const registerationOrUpdate = (e) => {
//         e.preventDefault();
//         const registerUser = {
//             firstName: firstName, lastName: lastName, email: email, phoneNumber: phoneNumber, username: user, password: pwd, role: role
//         }
//         console.log("user object saved from form:", registerUser);
//         if (id) {
//             UserService.updateUser(id, registerUser)
//                 .then((response) => {
//                     console.log("Response recieved from update api.." + JSON.stringify(response.data));
//                 })
//                 .catch(error => { console.log("Error recieved from update api..", error); });
//         }
//         else {
//             // save user
//             AuthenticationService.registerUser(registerUser)
//                 .then((response) => {
//                     console.log("Response recieved from register api.." + JSON.stringify(response.data));
//                     setSuccess(true)
//                 })
//                 .catch(error => {
//                     console.log("Error recieved from register api..", error);
//                     if (!error?.response) {
//                         seterrMsg("No server response")
//                     }
//                     else if (error.response?.status == 500) {
//                         seterrMsg("username taken")

//                     }
//                     else {
//                         seterrMsg("Registration failed...")
//                     }
//                 });
//         }
//     }

//     return ((success) ? <>
//         <section>
//             <h1>Success!!</h1>
//             <p>
//                 <Link to='/login'>Login</Link>
//             </p>
//         </section>
//     </> :
//         <div>
//             {console.log("Application rendered...")}
//             <div className="container">
//                 <div className="card col-md-6 offset-md-3">
//                     <p ref={errorRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
//                         {errMsg}
//                     </p>
//                     <h2 className="text-centre">{changeTitle()}</h2>
//                     <div className="card-body">
//                         <form>
//                             {/* firstName textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">First Name</label>
//                                 <input type="text" placeholder='Enter first name' name='firstName' value={firstName} className='form-control' onChange={(e) => { setFirstName(e.target.value) }} />
//                             </div>
//                             {/* lastName textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Last Name</label>
//                                 <input type="text" placeholder='Enter last name' name='lastName' value={lastName} className='form-control' onChange={(e) => { setLastName(e.target.value) }} />
//                             </div>
//                             {/* email textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Email</label>
//                                 <input type="text" placeholder='Enter email id' name='email' value={email} className='form-control' onChange={(e) => { setEmail(e.target.value) }} />
//                             </div>
//                             {/* phoneNumber textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Phone Number</label>
//                                 <input type="text" placeholder='Enter phone number' name='phoneNumber' value={phoneNumber} className='form-control' onChange={(e) => { setPhoneNumber(e.target.value) }} />
//                             </div>
//                             {/* username textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">
//                                     Username
//                                     <span className={validName ? "valid" : "hide"}>
//                                         <FontAwesomeIcon icon={faCheck} />

//                                     </span>
//                                     <span className={!validName && user ? "invalid" : "hide"}>
//                                         <FontAwesomeIcon icon={faTimes} />
//                                     </span>
//                                 </label>
//                                 <input type="text" placeholder='Enter username' name='username'
//                                 autoComplete='off'
//                                 ref={userRef} value={user} className='form-control' onChange={(e) => { setUser(e.target.value) }} required
//                                     aria-invalid={validName ? "false" : "true"}
//                                     aria-describedby="uidnote"
//                                     onFocus={() => setUserFocus(true)}
//                                     onBlur={() => setUserFocus(false)} />
//                                 <p id="uidnote" className={userFocus && !validName ? "instructions" : "offscreen"}>
//                                     <FontAwesomeIcon icon={faInfoCircle} />
//                                     4 to 24 chars.<br />
//                                     Must begin with a letter.<br />
//                                     Letters,Numbers,underscore,hyphen allowed
//                                 </p>
//                             </div>
//                             {/* password textbox */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">
//                                     Password
//                                     <FontAwesomeIcon icon={faCheck}
//                                         className={validPwd ? "valid" : "hide"} />
//                                     <FontAwesomeIcon icon={faTimes}
//                                         className={validPwd || !pwd ? "hide" : "invalid"} />
//                                 </label>
//                                 <input type="password" placeholder='Enter password' name='password' value={pwd} className='form-control' onChange={(e) => { setPwd(e.target.value) }} required
//                                     aria-invalid={validPwd ? "false" : "true"}
//                                     aria-describedby="pwdnote"
//                                     onFocus={() => setPwdFocus(true)}
//                                     onBlur={() => setPwdFocus(false)} />
//                                 <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
//                                     <FontAwesomeIcon icon={faInfoCircle} />
//                                     8 to 24 chars.<br />
//                                     Must include uppercase & lowercase letters, anumber & a spacial symbol<br />
//                                     Allowed special characters:
//                                     <span aria-label="exclamation mark">!</span>
//                                     <span aria-label="hashtag">#</span>
//                                     <span aria-label="dollor sign">$</span>
//                                     <span aria-label="percent">%</span>
//                                 </p>
//                             </div>
//                             {/* CONFIRM PASSWORD */}
//                             <div className="form-group mb-2">
//                                 <label className="form-label">Confirm Password:
//                                     <FontAwesomeIcon icon={faCheck}
//                                         className={validMatch && matchPwd ? "valid" : "hide"} />
//                                     <FontAwesomeIcon icon={faTimes}
//                                         className={validMatch || !matchPwd ? "hide" : "invalid"} /></label>
//                                 <input type="password" placeholder='Enter password' name='email' className='form-control' onChange={(e) => setMatchPwd(e.target.value)}
//                                     value={matchPwd}
//                                     required
//                                     aria-invalid={validMatch ? "false" : "true"}
//                                     aria-describedby="confirmnote"
//                                     onFocus={() => { setMatchFocus(true) }}
//                                     onBlur={() => { setMatchFocus(false) }} />
//                                 <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
//                                     <FontAwesomeIcon icon={faInfoCircle} />
//                                     Confirm password must match with the  password

//                                 </p>
//                             </div>
//                             <button onClick={(e) => registerationOrUpdate(e)} className="btn btn-success mx-3">create account</button>
//                             <Link to="/" className="btn btn-danger ">Back</Link>
//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }




import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import AuthenticationService from "../services/AuthenticationService";
import UserService from "../services/UserService";
import {
  faCheck,
  faTimes,
  faInfoCircle,
  faDiagramSuccessor,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../styles/RegisterComponent.css";
import "../styles/BackButton.css";
import { AuthContext } from "../context/AuthProvider";


const USER_REGEX = /^[A-Za-z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$]).{8,24}$/;

export const RegisterComponent = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const {auth}= useContext(AuthContext)

  const [role, setRole] = useState("USER");
  //focus on user input
  const userRef = useRef();
  //focus on error appearing
  const errorRef = useRef();
  //USERNAME RELATED VARS
  //username
  const [user, setUser] = useState("");
  //if username is valid
  const [validName, setValidName] = useState(false);
  //is the focus on username textbox
  const [userFocus, setUserFocus] = useState(false);
  const [errMsg, seterrMsg] = useState("");
  //PASSWORD RELATED VARS
  //PASSWORD
  const [pwd, setPwd] = useState("");
  //if password is valid
  const [validPwd, setValidPwd] = useState(false);
  //is the focus on password textbox
  const [pwdFocus, setPwdFocus] = useState(false);
  const [success, setSuccess] = useState(false);
  //CONFIRM PASSWORD RELATED VARS
  //CONFIRM PASSWORD
  const [matchPwd, setMatchPwd] = useState("");
  //if password and confirmpassword are the same
  const [validMatch, setValidMatch] = useState(false);
  //is the focus on confirm password textbox
  const [matchFocus, setMatchFocus] = useState(false);

  //TO SET USER FOCUS
  useEffect(() => {
    //sets the focus on user input
    userRef.current.focus();
    console.log("First Hook invoked.. Focus is set on user input");
  }, []);

  //validates the username
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(
      "Second Hook invoked.. Result of valid username test for username " +
        user +
        " is " +
        result
    );
    setValidName(result);
    console.log("Valid username state variable set with value: " + result);
  }, [user]);
  //validates the password and confirm password match
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(
      "Third Hook invoked.. result of valid password test for password: " +
        pwd +
        " is " +
        result
    );
    setValidPwd(result);
    console.log("Valid password state variable set with value: " + result);

    const matchResult = pwd === matchPwd;
    console.log("Valid match state variable set with value: " + matchResult);

    setValidMatch(matchResult);
  }, [pwd, matchPwd]);

  useEffect(() => {
    console.log("fourth hook invoked.error message is cleared");
    seterrMsg("");
  }, [user, pwd, matchPwd]);

  const { id } = useParams();


  // useEffect(() => {
  //   console.log("useEffect triggered...");
  //   console.log("id value recieved from URL using useParams() ", id);
  //   if (id) {
  //     // UserService.getUserById(id,auth.accessToken)
  //     //     .then((response) => {
  //     //         console.log("data recieved from getbyid api.", JSON.stringify(response.data));
  //     //         setFirstName(response.data.firstName);
  //     //         setLastName(response.data.lastName);
  //     //         setEmail(response.data.email);
  //     //         setPhoneNumber(response.data.phoneNumber);
  //     //         setUsername(response.data.username);
  //     //         setPassword(response.data.password);
  //     //         setRole(response.data.role);
  //     //         console.log("state variables changed,");
  //     //         console.log("changed state var:")
  //     //     }).catch(error => { console.log("Error recieved from getbyid api..", error); });
  //   }
  // }, []);
  
  const changeTitle = () => {
    if (id) {
      console.log("returned title update user . id value from url:", { id });
      return <h2 className="text-center">Update User</h2>;
    } else {
      console.log("returned title add user.");
      return <h2 className="text-center">Sign Up</h2>;
    }
  };
  const registerationOrUpdate = (e) => {
    e.preventDefault();
    const registerUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      username: user,
      password: pwd,
      role: role,
    };
    console.log("user object saved from form:", registerUser);
    if (id) {
      UserService.updateUser(id, registerUser,auth.accessToken)
        .then((response) => {
          console.log(
            "Response recieved from update api.." +
              JSON.stringify(response.data)
          );
        })
        .catch((error) => {
          console.log("Error recieved from update api..", error);
        });
    } else {
      // save user
      AuthenticationService.registerUser(registerUser)
        .then((response) => {
          console.log(
            "Response recieved from register api.." +
              JSON.stringify(response.data)
          );
          setSuccess(true);
        })
        .catch((error) => {
          console.log("Error recieved from register api..", error);
          if (!error?.response) {
            seterrMsg("No server response");
          } else if (error.response?.status == 500) {
            seterrMsg("username taken");
          } else {
            seterrMsg("Registration failed...");
          }
        });
    }
  };

  return success ? (
    <>
      <section>
        <h1>Success!!</h1>
        <p>
          <Link to="/login">Login</Link>
        </p>
      </section>
    </>
  ) : (
    <section className="flex  ">
      <div className="flex   shadow-2xl pr-3 bg-blend-overlay">
        <div className="flex py-10 sm:py-16 w-1/2 lg:py-24">
          {console.log("Application rendered...")}
          <div className="container ">
            <div className="card col-md-10 offset-md-2">
              <p
                ref={errorRef}
                className={errMsg ? "errmsg" : "offscreen"}
                aria-live="assertive"
              >
                {errMsg}
              </p>
              <h2 className="text-centre">{changeTitle()}</h2>
              <div className="card-body">
                <form>
                  {/* firstName textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">First Name</label>
                    <input
                      type="text"
                      placeholder="Enter first name"
                      name="firstName"
                      value={firstName}
                      className="form-control"
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                  </div>
                  {/* lastName textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">Last Name</label>
                    <input
                      type="text"
                      placeholder="Enter last name"
                      name="lastName"
                      value={lastName}
                      className="form-control"
                      onChange={(e) => {
                        setLastName(e.target.value);
                      }}
                    />
                  </div>
                  {/* email textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">Email</label>
                    <input
                      type="text"
                      placeholder="Enter email id"
                      name="email"
                      value={email}
                      className="form-control"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                  </div>
                  {/* phoneNumber textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">Phone Number</label>
                    <input
                      type="text"
                      placeholder="Enter phone number"
                      name="phoneNumber"
                      value={phoneNumber}
                      className="form-control"
                      onChange={(e) => {
                        setPhoneNumber(e.target.value);
                      }}
                    />
                  </div>
                  {/* username textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">
                      Username
                      <span className={validName ? "valid" : "hide"}>
                        <FontAwesomeIcon icon={faCheck} />
                      </span>
                      <span className={!validName && user ? "invalid" : "hide"}>
                        <FontAwesomeIcon icon={faTimes} />
                      </span>
                    </label>
                    <input
                      type="text"
                      placeholder="Enter username"
                      name="username"
                      autoComplete="off"
                      ref={userRef}
                      value={user}
                      className="form-control"
                      onChange={(e) => {
                        setUser(e.target.value);
                      }}
                      required
                      aria-invalid={validName ? "false" : "true"}
                      aria-describedby="uidnote"
                      onFocus={() => setUserFocus(true)}
                      onBlur={() => setUserFocus(false)}
                    />
                    <p
                      id="uidnote"
                      className={
                        userFocus && !validName ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      4 to 24 chars.
                      <br />
                      Must begin with a letter.
                      <br />
                      Letters,Numbers,underscore,hyphen allowed
                    </p>
                  </div>
                  {/* password textbox */}
                  <div className="form-group mb-2">
                    <label className="form-label">
                      Password
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validPwd || !pwd ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      name="password"
                      value={pwd}
                      className="form-control"
                      onChange={(e) => {
                        setPwd(e.target.value);
                      }}
                      required
                      aria-invalid={validPwd ? "false" : "true"}
                      aria-describedby="pwdnote"
                      onFocus={() => setPwdFocus(true)}
                      onBlur={() => setPwdFocus(false)}
                    />
                    <p
                      id="pwdnote"
                      className={
                        pwdFocus && !validPwd ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      8 to 24 chars.
                      <br />
                      Must include uppercase & lowercase letters, anumber & a
                      spacial symbol
                      <br />
                      Allowed special characters:
                      <span aria-label="exclamation mark">!</span>
                      <span aria-label="hashtag">#</span>
                      <span aria-label="dollor sign">$</span>
                      <span aria-label="percent">%</span>
                    </p>
                  </div>
                  {/* CONFIRM PASSWORD */}
                  <div className="form-group mb-2">
                    <label className="form-label">
                      Confirm Password:
                      <FontAwesomeIcon
                        icon={faCheck}
                        className={validMatch && matchPwd ? "valid" : "hide"}
                      />
                      <FontAwesomeIcon
                        icon={faTimes}
                        className={validMatch || !matchPwd ? "hide" : "invalid"}
                      />
                    </label>
                    <input
                      type="password"
                      placeholder="Enter password"
                      name="email"
                      className="form-control"
                      onChange={(e) => setMatchPwd(e.target.value)}
                      value={matchPwd}
                      required
                      aria-invalid={validMatch ? "false" : "true"}
                      aria-describedby="confirmnote"
                      onFocus={() => {
                        setMatchFocus(true);
                      }}
                      onBlur={() => {
                        setMatchFocus(false);
                      }}
                    />
                    <p
                      id="confirmnote"
                      className={
                        matchFocus && !validMatch ? "instructions" : "offscreen"
                      }
                    >
                      <FontAwesomeIcon icon={faInfoCircle} />
                      Confirm password must match with the password
                    </p>
                  </div>
                  <button
                    onClick={(e) => registerationOrUpdate(e)}
                    className="btn btn-success mx-3"
                  >
                    create account
                  </button>
                  <Link to="/" className="custButton btn">
                    <svg
                      height="16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                      version="1.1"
                      viewBox="0 0 1024 1024"
                    >
                      <path d="M874.690416 495.52477c0 11.2973-9.168824 20.466124-20.466124 20.466124l-604.773963 0 188.083679 188.083679c7.992021 7.992021 7.992021 20.947078 0 28.939099-4.001127 3.990894-9.240455 5.996574-14.46955 5.996574-5.239328 0-10.478655-1.995447-14.479783-5.996574l-223.00912-223.00912c-3.837398-3.837398-5.996574-9.046027-5.996574-14.46955 0-5.433756 2.159176-10.632151 5.996574-14.46955l223.019353-223.029586c7.992021-7.992021 20.957311-7.992021 28.949332 0 7.992021 8.002254 7.992021 20.957311 0 28.949332l-188.073446 188.073446 604.753497 0C865.521592 475.058646 874.690416 484.217237 874.690416 495.52477z"></path>
                    </svg>
                    <span>Back</span>
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="h-auto flex py-10 sm:py-16 w-1/2 lg:py-24">
          <img
            className="mx-auto h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1630673245362-f69d2b93880e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};
