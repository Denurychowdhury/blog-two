import { useState } from 'react';
import './App.css';
import profile from './assets/images/profile.png';
import Blogs from './Components/Blogs/Blogs';
import Adds from './Components/Marks/Adds';
function App() {

  const [marks, setMarks] = useState([]);
  const [removeMark,setRemovemarks]=useState(0)

  const handleAddMark = (blog, id) => {
    // console.log(blog,id);
    const addfilt = marks.find(p => p.id === id);
    console.log(addfilt + 'add');
    if (!addfilt) {
      const newBlogs = [...marks, blog];
      setMarks(newBlogs);
    }
    else {
      alert('already added');
    }
  };
  const handleRemoveMark = (id,time) => {
    const newTime = removeMark + time;
    setRemovemarks(newTime)

    const newadding = marks.filter(p => p.id !== id)
    setMarks(newadding)
 }

  return (
    <>
      <div className='w-11/12 flex justify-between items-center mx-auto my-5 border-b-2 gap-2'>
        <h1 className='text-3xl font-bold'>knowledge cafe</h1>
        <img src={profile} alt="" />
      </div>
      <div className='w-11/12 mx-auto flex'>
        <Blogs handleAddMark={handleAddMark} handleRemoveMark={handleRemoveMark}></Blogs>
        <Adds marks={marks} removeMark={removeMark}></Adds>
      </div>
    </>
  );
};

export default App
