import React from 'react';


const Banner = ({ appName }) => {

  return (
    // <div className="" style={{ background: '#51AEFC', height: '80px', marginBottom: '80px', padding: '10px' }}>
    //   <div className="container">

    //     <h1 className="pull-left" style={{ color: '#ffffff', fontWeight: 'bold', position: 'absolute' }}>
    //       {appName}
    //     </h1>
    //     <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark">
    //       <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
    //         <ul className="navbar-nav ml-auto">
    //           <li className="nav-item">
    //             <a className="nav-link" href="/" style={{color:'#ffffff'}}>Sign in</a>
    //           </li>
    //           <li className="nav-item">
    //             <a className="nav-link" href="/" style={{color:'#ffffff'}}>Sign up</a>
    //           </li>
    //         </ul>
    //       </div>
    //     </nav>
    //   </div>
    // </div>
    <header>
      <nav className="navi">
      <label for="toggle" className="button"></label>
      <section className="menu">
                         <ul>
                            <li><a href="/" className="active">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Products</a></li>
                            <li><a href="/">Vacancies</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </section>
      </nav>
    </header>
  );
};

export default Banner;
