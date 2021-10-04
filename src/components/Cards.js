import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Our Services at a glance!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpeg'
              text='We offer the best prices'
              label='Affordable'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpeg'
              text='Long distance cargo shipments with the best drivers.'
              label='Refer and Dry Van'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpeg'
              text='High fidelity refrigeration logistics which you can trust.'
              label='Refrigerator/Cold'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpeg'
              text='We work with the best vehicles.'
              label='Transport Quality'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpeg'
              text='At FMS we take care of your shipment like its our own'
              label='Trustworthy'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
