import React, { useEffect, useState } from 'react';
import { lorem } from 'faker';

function Tab(props) {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    console.log('Tab Changed...');
    // setShowLoader(true)
    // setTimeout(()=>{
    //     setShowLoader(false)
    // } , 1000)

    const elem = document.querySelector('#__next-route-announcer__');
    if (elem) {
      elem.setAttribute('aria-live', 'polite');
      elem.setAttribute('aria-role', 'region');
      elem.innerHTML = 'Navigated To the ' + props.title  +  " Page";
    //   elem.innerHTML =  elem.innerHTML + lorem.paragraph(1)

        // setInterval(()=>{elem.innerHTML = lorem.paragraph(1)} , 2000)
    }
  }, [props]);

  return (
    <div>
      <h1>{props.title}</h1>
       {/* <div aria-atomic='true' aria-live="polite" role='alert' className="alert alert success">

           {showLoader && "Loading..."}
       </div> */}
      <div>
        {new Array(props.count).fill().map((_, index) => (
          <p key={index}>{lorem.paragraph()}</p>
        ))}
      </div>
    </div>
  );
}

export default function index() {
  const [activeTab, setActiveTab] = useState(1);
  const [tabs, setTabs] = useState(['Tab1', 'Tab2', 'Tab3', 'Tab4']);

  useEffect(() => {}, []);

  const handleClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };
  return (
    <div>
      <h1>Ayy Practice</h1>

      

      <ul class="nav">
        {tabs.map((_, index) => (
          <li
            key={index}
            class="nav-item"
            onClick={() => handleClick(index + 1)}
          >
            <a class="btn btn-dark m-2 " aria-current="page" href="#">
              {_}
            </a>
          </li>
        ))}
      </ul>

      <div>{<Tab title={'Tab ' + activeTab} count={activeTab * 2}></Tab>}</div>
    </div>
  );
}
