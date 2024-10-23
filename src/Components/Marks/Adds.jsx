import PropTypes from "prop-types";
import Add from "../Add/Add";


const Adds = ({marks,removeMark }) => {
    console.log(marks);
    return (
        <div className="m-3 p-3 w-1/3 bg-red-400 rounded-lg space-y-3">
             <div>
                <h1>TIme:{removeMark}</h1>
            </div>
            <h1>Bookmarks Bloog:{marks.length}</h1>
            {
                marks.map((p,id)=><Add key={id}marks={p}></Add>)
            }
        </div>
    );
};
Adds.propTypes = {
    removeMark: PropTypes.number.isRequired,
    marks: PropTypes.array.isRequired
}
export default Adds;