import PropTypes from "prop-types";

const Add = ({marks}) => {
    const { title } = marks;
    console.log(title);
    // console.log(id,author);
    return (
        <div className="bg-slate-400 p-3 border-2 border-gray-300 rounded-lg">
            <h1>{title}</h1>
        </div>
    );
};
Add.PropTypes = {
    marks: PropTypes.object,
    title:PropTypes.string
}
export default Add;