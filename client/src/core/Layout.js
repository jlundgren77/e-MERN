import React from 'react';
import Menu from './Menu';
const Layout = ({
  title = 'Title',
  description = 'Description',
  className,
  children,
}) => {
  return (
    <div>
      <Menu />
      <div className='jumbotron'>
        <h2>{title}</h2>
        <h3>I need to make a small change here</h3>
        <p className='lead'>{description}</p>
      </div>
      <div className={className}>{children}</div>
    </div>
  );
};
export default Layout;
