import React, { useRef, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Nav,
  Button,
  Card,
  CardHeader,
  CardBody,
} from "reactstrap";
import { connect } from "react-redux";
import NotificationAlert from "react-notification-alert";
import { hideNotification } from "../../utils/Utils";

function PageContainer(props) {
  const {
    children,
    title,
    showHelper,
    cardBodyClassNames,
    notification,
  } = props;
  const notificationRef = useRef(null);

  useEffect(() => {
    if (notification.showNotification) {
      let options = {
        place: "tr",
        message: (
          <div className="alert-text">
            <span className="alert-title" data-notify="title">
              {notification.title}
            </span>
            <span data-notify="message">{notification.message}</span>
          </div>
        ),
        type: notification.type,
        icon: "ni ni-bell-55",
        autoDismiss: 5,
      };
      notificationRef.current.notificationAlert(options);

      hideNotification();
    }
  }, [notification]);

  return (
    <>
      <div className="rna-wrapper">
        <NotificationAlert ref={notificationRef} />
      </div>
      <Container fluid className="mt--5">
        <Row>
          <Col>
            <Card>
              {(title || showHelper) && (
                <CardHeader>
                  <h2 className="mx-auto text-center display-3">{title}</h2>
                  {showHelper && (
                    <p
                      style={{
                        position: "absolute",
                        fontSize: "22px",
                        top: "15px",
                        right: "25px",
                      }}
                    >
                      <i
                        className="fa fa-question-circle-o"
                        aria-hidden="true"
                      ></i>
                    </p>
                  )}
                </CardHeader>
              )}
              <CardBody>
                <Row>
                  <Col className="m-0">{children}</Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

const mapStateToProps = (state) => ({
  notification: state.notification,
});

export default connect(mapStateToProps, {})(PageContainer);
