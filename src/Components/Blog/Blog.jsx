import PropTypes from "prop-types";
import { FaBookmark } from "react-icons/fa";
const Blog = ({ blog,handleAddMark,handleRemoveMark}) => {
    // console.log(blog);
    const { id, cover, title, author, author_img, posted_date, reading_time, hashtags } =blog
    return (
        <div>
            <img className="rounded-xl" src={cover} alt="" />
            <div className="flex justify-between items-center my-2">
                <div className="flex">
                    <img className="w-10" src={author_img} alt="" />
                    <div>
                        <p>{author}</p>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className="flex items-center">
                    <p>{reading_time} min read</p>
                    <button onClick={()=>handleAddMark(blog,id)} className="text-red-400"><FaBookmark /></button>
                </div>
            </div>
            <div>
                <p className="text-4xl">{title}</p>
                <p>{hashtags}</p>
                <button onClick={()=>handleRemoveMark(id,reading_time)}  className="text-xl font-bold underline text-purple-400">Mark as read</button>
            </div>
        </div>
    );
};
Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddMark: PropTypes.func.isRequired,
    handleRemoveMark:PropTypes.func.isRequired
}
export default Blog;