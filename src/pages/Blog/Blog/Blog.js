import React from 'react';
import { Container } from 'react-bootstrap';
import './Blog.css';
import { Helmet } from 'react-helmet-async';

const Blog = () => {
    return (
        <Container>
            <Helmet>
                <title>Blog</title>
            </Helmet>
            <h2 className='text-center title green-color mb-5'>Blog</h2>
            <div className='blog'>
                <h4 className='green-color'>Difference between SQL and NoSQL?</h4>
                <p>SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database. Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases. SQL databases are vertically scalable, while NoSQL databases are horizontally scalable. SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data. Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</p>
            </div>
            <div className='blog'>
                <h4 className='green-color'>What is JWT, and how does it work?</h4>
                <p>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued. JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted. A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
            </div>
            <div className='blog'>
                <h4 className='green-color'>What is the difference between javascript and NodeJS?</h4>
                <p>JavaScript is a proper high-level programming language used to create web scripts whereas Node.js is a run time environment built on google’s v8 engine. JavaScript is executed in the browser whereas using Node.js gives us the ability to execute JavaScript outside the browser. JavaScript can manipulate DOM or add HTML within whereas Node.js doesn’t have the capability to add HTML. JavaScript is mainly used to create front end web applications or develop client-side whereas Node.js is used on the back end development that is server-side development JavaScript follows the standard of JavaScript when writing programs whereas Node.js is written in C++ while using the v8 engine, it runs JavaScript outside the browser. JavaScript requires any running environment as it can execute on any engine such as Firefox’s spider monkey, v8 engine of google chrome, JavaScript core of Safari whereas Node.js runs only on the v8 engine of google chrome.</p>
            </div>
            <div className='blog mb-5'>
                <h4 className='green-color'>How does NodeJS handle multiple requests at the same time?</h4>
                <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. When a new request comes in, NodeJS checks if it requires any blocking IO operations, if not, the EventLoop processes it and sends the response back to the client directly. If yes, then the request is forwarded to the thread manager, which then based on an algorithm, picks up an idle thread from the pool and lets it process the request. After completion of the request processing operation, the thread, returns the response back to the EventLoop which is then forwarded to the client. Thus, even if an incoming request needs blocking IO, the thread pool allows it to run asynchronously in the background without blocking the EventLoop and it gives a seamless experience of NodeJS handling multiple incoming requests concurrently without any persistent delays or bottlenecks.
                </p>
            </div>
        </Container>
    );
};

export default Blog;