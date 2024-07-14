import {useEffect, useState} from 'react';
import BlogList from './Component/BlogList';

const Home = () => {

    // Updating the screen 
    // Often, you’ll want your component to “remember” some information and display it. 
    //For example, maybe you want to count the number of times a button is clicked. To do this, add state to your component.
    // The useState hook is a function that lets you add React state to function components.
    // It accepts an argument which is the initial state and returns an array with two elements:
    // The first element is the current state.
    // The second element is a function that lets you update it.
    // The initial state doesn’t have to be a number. It can be a string, boolean, object, etc.
    // In this example, we’re using a number.


    // const [name, setName] = useState('mario');
    // const[age,setAge] = useState();

    // const handleCLick = ()=>{
    //     setName('vinay');
    //     console.log('Hello' + setName);
    //     setAge(30);
    // };

    // const handleClickAGain = (name, e) =>{
    //     console.log('Hello ');
    //      setName('FAZAL');
    //      setAge(40);
    // };

    const data = [
        {'title' : "My name is Vinay", "id": 1}, 
        {'title' : "My name is Vinay", "id": 2}, 
        {'title' : "My name is Vinay", "id": 3}, 
    ];

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);  // Here we are filtering the blogs based on the id and updating the state. 
        console.log('only id', id);
        console.log('newBlogs', blogs.id); 
        setBlogs(newBlogs);
    };

    useEffect( () =>{
        console.log('use effect ran');
    });

    return (
        <div className="home">
           <BlogList blogs ={blogs} title ="All Blogs !" />
           <BlogList blogs ={blogs.filter((blog)=>blog.author === 'mario')} title ="Mario Blogs !" />       { /*Here we are filtering the blogs based on the author name and passing it to the BlogList component it's reusable component. */ }
           <BlogList blogs = {blogs} title = "All Blogs!" handleDelete = {handleDelete} /> { /* Here we are passing the handleDelete function to the BlogList component. */ }
            { /* <p> {name} </p>
            <p>Here is the changed name { name } </p>
            <p>Here is the age {age}</p>
            <button onClick={handleCLick}>Click Me </button>
            <button onClick={ handleClickAGain }>Click Me Again</button> */ }
        </div>
        );
    }
export default Home;