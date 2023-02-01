import { useState } from "react";
import { validateEmail } from "../utils/helpers";

export default function Contact () {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'name') {
      setName(inputValue);
    } else if (inputType === 'email') {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!name || !message) {
      setErrorMessage('Please be sure that you supply a name and message!');
      return;
    }
    if (!validateEmail(email)) {
      setErrorMessage('You must enter a valid email!');
      return;
    }

    setName('');
    setEmail('');
    setMessage('');
  }

  return (
    <form className='flex flex-col w-full sm:w-[60%] text-[16px]'>
      <input
        className='m-2 p-2'
        value={name}
        name="name"
        onChange={handleInputChange}
        type="text"
        placeholder="Your name..."
      />
      <input
        className='m-2 p-2'
        value={email}
        name="email"
        onChange={handleInputChange}
        type="email"
        placeholder="Your email..."
      />
      <textarea
        className='m-2 p-2 resize-none'
        value={message}
        name="message"
        rows="5"
        placeholder="Your message..."
        onChange={handleInputChange}
      />
      <div className='flex items-center'>
        <button
          className='inline-block rounded-lg m-2 py-2 px-4 bg-dark hover:bg-darkhover text-highlight hover:text-white duration-200'
          onClick={handleFormSubmit}
        >
          Submit
        </button>
        <div>
          {errorMessage}
        </div>
      </div>

    </form>
  )
}