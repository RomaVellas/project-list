import React from 'react';
import { useParams } from 'react-router';

const PostIdPage = () => {

   const params = useParams();
   console.log(params)

   return (
      <div>
         <h1>Hi, Bro, You an my List!</h1>
      </div>
   );
}

export default PostIdPage;
