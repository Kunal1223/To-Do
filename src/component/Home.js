import React, { useState } from 'react'
import '../App.css'
import img from '../smile.png'

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
        <div className="content">
          <h3>Welcome to..</h3>
          <h2>Kunal To-Do Page</h2>
          <img src={img} alt="" />
          <h6>Don't wait for the perfect moment; take the moment and make it perfect. </h6>
          <h5>- Zoey Sayward</h5>
        </div>

        <div className="center_div">
          <h1>To Do list</h1>
          <br />
          <input type="text" placeholder='Enter a Item' onChange={setItem} value={itemList} />
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