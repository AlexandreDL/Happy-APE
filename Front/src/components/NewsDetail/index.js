// == Import : npm
import React from 'react';

// == Import : local

import './newsDetails.scss';



// == Composant
const NewsDetail = () => (
  <article className="newsDetail">
    <section className="newsHeader">
      <h1>News1 : la mère michel</h1>
      <h2>categorie et date</h2>
    </section> 
    <p className="newsDetail-content"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta natus eligendi impedit dolorem in quo ut, illum doloremque iste nam illo, quis, fuga quasi nemo tempora at velit iusto.Facere, iusto natus odit nobis quaerat beatae molestias aut voluptates sint architecto similique facilis illum repudiandae dolores voluptate possimus debitis voluptas veniam magnam id ipsam totam nisi explicabo esse. Placeat.</p>
  </article>
);

// == Export
export default NewsDetail;
