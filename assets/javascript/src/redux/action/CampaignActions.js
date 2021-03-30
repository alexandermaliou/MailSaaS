import { CAMPAIGN_START, CAMPAIGN_RECIPIENT, CAMPAIGN_COMPOSE, CAMPAIGN_OPTIONS } from "../actionType/actionType";
import { history } from "../..";
import axios from "../../utils/axios";
import { toastOnError, toastOnSuccess, toggleTopLoader } from "../../utils/Utils";


export const campaignStart = (payload) => ({
  type: CAMPAIGN_START,
  payload,
});

export const campaignRecipient = (payload) => ({
  type: CAMPAIGN_RECIPIENT,
  payload,
});

export const campaignCompose = (payload) => ({
  type: CAMPAIGN_COMPOSE,
  payload,
});

export const campaignOptions = (payload) => ({
  type: CAMPAIGN_OPTIONS,
  payload,
});

export const campaignSend = (payload) => (dispatch) => {
  const formData = new FormData();
  formData.append('csvfile', payload.csvfile);
  formData.append('campaign', JSON.stringify(payload));
  toggleTopLoader(true);
  axios
    .post("/campaign/create/", formData)
    .then((response) => {
      history.push("/app/admin/campaign/list");
    })
    .catch((error) => {
      toastOnError(error);
    })
    .finally(() => {
      toggleTopLoader(false);
    });
};

export const campaignUpdate = (payload) => (dispatch) => {
  const formData = new FormData();
  formData.append('campaign', JSON.stringify(payload));
  toggleTopLoader(true);
  axios
    .post("/campaign/update/", formData)
    .then((response) => {
      //TODO: reload page
    })
    .catch((error) => {
      toastOnError(error);
    })
    .finally(() => {
      toggleTopLoader(false);
    });
}