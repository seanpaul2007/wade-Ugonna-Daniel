import { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Your message has been sent successfully!'
    });
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setFormStatus({
        submitted: false,
        success: false,
        message: ''
      });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Contact <span>Me</span></h2>
        
        <div className="contact-container">
          <div className="contact-info">
            <div className="info-box">
              <div className="info-icon">
                <i class="bi bi-geo-alt"></i>
              </div>
              <div className="info-content">
                <h3>Location</h3>
                <p>Lagos, Nigeria</p>
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-icon">
                <i class="bi bi-envelope"></i>
              </div>
              <div className="info-content">
                <h3>Email</h3>
                <p>brightigwe417@gmail.com</p>
              </div>
            </div>
            
            <div className="info-box">
              <div className="info-icon">
                <i class="bi bi-telephone"></i>
              </div>
              <div className="info-content">
                <h3>Phone</h3>
                <p>+234 808 8179 399</p>
              </div>
            </div>
            
            <div className="contact-socials">
              <h3>Follow Me</h3>
              <div className="social-links">
                <a href="https://github.com/br-1-ght" target="_blank" rel="noopener noreferrer">
                    <i class="bi bi-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/bright-igwe-a705ba361" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-linkedin"></i>
                </a>
                <a href="https://www.instagram.com/b2kg.e/" target="_blank" rel="noopener noreferrer">
                  <i class="bi bi-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <textarea 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message" 
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="btn submit-btn">
                Send Message
              </button>
              
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;