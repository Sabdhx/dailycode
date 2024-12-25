import React, { useContext } from 'react';
import { MyContext } from '../context/DataContext';
import Cards from '../components/Cards';



const Data: React.FC = () => {
  const { data } = useContext(MyContext);

  return (

    <div className=''>
 <Cards/>
    
    </div>
  );
};

export default Data;
