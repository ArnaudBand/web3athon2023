import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response = await fetch(/api/nodemailer, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus(data.message);
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setStatus('Failed to send Email');
      }
    } catch (error) {
      setStatus('Failed to send email');
    }
  }
  return (
    <section id="contact">
      <div className="container">
        <h3
          className="fn__maintitle big"
          data-text="Contact Us"
          data-align="center"
        >
          Contact Us
        </h3>
        <div className="fn_cs_contact_info">
          <ul>
            <li>
              <div className="item">
                <p>
                  Duis suscipit egestas ullamcorper. Cras porta nulla et
                  tristique pellentesque. Praesent finibus mauris eu
                  sollicitudin interdum. Morbi et blandit quam. Donec vitae
                  massa purus. Curabitur nunc mauris, iaculis a nibh at,
                  ultricies sodales dolor.
                </p>
                <p>
                  Curabitur pharetra velit eget dignissim varius. In vulputate
                  elit at tortor pellentesque, non pulvinar neque consequat.
                </p>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Phone</h4>
                <h3>
                  <a href="tel:+770221770505">+77 022 177 05 05</a>
                </h3>
                <h4 className="lable">Email</h4>
                <h3>
                  <a href="mailto:frenifyteam@gmail.com">
                    frenifyteam@gmail.com
                  </a>
                </h3>
              </div>
            </li>
            <li>
              <div className="item">
                <h4 className="label">Office</h4>
                <h3>124 S Main St, Scottville, MI 49454, United States</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className="fn_cs_contact_form">
          <form
            onSubmit={handleSubmit}
            className="contact_form"
          >
            <div className="input_list">
              <ul>
                <li>
                  <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name *" />
                </li>
                <li>
                  <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Your Email *" />
                </li>
                <li>
                  <input
                    id="tel"
                    type="text"
                    placeholder="Your Phone (optional)"
                  />
                </li>
                <li>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Topic (optional)"
                  />
                </li>
                <li className="full">
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Your Message *"
                    defaultValue={""}
                  />
                </li>
                <li className="full">
                  <label className="fn__checkbox">
                    <input type="checkbox" />
                    <span className="fn__checkmark">
                      <img src="/svg/checked.svg" alt="" className="fn__svg" />
                    </span>
                    <p>
                      I’m okay with getting emails and having that activity
                      tracked to improve my experience.
                    </p>
                  </label>
                  <div className="mw300">
                    <button
                      id="send_message"
                      type={submit}
                      className="metaportal_fn_button full"
                    >
                      <span>Send Message</span>
                    </button>
                    {status && <p>{status}</p>}
                  </div>
                </li>
              </ul>
            </div>
            <div
              className="returnmessage"
              data-success="Your message has been received, We will contact you soon."
            />
            <div className="empty_notice">
              <span>! Please Fill Required Fields !</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contact;
