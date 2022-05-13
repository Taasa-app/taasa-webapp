import {useState} from 'react';

const Home = () => {
const [blogs, setBlogs] = useState([
    {title: 'iron features', body: 'lorem ipsum...', author:'samson', id:1},
    {title: 'soft feathers', body: 'lorem ipsum...', author:'bruno', id:2},
    {title: 'calm weather', body: 'lorem ipsum...', author:'marvelli', id:3}
]);

    return (  
        <div className="home">
            <div></div>
            <h1>Save lives with a button click</h1>
            <p>A free mobile and web app for reporting road traffic crashes</p>
            <button>Report incident</button>
            <button>Gain early access</button>   
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p> Written by { blog.author }</p>

                </div>
                
            ))}         
        </div>
    );
}
 
export default Home;