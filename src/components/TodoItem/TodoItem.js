import React from "react";
import "./TodoItem.css";


function Todo(props) {

  const { content, id, deleteItem } = props;
  
  
  const clickedItem = (e) => {
      const liDom =  e.target;
      liDom.className === 'checked' ?  liDom.className ='' :  liDom.className += 'checked';
  }

  const handleDeleteItem = (e) => {
    deleteItem(id)
  };


  return <div onClick={clickedItem}>{content}
  <button onClick={handleDeleteItem} className="btn btn-danger btn-sm delete">Sil</button>
  </div>
  ;
}

export default Todo;
