import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import Home from './../Home/Home';

export default function Layout() {
  return (
    <div className="wrapper">

        <nav className="main-header navbar navbar-expand navbar-white navbar-light">

          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" data-widget="pushmenu" href="#"><i className="fas fa-bars"></i></a>
            </li>
         
          </ul>


          <form className="form-inline ml-3">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>


          <ul className="navbar-nav ml-auto">

            <li className="nav-item dropdown">


              <a className="nav-link" data-toggle="dropdown" href="#">
                <span style={{ fontStyle: 'bold', marginRight: 5 }}>Welcome</span><i className="fas fa-chevron-down"></i>
              </a>

              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <a href='/MyProfile' className="dropdown-item">
                  <i className="fas fa-user"></i> My Profile

                  </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-cogs"></i> Settings
                  </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-sign-out-alt"></i> Logout
                  </a>
                <div className="dropdown-divider"></div>

              </div>
            </li>

            <li className="nav-item dropdown">
              <a className="nav-link" data-toggle="dropdown" href="#">
                <i className="far fa-bell"></i>
                <span className="badge badge-warning navbar-badge">15</span>
              </a>
              <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                <span className="dropdown-item dropdown-header">15 Notifications</span>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-envelope mr-2"></i> 4 new messages
                    <span className="float-right text-muted text-sm">3 mins</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-users mr-2"></i> 8 friend requests
                    <span className="float-right text-muted text-sm">12 hours</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item">
                  <i className="fas fa-file mr-2"></i> 3 new reports
                    <span className="float-right text-muted text-sm">2 days</span>
                </a>
                <div className="dropdown-divider"></div>
                <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
              </div>
            </li>
            <li className="nav-item">
          
            </li>
          </ul>
        </nav>



        <aside className="main-sidebar sidebar-dark-primary elevation-4">




          <div className="sidebar">

            <div className="user-panel mt-3 pb-3 mb-3 d-flex">
              <div className="image">
                <div className="img-circle elevation-2" >
                 
                </div>

              </div>
              <div className="info">
                <a href="/MyProfile" className="d-block">{'Dinuwan'}{' '}{'Kalubowila'}</a>
              </div>
            </div>


            <nav className="mt-2">
              <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                <li className="nav-item has-treeview ">
                 <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-tachometer-alt"></i>
                    <p>
                      Dashboard
                    </p>
                  </a>

                </li>

      
                  <li className="nav-item">
                    <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-th"></i>
                      <p>
                          Sales Approvals                       
                          <span className="right badge badge-danger">New 9</span>                 
                      </p>
                    </a>
                  </li>
                

                  <li className="nav-item has-treeview">
                  <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-users" aria-hidden="true" ></i>
                      <p>
                         Sales Servicers
                          <span className="right badge badge-info">New 7</span>
                      </p>
                    </a>
                  </li>
                

                <li className="nav-item has-treeview">
                <a href="/" className="nav-link">
                  <i className="nav-icon fas fa-building"></i>
                    <p>
                      Active Companies
                      </p>
                  </a>
                </li>

            
                  <li className="nav-item has-treeview">
                  <a href="/" className="nav-link">
                      <i className="nav-icon fab fa-expeditedssl"></i>
                      <p>
                        Item Approvals                   
                          <span className="right badge badge-warning">New 6</span>
                      </p>
                    </a>
                  </li>
                

             
                  <li className="nav-item has-treeview">
                  <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-puzzle-piece"></i>
                      <p>
                        Product Categories
                      </p>
                    </a>
                  </li>

                

                <li className="nav-item has-treeview">
                <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-percent"></i>
                    <p>
                      AddDiscount
                    </p>
                  </a>
                </li>



                  <li className="nav-item has-treeview">
                  <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-copy"></i>
                      <p>
                        Packages
                      </p>
                    </a>
                  </li>

                

                <li className="nav-item has-treeview">
                <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-envelope"></i>
                    <p>
                      Compose
                      </p>
                  </a>
                </li>


                <li className="nav-item has-treeview">
                <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-comment"></i>
                    <p>
                      Reviews
                      <span className="right badge badge-danger" style={{ borderRadius: '50%', width: 20, height: 20 }}>6</span>
                    </p>
                  </a>
                </li>


                <li className="nav-item has-treeview">
                <a href="/" className="nav-link">
                    <i className="nav-icon fas fa-reply"></i>
                    <p>
                      ReviewReplies
                    </p>
                  </a>
                </li>


           
                  <li className="nav-item has-treeview">
                    <a href="/" className="nav-link">
                      <i className="nav-icon fas fa-question"></i>
                      <p>
                        Contact Us Messages
                      </p>
                    </a>
                  </li>
                

              </ul>
            </nav>

          </div>

        </aside>


        <div className="content-wrapper">

          <section className="content-header">
            <div className="container-fluid">
       


            <Router>
                <Switch>
                 <Route exact path='/' component={() => <Home/>} />
                </Switch>
            </Router>


            </div>
          </section>

        </div>


        <footer className="main-footer">
          <div className="float-right d-none d-sm-block">
            <b>Version</b> 1.0.0
            </div>
          <strong>Copyright &copy; 2020 <a href="/">Team Bionics</a>.</strong> All rights
            reserved.
        </footer>

      </div>
  );
}
