import React, { useState } from 'react'
import '../App.css'
// import Navbar from './Navbar'

const Home = () => {
  //   --------------for the to do

  const [itemList, setitemList] = useState("");
  const [userItem, setuserItem] = useState([]);

  const setItem = (e) => {
    setitemList(e.target.value);
  }

  const updateItem = (id) => {
    setuserItem((olditems) => {
      return [...olditems, itemList];
    });
    setitemList('')
  };

  const deletItem = (id) => {
    setuserItem((olditems) => {
      return olditems.filter((arrElem , index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      {/* <Navbar/> */}
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>TO DO list</h1>
          <br />
          <input type="text" placeholder='add a item' onChange={setItem} value={itemList} />
          <button onClick={updateItem}>+</button>
          <ol>
            {userItem.map((itemval, index) => {
              return (
                <ol>
                  <div className="todo_style" key={index} id={index}>
                    <i className='fa fa-times' aria hidden='true' onClick={()=>deletItem(index)} />
                    <li>{itemval}</li>
                  </div>
                </ol>
              );
            })}
          </ol>
        </div>

      </div>

    </>
  )
}

export default Home