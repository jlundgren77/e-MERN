import React from 'react';
import Layout from './Layout';
const Home = () => (
  <Layout title='Home Page' description='Node React Ecommerce App'>
    ...home
    <h1>Home Page Needs Some Love</h1>
    <p>Buy Some Merch From Me</p>
    <p>And don't forget to tip your bartender</p>
    <div>
      my items are going here
      <ul>
        <li>item1</li>
        <li>item2</li>
        <li>item3</li>
      </ul>
      <ul>
        <li>Cat1</li>
        <li>Cat2</li>

        <li>Cat3</li>
      </ul>
      <h4>Unavailable</h4>
      <ul>
        <li>Tacos</li>
      </ul>
    </div>
    <div className='topTenAlbums'>
      <ol>
        <li>Desire</li>
        <li>Blonde on Blonde</li>
        <li>Blood on the Tracks</li>
      </ol>
    </div>
  </Layout>
);
export default Home;
