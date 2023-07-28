import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
  import ToDoList from '../tasks/toDoList';

const Projects = () => {
  useNavigate()
  return (
    <>

     <Link to ='/project/toDoList'>To Do List</Link>|
     <Link to ='/project/darkMode'>Dark Mode</Link>
    </>
  );
};
export default Projects;
