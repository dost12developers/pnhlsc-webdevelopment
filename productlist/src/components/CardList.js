import React from 'react';
import Card from './Card';

const CardList = ({ products }) => {
  return (
    <div>
      {
        products.map((user, i) => {
          return (
            <Card
              key={i}
              id={products[i].id}
              name={products[i].name}
              description={products[i].description}
              codefilename={products[i].codefilename} 
              logofilename={products[i].logofilename}
              companyName={products[i].companyName}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;