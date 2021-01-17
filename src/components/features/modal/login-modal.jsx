import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Tabs, TabList, Tab, TabPanel } from "react-tabs";
import { connect } from "react-redux";
import Modal from "react-modal";
import store from "../../../store";

import { closeModal } from "../../../actions";
import { LoginHandler, RegisterHandler } from "../../../actions/auth";

const customStyles = {
  content: {
    top: "50%",
    transform: "translateY(-50%)",
  },
  overlay: {
    backgroundColor: "rgba(77,77,77,0.6)",
    zIndex: "10000",
  },
};

Modal.setAppElement("#root");

function LoginModal(props) {
  const { showModal, modal } = props;
  let timer;
  const [state, setstate] = useState({
    mobile_number: "",
    password: "",
    email: "",
    name: "",
  });
  const onSubmitHandler = (e) => {
    e.preventDefault();
    store.dispatch(LoginHandler(state.mobile_number, state.password));
  };
  const onSubmitRegisterHandler = (e) => {
    e.preventDefault();
    store.dispatch(
      RegisterHandler(
        state.mobile_number,
        state.email,
        state.name,
        state.password
      )
    );
  };
  function closeModal() {
    document
      .getElementById("login-modal")
      .classList.remove("ReactModal__Content--after-open");

    timer = setTimeout(() => {
      props.closeModal("login");
    }, 200);
  }

  useEffect(() => {
    return () => {
      if (timer) clearTimeout(timer);
    };
  });

  return (
    <Modal
      isOpen={showModal && "login" === modal}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Login Modal"
      className="modal-dialog modal-dialog-centered"
      id="login-modal"
    >
      <div className="modal-content">
        <div className="modal-body">
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
            onClick={closeModal}
          >
            <span aria-hidden="true">
              <i className="icon-close"></i>
            </span>
          </button>
          <div className="form-box">
            <div className="form-tab">
              <Tabs selectedTabClassName="show" defaultIndex={0}>
                <TabList className="nav nav-pills nav-fill">
                  <Tab className="nav-item">
                    <span className="nav-link">Sign In</span>
                  </Tab>

                  <Tab className="nav-item">
                    <span className="nav-link">Register</span>
                  </Tab>
                </TabList>

                <div className="tab-content">
                  <TabPanel style={{ paddingTop: "2rem" }}>
                    <div>
                      <form action="#" onSubmit={onSubmitHandler}>
                        <div className="form-group">
                          <label htmlFor="singin-email-2">
                            Mobile number *
                          </label>
                          <input
                            type="text"
                            className="form-control"
                            id="singin-email-2"
                            name="singin-email"
                            required
                            onChange={({ target }) => {
                              setstate((old) => ({
                                ...old,
                                mobile_number: target.value,
                              }));
                            }}
                          />
                        </div>

                        <div className="form-group">
                          <label htmlFor="singin-password-2">Password *</label>
                          <input
                            type="password"
                            className="form-control"
                            id="singin-password-2"
                            name="singin-password"
                            required
                            onChange={({ target }) => {
                              setstate((old) => ({
                                ...old,
                                password: target.value,
                              }));
                            }}
                          />
                        </div>

                        <div className="form-footer">
                          <button
                            type="submit"
                            className="btn btn-outline-primary-2"
                          >
                            <span>LOG IN</span>
                            <i className="icon-long-arrow-right"></i>
                          </button>

                          {/* <div className="custom-control custom-checkbox">
                            <input
                              type="checkbox"
                              className="custom-control-input"
                              id="signin-remember-2"
                            />
                            <label
                              className="custom-control-label"
                              htmlFor="signin-remember-2"
                            >
                              Remember Me
                            </label>
                          </div> */}

                          {/* <Link to="#" className="forgot-link">
                            Forgot Your Password?
                          </Link> */}
                        </div>
                      </form>
                      {/* <div className="form-choice">
                                                <p className="text-center">or sign in with</p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <Link to="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Login With Google
                                                    </Link>
                                                    </div>
                                                    <div className="col-sm-6">
                                                        <Link to="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Login With Facebook
                                                    </Link>
                                                    </div>
                                                </div>
                                            </div> */}
                    </div>
                  </TabPanel>

                  <TabPanel>
                    <form action="#" onSubmit={onSubmitRegisterHandler}>
                      <div className="form-group">
                        <label htmlFor="register-email-2">
                          Your email address *
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="register-email-2"
                          name="register-email"
                          required
                          onChange={({ target }) => {
                            setstate((old) => ({
                              ...old,
                              email: target.value,
                            }));
                          }}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-password-2">Name *</label>
                        <input
                          type="name"
                          className="form-control"
                          id="register-name-2"
                          name="register-name"
                          required
                          onChange={({ target }) => {
                            setstate((old) => ({
                              ...old,
                              name: target.value,
                            }));
                          }}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-password-2">
                          Mobile number *
                        </label>
                        <input
                          className="form-control"
                          id="register-name-2"
                          name="register-name"
                          required
                          onChange={({ target }) => {
                            setstate((old) => ({
                              ...old,
                              mobile_number: target.value,
                            }));
                          }}
                        />
                      </div>

                      <div className="form-group">
                        <label htmlFor="register-password-2">Password *</label>
                        <input
                          type="password"
                          className="form-control"
                          id="register-password-2"
                          name="register-password"
                          required
                          onChange={({ target }) => {
                            setstate((old) => ({
                              ...old,
                              password: target.value,
                            }));
                          }}
                        />
                      </div>

                      <div className="form-footer">
                        <button
                          type="submit"
                          className="btn btn-outline-primary-2"
                        >
                          <span>SIGN UP</span>
                          <i className="icon-long-arrow-right"></i>
                        </button>

                        <div className="custom-control custom-checkbox">
                          <input
                            type="checkbox"
                            className="custom-control-input"
                            id="register-policy-2"
                            required
                          />
                          <label
                            className="custom-control-label"
                            htmlFor="register-policy-2"
                          >
                            I agree to the <Link to="#">privacy policy</Link> *
                          </label>
                        </div>
                      </div>
                    </form>
                    {/* <div className="form-choice">
                      <p className="text-center">or sign in with</p>
                      <div className="row">
                        <div className="col-sm-6">
                          <Link to="#" className="btn btn-login btn-g">
                            <i className="icon-google"></i>
                            Login With Google
                          </Link>
                        </div>
                        <div className="col-sm-6">
                          <Link to="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f"></i>
                            Login With Facebook
                          </Link>
                        </div>
                      </div>
                    </div> */}
                  </TabPanel>
                </div>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
}

function mapStateToProps(state) {
  return {
    showModal: state.modal.showModal,
    modal: state.modal.modal,
  };
}

export default connect(mapStateToProps, { closeModal })(LoginModal);
