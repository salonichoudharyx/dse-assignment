import React, { useEffect, useState } from 'react';
import Product from '../Components/Product/Product';
import Bento from '../Components/Bento/Bento';
function Home() {
  
  return (
    <div>
      
      <Bento />
      <Product />
    </div>
  );
}

export default Home;