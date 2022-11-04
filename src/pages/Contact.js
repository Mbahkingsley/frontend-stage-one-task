import Footer from "../components/Footer";

const Contacts = () => {
  return (
    <div>
        <div className="container d-lg-flex justify-content-center flex-column align-items-center ">
      
      <div style={{maxWidth:'100%', marginRight:'29%'}} className="bg-primary mt-4">
        <h2>Contact Me</h2>
        <p className="mt-2 mb-5 ">
          Hi there, Contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form className="mb-40 form-group">
        <label>
          First Name <br />{" "}
          <input style={{maxWidth:'95%'}} size='33' id="first_name" className="form-control mr-5 border rounded-top rounded-bottom h-10" type="text" placeholder="  Enter your first name" required />
        </label>
        <label>
          Last Name <br />{" "}
          <input style={{maxWidth:'95%'}} size='39' id="last_name" className="form-control border rounded-top  rounded bottom h-10" type="text" placeholder="  Enter your last name" required  />
        </label>{" "}
        <br />
        <label className="mt-3">
          Email <br /> <input style={{maxWidth:'95%'}} id="email" type="email" size='85' className=" border rounded-top rounded-bottom h-10 form-control" placeholder="  yourname@email.com" required  />
        </label>{" "}
        <br />
        <label className="mt-3">
          Message <br />{" "}
          <textarea style={{maxWidth:'95%'}} id="message" className="rounded-top rounded-bottom border mb-2 form-control" cols='89'  rows="5" placeholder="  Send me a message and i will reply as soon as possible..."></textarea>{" "}
        </label> <br />
        <input className="mt3 mb-4" type="checkbox" id="" /> <span >you agree to providing your data to {} who may contact you.</span> <br />

        <button style={{maxWidth:'95%'}} id="btn__submit" className="bg-primary w-100 rounded-top rounded-bottom h-10" type="submit">Send message</button>
      </form>
      
    </div>
    
    <div className="container">
      <form className=""></form>
    </div>
    <Footer />
    </div>
  );
};

export default Contacts;
