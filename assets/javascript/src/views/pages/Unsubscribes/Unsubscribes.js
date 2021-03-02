import React from "react";
import {
  Row,
  TabContent,
  TabPane,
  NavLink,
  Nav,
  NavItem,
  InputGroup,
  Input,
  InputGroupAddon,
  InputGroupText,
  Button,
  Col,
} from "reactstrap";
import Domainpage from "./Domainpage";
import Addresstable from "./Addresstable";
import classnames from "classnames";
import {
  fetchUnsubscribeAction,
  deleteUnsubscribeUsersAction,
  unsubscribeUsersWithCsvAction,
  unsubscribeUsersWithEmailAction,
} from "../../../redux/action/UnsubscribeActions";
import { Component } from "react";
import { connect } from "react-redux";
import UnsubscribesModal from "./UnsubscribesModal";

import PageHeader from "../../../components/Headers/PageHeader";
import PageContainer from "../../../components/Containers/PageContainer";


class Unsubscribes extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "addressTab",
      selectedId: [],
      modal: false,
      email: "",
    };
  }

  handleClose = () => {
    this.setState({
      modal: false,
    });
  };
  toggle = (tab) => {
    if (this.state.activeTab !== tab)
      this.setState({ activeTab: tab, selectedId: [] });
  };
  componentDidMount() {
    this.props.fetchUnsbcribed();
  }
  UnsubscribeDelete = () => {
    let data = this.state.selectedId;
    this.props.deleteUnsubscribeUsers(data);
    this.setState({
      selectedId: [],
    });
  };
  selectRecored = (id, e) => {
    const { selectedId } = this.state;
    let newSelectedId = [...selectedId];
    if (e.target.checked) {
      newSelectedId.push(id);
    } else {
      newSelectedId = newSelectedId.filter((item) => item != id);
    }
    this.setState({
      selectedId: newSelectedId,
    });
  };
  selectAll = (e) => {
    let newSelectedId = [];
    if (e.target.checked) {
      newSelectedId = this.props.data.map((item) => {
        return item.id;
      });
    }
    console.log(newSelectedId);
    this.setState({
      selectedId: newSelectedId,
    });
  };
  unsubscribeWithEmail = (e) => {
    console.log(e.target.value);
    this.setState({
      email: e.target.value,
    });
  };
  unsubscribeWithCsv = (e) => {
    let fileData = new FormData();
    fileData.append("csv_file", e.target.files[0]);
    if (e.target.files[0]) {
      this.props.unsubscribeUsersWithCsvAction(fileData);
    }
    this.setState({
      modal: false,
    });
  };
  handleSubmit = () => {
    this.setState({ modal: false });
    this.props.unsubscribeUsersWithEmailAction(this.state.email);
  };
  render() {
    const { selectedId } = this.state;

    return (
      <>
        <PageHeader
          current="Unsubscribes"
          parent="Unsubscribes"
          showStatus={false}
        />
        <Row
          className={`selection-bar pl-5 ${
            selectedId.length > 0 ? "_block" : " "
          }`}
        >
          <span
            className="pointer"
            onClick={() => {
              this.setState({
                selectedId: [],
              });
            }}
          >
            <i className="fa fa-close" aria-hidden="true"></i>
          </span>
          <span className="pl-3 pr-3" style={{ borderRight: "1px dashed" }}>
            {selectedId.length} selected
          </span>
          <label className="m-0 pointer" onClick={this.UnsubscribeDelete}>
            <i className="fas fa-minus-circle pl-3 pr-2"></i>
            Delete
          </label>
        </Row>

        <PageContainer title="Unsubscribes">
          <Row>
            <Col lg="5" md="12" sm="12" className="mb-2">
              <InputGroup className="input-group-merge">
                <Input placeholder="Search" type="search" />
                <InputGroupAddon addonType="append">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </Col>
            <Col lg="7" md="12" sm="12">
              <Button
                className="btn-icon btn-2"
                type="button"
                onClick={() => window.location.reload()}
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-refresh" />
                  <span className="btn-inner--text">REFRESH</span>
                </span>
              </Button>
              <Button
                className="btn-icon btn-2 small-mobile-ml-0 small-mobile-mt-1"
                type="button"
              >
                <span className="btn-inner--icon">
                  <i className="fa fa-save" />
                </span>
                <span className="btn-inner--text">EXPORT</span>
              </Button>
            </Col>
          </Row>
          <div className="tabs-nav-wrapper mt-5 pb-0">
            <Nav id="tabs-icons-text" pills role="tablist" color="info">
              <NavItem className="p-0 mb-sm-0">
                <NavLink
                  aria-selected={this.state.activeTab === "addressTab"}
                  className={classnames("mb-0", {
                    active: this.state.activeTab === "addressTab",
                  })}
                  onClick={() => this.toggle("addressTab")}
                  href="#"
                  role="tab"
                >
                  ADDRESS
                </NavLink>
              </NavItem>
              <NavItem className="p-0 mb-sm-0">
                <NavLink
                  aria-selected={this.state.activeTab === "domainTab"}
                  className={classnames("mb-0", {
                    active: this.state.activeTab === "domainTab",
                  })}
                  onClick={() => this.toggle("domainTab")}
                  href="#"
                  role="tab"
                >
                  DOMAIN
                </NavLink>
              </NavItem>
            </Nav>
          </div>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="addressTab">
              <Addresstable
                selectAll={this.selectAll}
                selectRecored={this.selectRecored}
                data={this.props.data}
                selectedId={selectedId}
              />
            </TabPane>
            <TabPane tabId="domainTab">
              <Domainpage
                selectAll={this.selectAll}
                selectRecored={this.selectRecored}
                data={this.props.data}
                selectedId={selectedId}
              />
            </TabPane>
          </TabContent>
          <div className="text-right">
            <Button
              className="btn-icon btn-2 rounded-circle"
              color="info"
              type="button"
              onClick={(e) => {
                e.preventDefault();
                this.setState({ modal: !this.state.modal });
              }}
            >
              <span className="btn-inner--icon">
                <i className="fa fa-plus" />
              </span>
            </Button>
          </div>
          <UnsubscribesModal
            isOpen={this.state.modal}
            handleSubmit={this.handleSubmit}
            handleClose={this.handleClose}
            unsubscribeWithEmail={this.unsubscribeWithEmail}
            unsubscribeWithCsv={this.unsubscribeWithCsv}
            loading={this.props.loading}
          />
        </PageContainer>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.UnsubscribeReducer.unsubscribeData,
    loading: state.UnsubscribeReducer.loading,
  };
};
const mapDispatchToProps = (dispatch) => ({
  fetchUnsbcribed: () => {
    dispatch(fetchUnsubscribeAction());
  },
  deleteUnsubscribeUsers: (data) => {
    dispatch(deleteUnsubscribeUsersAction(data));
  },
  unsubscribeUsersWithCsvAction: (data) => {
    dispatch(unsubscribeUsersWithCsvAction(data));
  },
  unsubscribeUsersWithEmailAction: (data) => {
    dispatch(unsubscribeUsersWithEmailAction(data));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Unsubscribes);
