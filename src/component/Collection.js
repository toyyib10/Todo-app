import React from 'react'
import Header from "./Header";
import AddItem from './AddItem';
import Title from './Title';
import Item from './Item';

const Collection = () => {
  const collection = {
    height: "inherit",
  }
  return (
    <>
      <div style={collection} className="collection shadow col-10 col-md-4 mt-4 pb-4 px-3">
        <Header/>
        <AddItem/>
        <Title/>
        <Item/>
      </div>
    </>
  )
}

export default Collection;
