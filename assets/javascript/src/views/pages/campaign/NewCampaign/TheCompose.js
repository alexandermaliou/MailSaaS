import React, { Component } from "react";
import {
  Container,
  Row,
  Button,
  Input,
  Col,
  Form,
  Nav,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";
import { CampaignComposeAction } from "../../../../redux/action/CampaignAction";
import ReactQuill from "react-quill";

import FollowUpPanel from "./components/FollowUpPanel";
import DripPanel from "./components/DripPanel";

class TheCompose extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: "",
      email_body: "",
      followUpList: [],
      dripList: [],
    };
  }

  onAddFollowUp = () => {
    this.setState((state) => {
      const index = state.followUpList.length;
      let newFollowUp = { index, subject: "", email_body: "" };
      const followUpList = state.followUpList.concat(newFollowUp);
      return {
        ...state,
        followUpList,
      };
    });
  };

  onDeleteFollowUp = (index) => {
    this.setState((state) => {
      const followUpList = state.followUpList.filter((item, i) => i != index);
      return {
        ...state,
        followUpList,
      };
    });
  };

  onAddDrip = () => {
    this.setState((state) => {
      const index = state.dripList.length;
      let newFollowUp = { index, subject: "", email_body: "" };
      const dripList = state.dripList.concat(newFollowUp);
      return {
        ...state,
        dripList,
      };
    });
  };

  onDeleteDrip = (index) => {
    this.setState((state) => {
      const dripList = state.dripList.filter((item, i) => i != index);
      return {
        ...state,
        dripList,
      };
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let normal = {
      campaign: "",
      subject: this.state.subject,
      email_body: this.state.email_body,
    };

    let data = {
      normal: normal,
      follow_up: this.state.followUpList,
      drips: this.state.dripList,
    };

    console.log(data);

    this.props.CampaignComposeAction(data);
  };

  render() {
    return (
      <>
        <Row>
          <Col>
            <h2 className="text-center my-4">
              Compose the emails in this campaign
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input
              type="text"
              className="in"
              name="subject"
              value={this.state.subject}
              onChange={(e) => {
                this.setState({ subject: e.target.value });
              }}
              placeholder="Subject"
              required
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ReactQuill
              onChange={(value) => {
                this.setState({ email_body: value });
              }}
              theme="snow"
              className="Quill_div"
              modules={{
                toolbar: [
                  ["bold", "italic"],
                  ["link", "blockquote", "code", "image"],
                  [
                    {
                      list: "ordered",
                    },
                    {
                      list: "bullet",
                    },
                  ],
                ],
              }}
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            {this.state.followUpList.map((followUp, index) => (
              <FollowUpPanel
                index={index}
                onDelete={this.onDeleteFollowUp}
                data={followUp}
                key={index}
              />
            ))}
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <Button
              color="default"
              outline
              type="button"
              block
              onClick={this.onAddFollowUp}
            >
              <i className="fa fa-plus"></i> &nbsp;ADD FOLLOW-UP
            </Button>
          </Col>
        </Row>

        <Row>
          <Col>
            {this.state.dripList.map((drip, index) => (
              <DripPanel
                index={index}
                onDelete={this.onDeleteDrip}
                data={drip}
                key={index}
              />
            ))}
          </Col>
        </Row>

        <Row>
          <Col className="mt-3">
            <Button
              color="default"
              outline
              type="button"
              block
              onClick={this.onAddDrip}
            >
              <i className="fa fa-plus"></i> &nbsp;ADD DRIP
            </Button>
          </Col>
        </Row>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    // campaign: state.StartCampaignReducer.startCampaignData && state.StartCampaignReducer.startCampaignData.id,
    // mailGetData: state.MailGetDataReducer.mailGetData
  };
};
const mapDispatchToProps = (dispatch) => ({
  CampaignComposeAction: (data) => dispatch(CampaignComposeAction(data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(TheCompose);
