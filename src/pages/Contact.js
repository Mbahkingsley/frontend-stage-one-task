const Contacts = () => {
  return (
    <div>
        <div className="container d-flex justify-content-center flex-column align-items-center ">
      {/* <div className="pl-2 w-100 bg-primary"> */}
      <div className="bg-primary w-50">
        <h2>Contact Me</h2>
        <p className="mt-2 mb-5">
          Hi there, Contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form className="">
        <label>
          First Name <br />{" "}
          <input id="first_name" className="border w-80 mr-4" type="text" placeholder="  Enter your first name" />
        </label>
        <label>
          Last Name <br />{" "}
          <input id="last_name" className="border w-80" type="text" placeholder="  Enter your last name" />
        </label>{" "}
        <br />
        <label className="mt-3">
          Email <br /> <input type="email" size='85' className="border" id="email" placeholder="  yourname@email.com" />
        </label>{" "}
        <br />
        <label className="mt-3">
          Message <br />{" "}
          <textarea id="message" className=" border mb-2" cols="87" rows="5" placeholder="  Send me a message and i will reply as soon as possible..."></textarea>{" "}
        </label> <br />
        <input className="mt3 mb-4" type="checkbox" id="" /> <span >you agree to providing your data to {} who may contact you.</span> <br />

        <button className="bg-primary w-100" id="btn__submit" type="submit">Send message</button>
      </form>
      {/* </div> */}
    </div>
    </div>
  );
};

export default Contacts;
