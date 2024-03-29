import React from 'react';
import MyInput from './input/MyInput';
import MySelect from './UI/button/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
   return (
         <div>
         <MyInput
            placeholder="Поиск..."
            value={filter.query}
            onChange={e => setFilter({...filter, query: e.target.value})}
         />
         <MySelect
            value={filter.sort}
            onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
            defoultValue="Сортировка"
            options={[
            {value: "title", name: "По названию"},
            {value: "body", name: "По описанию"},
            ]}
         />
      </div>
   );
};

export default PostFilter;
