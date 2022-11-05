import Footer from "../components/Footer";
import { useForm }  from "react-hook-form";

const Contacts = () => {
  const { register, handleSubmit,formState: {errors} } = useForm()
  
  const onSubmit = data => {
    console.log(data);
  };

  return (
    <div>
        <div className="container-fluid d-lg-flex justify-content-center flex-column align-items-center ">
      
      <div style={{maxWidth:'70%', marginRight:'23%'}} className="mt-4 ">
        <h2>Contact Me</h2>
        <p className="mt-2 mb-3 ">
          Hi there, Contact me to ask me about anything you have in mind.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mb-40 form-group">
         <div className="d-flex">             
        <label>
          First Name {" "}
          <input style={{maxWidth:'95%'}} size='33' id="first_name" className="form-control mt-2 mr-5 border rounded-top mb-3 rounded-bottom h-10" type="text" placeholder="Enter your first name" {...register("firstname",{required: true})} />
          {errors.firstname && <sub><em className="text-danger">Please check the First Name</em></sub>}
          
        </label>
        <label className="mb-3">
          Last Name {" "}
          <input style={{maxWidth:'95%'}} size='39' id="last_name" className="form-control mt-2 border rounded-top mb-3  rounded bottom h-10" type="text" placeholder="Enter your last name" {...register("lastname",{required: true})} />
          {errors.lastname && <sub><em className="text-danger">Please check the last Name</em></sub>}
        </label>{" "}
        <br />
          </div>
        <label className="">
          Email <br /> <input style={{maxWidth:'95%'}} id="email" type="email" size='85' className=" border mt-2 rounded-top rounded-bottom h-10 form-control" placeholder="yourname@email.com" {...register("email",{required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })} />
          {errors.email && <sub><em className="text-danger">Please check the email</em></sub>}
        </label>{" "}
        <br />
        <label className="mt-3">
          Message <br />{" "}
          <textarea style={{maxWidth:'95%'}} id="message" className="rounded-top rounded-bottom mt-2 border form-control" cols='89'  rows="5" placeholder="Send me a message and i will reply as soon as possible..." {...register("message",{required: true})}></textarea>{" "}
          {errors.message && <sub><em className="text-danger">Please enter a message</em></sub>}
        </label> <br />
        <div className="mt-3 mb-3">
        <input type="checkbox" id="" /> <span >you agree to providing your data to Kingsley who may contact you.</span> <br />
        </div>
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
