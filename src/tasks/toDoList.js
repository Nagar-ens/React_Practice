import React,{useState} from 'react'


const ToDoList = () => {
    const [inputValue, setInputValue] = useState('');
    const [inputAge, setInputAge] = useState('');
    const [dataList, setDataList] = useState([]);
  
    const handleNameChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleAgeChange = (event) => {
      setInputAge(event.target.value);
    };
  
    const addData = () => {
  
      setDataList([...dataList, { name: inputValue, age: inputAge }]);
  
      setInputValue('');
      setInputAge('');
    };
  
    const deleteData = (index) => {
  
      const updatedList = [...dataList];
  
      updatedList.splice(index, 1);
  
      setDataList(updatedList);
    };
  
    return (
      <>
        <form className="row g-3">
          <div className="col-auto">
            <label htmlFor="inputName" className="visually-hidden">Name</label>
            <input type="text" className="form-control" id="inputName" onChange={handleNameChange} value={inputValue} placeholder="Name" />
          </div>
          <div className="col-auto">
            <label htmlFor="inputAge" className="visually-hidden">Age</label>
            <input type="text" className="form-control" id="inputAge" onChange={handleAgeChange} value={inputAge} placeholder="Age" />
          </div>
          <div className="col-auto">
            <button onClick={addData} type="button" className="btn btn-primary mb-3">Add</button>
          </div>
        </form>
  
  
        {dataList.map((data, index) => (
          <div className="card" key={index}>
            <div className="card-body bg-secondary">
              <h3>Name: {data.name}</h3>
              <h4>Age: {data.age}</h4>
            </div>
            <button type="button" onClick={() => deleteData(index)} className="btn btn-danger">Delete</button>
          </div>
        ))}
      </>
    );
}

export default ToDoList