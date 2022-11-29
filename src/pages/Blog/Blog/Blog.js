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
                <h4 className='green-color'>What are the different ways to manage a state in a React application?</h4>
                <p>There are many different ways to manage a state in a React application. One of them is URL.We can use URL to store some data e.g. The id of the current item, being viewed, Filter parameters, Pagination offset and limit, Sorting data. Keeping such data in the URL allows users to share deep links with others. It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change.</p>
            </div>
            <div className='blog'>
                <h4 className='green-color'>How does prototypical inheritance work?</h4>
                <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
            </div>
            <div className='blog'>
                <h4 className='green-color'>What is a unit test? Why should we write unit tests?</h4>
                <p>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff.  The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</p>
            </div>
            <div className='blog mb-5'>
                <h4 className='green-color'>React vs. Angular vs. Vue?</h4>
                <p>
                    React is considered a UI library. They define themselves as: A JavaScript library for building user interfaces. Facebook developers are behind the development and maintenance of this library. And, in this case, most of Facebook’s products are made with React. <br />
                    Angular is a front-end framework with lots of components, services, and tools. On Angular’s site, you can see that they define Angular as:  The modern web developer’s platform. It is developed and maintained by Google developers, but curiously it is not used to implement any of their most common products such as Search or YouTube.<br />
                    Last but not least, Vue.js is, according to its site: A progressive JavaScript framework. Vue.js is developed and led by Evan You, but also it counts on a huge open-source community.
                </p>
            </div>
        </Container>
    );
};

export default Blog;