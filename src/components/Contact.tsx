"use client";

import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error('failed');

      setSent(true);
      setForm({ firstName: '', lastName: '', email: '', subject: '', message: '' });

    } catch {
      setError('Something went wrong. Please try again or email me directly.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className={styles.section} id="contact">
      <div className="container">
        <p className="section-label">Get in touch</p>
        <h2 className="section-title">Contact</h2>

        <div className={styles.introText}>
          <p>I am currently looking for a <span className={styles.highlight}>Praktikum in Software Development</span>.</p>
          <p>Available immediately — motivated to contribute to a professional team, learn from experienced developers, and bring more value through my fullstack skills.</p>
        </div>

        {sent ? (
          <div style={{ textAlign: 'center'}}>
          <p className={styles.successMsg}>
            Message sent! I&apos;ll get back to you soon.
          </p>
          <button 
            className={styles.btn}
            style={{marginTop: '16px', maxWidth: '240px', margin: '16px auto 0'}}
            onClick={() => setSent(false)}
          >
            Send another message
          </button>
          </div>

        ) : (
          <div className={styles.form}>
            <div className={styles.row}>
              <input
                className={styles.input}
                name="firstName"
                placeholder="First name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                className={styles.input}
                name="lastName"
                placeholder="Last name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              className={styles.input}
              name="email"
              type="email"
              placeholder="Email address"
              value={form.email}
              onChange={handleChange}
            />
            <input
              className={styles.input}
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              className={styles.textarea}
              name="message"
              placeholder="Your message..."
              value={form.message}
              onChange={handleChange}
            />
            {error && (
              <p style={{ color: '#ff2d55', fontSize: '12px', textAlign: 'center' }}>
                {error}
              </p>
            )}
            <button 
              className={styles.btn} 
              onClick={handleSubmit} 
              disabled={loading} 
              style={{opacity: loading ? 0.6 : 1}}
            >
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        )}
      </div>

    </section>
  );
}
