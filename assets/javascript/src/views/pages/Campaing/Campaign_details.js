import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import classnames from 'classnames';
import OverView from './OverView';
import Sequence from './Sequence';
import Recipients from './Recipients';
import Setting from './Setting';

const Campaign_Details = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <>
      <div className='main-view'>
        <div className='campaign_navbar' >
          <h1 style={{ color: 'white', fontSize: '30px', textAlign: 'left' }}>Date Outreach</h1>
          <div>
            <Nav tabs>
              <NavItem><NavLink><span style={{color:'white'}}><i className="fa fa-chevron-left" aria-hidden="true"></i></span></NavLink></NavItem>
              <NavItem><NavLink className={classnames({ active: activeTab === '1' })} onClick={() => { toggle('1'); }}><span style={{color:'white'}}>OVERVIEW</span></NavLink></NavItem>
              <NavItem><NavLink className={classnames({ active: activeTab === '2' })} onClick={() => { toggle('2'); }}><span style={{color:'white'}}>SEQUENCE</span></NavLink></NavItem>
              <NavItem><NavLink className={classnames({ active: activeTab === '3' })} onClick={() => { toggle('3'); }}><span style={{color:'white'}}>RECIPIENTS</span></NavLink></NavItem>
              <NavItem><NavLink className={classnames({ active: activeTab === '4' })} onClick={() => { toggle('4'); }}><span style={{color:'white'}}>SETTINGS</span></NavLink></NavItem>
            </Nav>
          </div>
        </div>
        <div>
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1" className='mt-5'>
              <OverView />
            </TabPane>
            <TabPane tabId="2">
              <Sequence />
            </TabPane>
            <TabPane tabId="3">
              <Recipients />
            </TabPane>
            <TabPane tabId="4">
              <Setting />
            </TabPane>
          </TabContent>
        </div>
      </div>
    </>
  );
}

export default Campaign_Details;