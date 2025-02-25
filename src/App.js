import { useState } from "react";
import "./App.css";

export default function App() {

  const [formData, setFormData] = useState({
    name:"",
    address:"",
    phone:"",
    email:"",
    complaint:"",
    contact:"none",
    consent:false
  })

const handleChange = (e) => {
  const {name, value, type, checked} = e.target
  setFormData(prevState => ({
    ...prevState, [name]:type === "checkbox" ? checked : value
  }))
}

const handleSubmit = (e) => {
  e.preventDefault()
  console.log(formData)   //logging value
}

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Complaining form!</h2>
        <div className="form__section-left">
          <label>
            Full name
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
          <label>
            Address
            <input type="text" name="address" value={formData.address} onChange={handleChange} />
          </label>
          <label>
            Phone Number
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
          </label>

          <label>
            Email
            <input type="email" name="email"  value={formData.email} onChange={handleChange} />
          </label>
        </div>

        <div className="form__section-right">
          <label>
            Write your complaint
            <textarea
              name="complaint"
              rows="10"
              value={formData.complaint}
              onChange={handleChange}
              placeholder="You can complain here"
            ></textarea>
          </label>

          <div className="form__radio-group">
            <p>How do you want to be contacted? </p>
            <label>
              <input type="radio" name="contact" value="phone" checked={formData.contact === "phone"} onChange={handleChange} />
              Phone
            </label>

            <label>
              <input type="radio" name="contact" value="email" checked={formData.contact === "email"} onChange={handleChange} />
              Email
            </label>

            <label>
              <input type="radio" name="contact" value="post" checked={formData.contact === "post"} onChange={handleChange} />
              Slow Mail
            </label>

            <label>
              <input type="radio" name="contact" value="none" checked={formData.contact === "none"} onChange={handleChange} />
              No contact!
            </label>
          </div>

          <label>
            I agree you take my data, and do whatever
            <input type="checkbox" name="consent" id="consent" checked={formData.consent} onChange={handleChange}/>
          </label>
        </div>
        <input type="submit" value="Submit!" />
      </form>
    </>
  );
}
