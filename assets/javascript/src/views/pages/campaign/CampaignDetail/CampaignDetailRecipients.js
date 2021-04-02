import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Table,
  Input,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "reactstrap";


import { getDetailRecipients } from "../../../../redux/action/CampaignDetailsActions";
import { connect } from "react-redux";

import PageHeader from "../../../../components/Headers/PageHeader";
import PageContainer from "../../../../components/Containers/PageContainer";
import DetailHeader from "./components/DetailHeader";
import ImportContactsModal from "./components/ImportContactsModal";
import RecipientDetailModal from "./components/RecipientDetailModal";
import CSVDownloadModal from "./components/CSVDownloadModal";
import { recipientsFilters as recipientsInitialFilters, recipientsTable } from "../../../../components/TableHeader";
import Tables from "../../../../components/Tables";

class CampaignDetailRecipients extends Component {
  constructor() {
    super();
    this.state = {
      recipientDetailItem: null,
      recipientsFilters: recipientsInitialFilters,
      importContactsModal: false,
      recipientDetailModal: false,
      downloadCSVModal: false,
    };
  }

  componentDidMount() {
    this.props.getDetailRecipients(this.props.id);
  }

  componentWillReceiveProps = (nextProps) => {
    if (nextProps.recipients !== this.props.recipients) {
      const getUniqueArray = (array, field) => array.map(x => x[field]).filter((v, i, a) => a.indexOf(v) === i);
      const emailOptions = getUniqueArray(nextProps.recipients, 'email')
      const nameOptions = getUniqueArray(nextProps.recipients, 'name')
      this.setState({
        recipientsFilters: [
          {
            key: 'email',
            options: emailOptions
          },
          {
            key: 'name',
            options: nameOptions
          }
        ]
      })
    }
  }

  showImportContactsModal = () => {
    this.setState({ importContactsModal: true })
  }

  closeImportContactsModal = () => {
    this.setState({ importContactsModal: false })
  }

  showRecipientDetailModal = (item) => {
    this.setState({ recipientDetailItem: item });

    this.setState({ recipientDetailModal: true });
  }

  closeRecipientDetailModal = () => {
    this.setState({ recipientDetailModal: false })
  }

  showDownloadCSVModal = () => {
    this.setState({ downloadCSVModal: true });
  }

  closeDownloadCSVModal = () => {
    this.setState({ downloadCSVModal: false });
  }

  render() {
    const { id, title } = this.props;
    const campTitle = title ? title : "Date Outreach";

    const { importContactsModal, recipientDetailModal } = this.state;
    const { recipientsFilters } = this.state;
    const { recipients } = this.props;

    return (
      <>
        <PageHeader
          current={campTitle}
          parent="Campaign Details"
          showStatus={false}
        />

        <PageContainer title={campTitle} showHelper={true}>
          <Row>
            <DetailHeader activeItem="RECIPIENTS" id={id} />
          </Row>

          <Row className="mt-4">
            <Tables
              titles={recipientsTable} // required
              tablePropsData={recipients}   // required
              showSelect={true}
              showPagination={true}   // optional
              filters={recipientsFilters}   // optional to enable filter
              onClick={this.showRecipientDetailModal}
              searchKeys={['email', 'name']}  // optional to enable search
            />
          </Row>

          <Button
            className="btn-icon btn-2 rounded-circle fixed-bottom-right-btn mr-6"
            color="secondary"
            type="button"
            style={{ zIndex: 5 }}
            onClick={(e) => {
              e.preventDefault();
              this.showDownloadCSVModal();
            }}
          >
            <span className="btn-inner--icon">
              <i className="fa fa-download" />
            </span>
          </Button>

          <Button
            className="btn-icon btn-2 rounded-circle fixed-bottom-right-btn"
            color="info"
            type="button"
            style={{ zIndex: 5 }}
            onClick={(e) => {
              e.preventDefault();
              this.showImportContactsModal();
            }}
          >
            <span className="btn-inner--icon">
              <i className="fa fa-plus" />
            </span>
          </Button>

          <ImportContactsModal
            isOpen={importContactsModal}
            // data={this.state.editItem}
            close={this.closeImportContactsModal}
          // create={this.createMailAccount}
          // update={this.updateMailAccount}
          />

          <RecipientDetailModal
            isOpen={recipientDetailModal}
            data={this.state.recipientDetailItem}
            close={this.closeRecipientDetailModal}
          />

          <CSVDownloadModal
            data={recipients}
            isOpen={this.state.downloadCSVModal}
            close={this.closeDownloadCSVModal}
          />

        </PageContainer>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    id: state.campaignDetails.id,
    title: state.campaignDetails.title,
    recipients: state.campaignDetails.detailRecipients,
  };
};
export default connect( mapStateToProps, {
  getDetailRecipients
})(CampaignDetailRecipients);
