import React from 'react';
import DashbordCardPanel from './../DashbordCardPannel/cards';
import UserData from './../Users/UserFunctions';

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
       <UserData/>
      </div>
    </section>

    
</div>
  );
}
