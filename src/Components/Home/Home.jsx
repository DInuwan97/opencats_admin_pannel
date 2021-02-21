import React from 'react';
import DashbordCardPanel from './../DashbordCardPannel/cards';


export default function Home() {
  return (
    <div>
    <section className="content-header">
      <div className="container-fluid">
            <DashbordCardPanel/>  
      </div>
    </section>

    <section className="content-header">
      <div className="container-fluid"> 
      <div className="row">     
        <div className="col-md-6">
          
        </div> 
        <div className="col-md-6">
         
        </div>   
        </div>    
      </div>
    </section>

    <div className="row">

      <div className="col-md-6">

        <section className="content">
          <div className="container-fluid">
            
          </div>
        </section>

      </div>


      <div className="col-md-6">

        <section className="content">
          <div className="container-fluid">
            
          </div>
        </section>

      </div>

    </div>

   


    
    <section className="content">
        <div className="container-fluid">
       
        </div>
    </section>
</div>
  );
}
