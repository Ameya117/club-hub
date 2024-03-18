import React from 'react'

const StorePage = ( {slug}) => {
    console.log(slug);
    return(
      <p className="text-2xl">
        Showing the store page for the 
        name <strong>slug</strong>
      </p>
    )
  }
  
  export default StorePage;
  