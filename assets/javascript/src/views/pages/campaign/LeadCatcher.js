import React, { Component } from 'react'
import LeadCatchermodel from "./components/LeadCatchermodel"
import { connect } from 'react-redux'
import { CampaignLeadViewAction, CampaignOverviewAction } from "../../../redux/action/CampaignAction";
import { Container, Row, Col, Input, Modal, ModalHeader, ModalBody, Table } from 'reactstrap'
import PageHeader from "../../../components/Headers/PageHeader";
import PageContainer from "../../../components/Containers/PageContainer";
import Tables from "../TableContent";

class LeadCatcher extends Component {
  constructor() {
    super()
    this.state = {
      modal: false

    }
  }
  componentDidMount() {
    this.props.CampaignLeadViewAction()
  }
  toggle = () => {
    this.setState({ modal: !this.state.modal })
  }
  render() {
    const { modal } = this.state;
    const { leadData } = this.props;
    const tableTitle = [
      {
        key: 'email',
        value: 'Email',
      },
      {
        key: 'name',
        value: 'Name',
      },
      {
        key: 'created',
        value: 'Created',
      },
      {
        key: 'status',
        value: 'Status',
      },
      {
        key: 'campaign',
        value: 'Campaign',
      },
      {
        key: 'sent',
        value: 'Sent',
      },
      {
        key: 'engaged',
        value: 'Engaged',
      },
      {
        key: 'tasks',
        value: 'Tasks',
      },
    ];
    const tableData = [
      {
        email: 'ajju@gmail.com',
        name: 'Azazul',
        created: '10-10-2020',
        status: 'Passed',
        campaign: '1458',
        sent: '10',
        engaged: '9',
        tasks: '8'
      },
      {
        email: 'janak@gmail.com',
        name: 'Azazul',
        created: '10-10-2020',
        status: 'Passed',
        campaign: '1458',
        sent: '10',
        engaged: '2',
        tasks: '8'
      },
      {
        email: 'ajju@gmail.com',
        name: 'janak',
        created: '10-10-2020',
        status: 'Passed',
        campaign: '1458',
        sent: '10',
        engaged: '2',
        tasks: '8'
      }
    ];
    const filters = [
      {
        key: 'email',
        options: ['janak@gmail.com', 'ajajul@gmail.com', 'mikin@gmail.com', 'ajju@gmail.com']
      },
      {
        key: 'name',
        options: ['janak', 'ajajul', 'mikin']
      }
    ];
    const actionMenus = [
      {
        key: 'view',
        name: 'View'
      },
      {
        key: 'edit',
        name: 'Edit'
      },
      {
        key: 'delete',
        name: 'Delete'
      }
    ]
    return (
      <>
        <PageHeader
          current="Lead Catcher"
          parent="Campaign"
          showStatus={false}
        />

        <PageContainer title="Lead Catcher" showHelper={true}>
          
          <div>
            <Modal className="Leadcatcher_modal" isOpen={modal} toggle={this.toggle} className={LeadCatcher}>
              <ModalHeader className="Leadcatcher_modalheader" toggle={this.toggle}>email id</ModalHeader>
              <ModalBody className="Leadcatcher_modalbody" >
                <LeadCatchermodel />
              </ModalBody>
            </Modal>
          </div>
          <div className="graph_container" style={{ display: "flex", flexDirection: "row-reverse" }}>
            <span className="graph_title">Last 30 days</span>
          </div>
          <Container fluid>
            {/* <Row>
              <Col md={3} className=''>
                <div className='grand_parent'>
                  <div className='input_field'>
                    <Input type='email' className='in' placeholder='Search' />
                    <div className='child'>
                      <a href='' onClick={(e) => { e.preventDefault(); alert('msg') }}>
                        <span className='font_icon'><i className="fa fa-search" aria-hidden="true"></i></span>
                      </a>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div >
                  <select className='filter_select1 w-100 mt-3' >
                    <option value='one'>All Campaigns</option>
                    <option value='two'>Campaign 1</option>
                    <option value='three'>Campaign 2</option>

                  </select>
                </div>
              </Col>
              <Col md={3}>
                <div>
                  <select className='filter_select1 mt-3'>
                    <option value='one'>unassigned</option>
                    <option value='two'>unassigned1</option>
                    <option value='three'>unassigned2</option>
                  </select>
                </div>
              </Col>
              <Col md={2}>
                <div>
                  <select className='filter_select1 mt-3'>
                    <option value='open'>open</option>
                    <option value='lost'>lost</option>
                    <option value='won'>won</option>
                    <option value='ignore'>ignore</option>
                  </select>
                </div>
              </Col>
              <Col md={1}>
                <div className='refresh_child mt-3'>
                  <a href='' onClick={(e) => { e.preventDefault(); alert('msg') }}>
                    <span className='font_icon'><i className="fa fa-undo" aria-hidden="true"></i></span>
                  </a>
                </div>
              </Col>
            </Row>
            <Table className="align-items-center" responsive>
              <thead className="thead-light">
                <tr>
                  <th scope="col"><input type="checkbox" /></th>
                  <th scope="col">Person</th>
                  <th scope="col">Campaign</th>
                  <th scope="col">AssignedTo</th>
                  <th scope="col">LeadDate</th>
                </tr>
              </thead>
              <tbody>
                {leadData && leadData.map((item, index) => {
                  return (
                    <>
                      <tr key={index} className='pointer'>
                        <td className="check_box"><input type="checkbox" /></td>
                        <td onClick={this.toggle}>{item.email}</td>
                        <td onClick={this.toggle}></td>
                        <td onClick={this.toggle}></td>
                        <td onClick={this.toggle}></td>
                      </tr>
                    </>
                  )
                })}
              </tbody>
            </Table> */}
            <Row>
              <Tables
                titles={tableTitle} // required
                tablePropsData={tableData}   // required
                showAction={true}    // optional
                actionMenus={actionMenus}   // optional for showing menus of row.
                actionCallback={this.actionCallback}        // get call back for action select of row.
                showSelect={true}    // optional
                selectedCallback={this.getSelectedRecords}      // get call back for select object.
                showPagination={true}   // optional
                paginationCallback={this.paginationCallback}     // get callback of page change.
                filters={filters}   // optional to enable filter
                searchKeys={['email', 'name']}  // optional to enable search
              />
            </Row>
          </Container>
          
        </PageContainer>
      </>
    )
  }
}
const mapStateToProps = (state) => {
  console.log("state", state.LeadViewReducer && state.LeadViewReducer.leadViewData)
  return {
    leadData: state.LeadViewReducer && state.LeadViewReducer.leadViewData
  };
};
const mapDispatchToProps = (dispatch) => ({
  // CampaignLeadGetAction:()=>dispatch(CampaignLeadGetAction)
  CampaignLeadViewAction: () => dispatch(CampaignLeadViewAction())

});
export default connect(mapStateToProps, mapDispatchToProps)(LeadCatcher)
