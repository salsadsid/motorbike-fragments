import React from 'react';

const Blogs = () => {
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mx-auto'>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">How will you improve the performance of a React Application?</h2>
                    <p>There are several techniques to improve the performance of a React Application. Those are:1. Prevent unnecessary re-renders, 2. Lazy Loading images, 3. Code-splitting using dynamic React import, 4. Using a higher-order component called React.memo . 5. Keeping immutable data structures.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>There are four main types of state. Those are: 1. Local state, 2.Global state, 3.Server state, 4.URL state.useState is the first tool you should reach for to manage Local state in your components. useReducer is another option that can be used for either local or global state.Redux is also great for global state management. SWR and React Query are great tools of server state management. React Router is best for url state management.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">How does prototypical inheritance work?</h2>
                    <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. In JavaScript, an object can inherit properties of another object. The object from where the properties are inherited is named prototype.If an object has an own property and an inherited property with the same name, then JavaScript always picks the own property.</p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title"><code>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts ?</code></h2>
                    <p>If you update it directly products = [...], calling the setProducts() afterward may just replace the update you made. While directly update the state, it does not change this.state immediately. Instead, it creates a pending state transition, and accessing it after calling this method will only return the present value. Also directly update the state causes lose control of the state across all components. </p>
                </div>
            </div>
            <div className="card w-96 bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                    <h2 className="card-title">What is a unit test? Why should write unit tests?</h2>
                    <p>Unit tests are typically automated tests written and run by software developers to ensure that a section of an application "known as the unit" meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure. Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;