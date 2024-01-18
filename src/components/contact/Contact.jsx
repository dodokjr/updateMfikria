"use client"
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { Card, Alert, Container, Form, Button } from 'react-bootstrap';


const Contact = () =>
{
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        'service_19cu8fs',
        'template_aggqz48',
        formRef.current,
        'tVJhXv51XVHIQind4'
      )
      .then(
        (result) =>
        {
          console.log('Terkirim');
        },
        (error) =>
        {
          console.log('Terjadi masalah mohon coba lagi');
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <div className="container contact__container">
        <div className="contact__options">
          <Card style={{ width: '18rem' }}>
            <Card.Body>
              <Card.Title>My Email</Card.Title>
              <Card.Text>
                click here to contact me by email
              </Card.Text>
              <Card.Link href="mailto:ffikri604@gmail.com">ffikri604@gmail.com</Card.Link>
            </Card.Body>
          </Card>
        </div>
        <Container>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <Form.Group controlId="form.Name">
              <Form.Control type="text" name='name' placeholder="Your Name" required />
            </Form.Group>
            <Form.Group controlId="form.Email">
              <Form.Control type="email" name='email' placeholder="Your Email" required />
            </Form.Group>
            <Form.Group controlId="form.Textarea">
              <Form.Control as="textarea" rows={3} placeholder="Your message"
                name="message"
                required />
              {/* <EmojiPicker /> */}
            </Form.Group>
            <Button type="submit" variant="light">
              Send Message
            </Button>
            {message &&
              <div>
                <Alert variant="success">
                  This is a success alert with{' '}
                  <Alert.Link href="mailto:ffikri604@gmail.com">ffikri604@gmail.com</Alert.Link>. Give it a click if
                  you like.
                </Alert>
              </div>
            }
          </Form>
        </Container>
      </div>
    </section>
  );
};

export default Contact;
