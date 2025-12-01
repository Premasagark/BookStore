import React from 'react'
import Home from '../../components/Home'
import GenreSection from '../../components/GenreSection'



const UHome = () => {
  return (
    <div className='min-h-full relative'>
      <Home className="relative z-10" />
      <GenreSection className="relative z-0" />
      

    </div>
  );
}

export default UHome