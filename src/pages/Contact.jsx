import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';
import PageWrapper from '../components/PageWrapper';
import { Send, CheckCircle, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        'service_tyokozy', // Your connected Service ID
        'template_kqtyasw', // Replace with your created Template ID
        {
          name: data.name,
          email: data.email,
          message: data.message,
        },
        '1z3x8RibRe_iQDt2m' // Replace with your Public Key
      );

      setIsSubmitting(false);
      setIsSuccess(true);
      toast.success('Message sent successfully!', {
        style: {
          borderRadius: '10px',
          background: '#333',
          color: '#fff',
        },
      });
      reset();

      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      setIsSubmitting(false);
      toast.error('Failed to send message. Please check connection.', {
        style: { borderRadius: '10px', background: '#333', color: '#fff' }
      });
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <PageWrapper>
      <Toaster position="bottom-right" />
      <div className="page-center">
        <h1 className="section-title">
          Let's <span className="text-gradient-accent">Connect</span>
        </h1>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))',
          gap: '50px',
          background: 'var(--color-surface)',
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--glass-shadow)'
        }} className="glass">

          {/* Contact Info */}
          <div>
            <h2 style={{ fontSize: '2rem', marginBottom: '20px' }}>Get in Touch</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '40px', lineHeight: '1.8' }}>
              Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '25px' }}>
              <div className="contact-item">
                <div className="icon-box"><Mail size={24} color="var(--color-primary)" /></div>
                <div>
                  <h4 style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Email</h4>
                  <p style={{ fontWeight: 500 }}>logeshudhayakumar18@gmail.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><MapPin size={24} color="var(--color-secondary)" /></div>
                <div>
                  <h4 style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Location</h4>
                  <p style={{ fontWeight: 500 }}>Chennai, Tamil Nadu, India</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box"><Phone size={24} color="var(--color-accent)" /></div>
                <div>
                  <h4 style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Phone</h4>
                  <p style={{ fontWeight: 500 }}>+91 7871867548</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div style={{ position: 'relative' }}>
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '100%',
                    textAlign: 'center'
                  }}
                >
                  <CheckCircle size={80} color="var(--color-accent)" style={{ marginBottom: '20px' }} />
                  <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--color-text-secondary)' }}>Thank you for reaching out. I'll get back to you soon.</p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit(onSubmit)}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
                >
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="form-input"
                      {...register("name", { required: true })}
                    />
                    {errors.name && <span className="error-text">Name is required</span>}
                  </div>

                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="form-input"
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    />
                    {errors.email && <span className="error-text">Valid email is required</span>}
                  </div>

                  <div>
                    <textarea
                      placeholder="Your Message..."
                      rows="5"
                      className="form-input"
                      {...register("message", { required: true })}
                    ></textarea>
                    {errors.message && <span className="error-text">Message is required</span>}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="submit-btn"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'} <Send size={18} />
                  </motion.button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      <style>{`
        .contact-item {
          display: flex;
          align-items: center;
          gap: 15px;
          word-break: break-all;
          overflow-wrap: anywhere;
        }
        .icon-box {
          width: 50px;
          height: 50px;
          flex-shrink: 0; /* Prevent icon squashing */
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: center;
          justifyContent: center;
          border: 1px solid var(--color-border);
        }
        .icon-box svg { margin: auto; }
        .form-input {
          width: 100%;
          padding: 15px 20px;
          border-radius: 12px;
          background: rgba(0,0,0,0.2);
          border: 1px solid var(--color-border);
          color: #fff;
          font-size: 1rem;
          transition: all 0.3s;
        }
        .form-input:focus {
          border-color: var(--color-primary);
          box-shadow: 0 0 10px rgba(121, 40, 202, 0.3);
        }
        .error-text {
          color: #ff4d4d;
          font-size: 0.8rem;
          margin-top: 5px;
          display: block;
        }
        .submit-btn {
          padding: 15px 30px;
          background: linear-gradient(135deg, var(--color-primary), var(--color-secondary));
          color: #fff;
          font-weight: 600;
          font-size: 1.1rem;
          border-radius: 12px;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 10px;
          box-shadow: var(--glow-primary);
        }
        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </PageWrapper>
  );
};

export default Contact;
