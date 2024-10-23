import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
const Blogs = ({handleAddMark,handleRemoveMark}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
        .then(data=>setBlogs(data))
    },[])
    return (
        <div className="w-2/3">
            <h3 className="text-4xl my-4">Blogs:{blogs.length}</h3>
            {
                blogs.map((p,idx)=><Blog key={idx} blog={p} handleAddMark={handleAddMark} handleRemoveMark={handleRemoveMark}></Blog>)
            }
        </div>
    );
};
Blogs.propTypes = {
    handleAddMark: PropTypes.func.isRequired,
    handleRemoveMark:PropTypes.func.isRequired
}
export default Blogs;