// REGISTER ACTION
export const REQUEST_FOR_REGISTER = "REQUEST_FOR_REGISTER";
export const SUCCESS_REGISTER = "SUCCESS_REGISTER";
export const FAILURE_REGISTER = "FAILURE_REGISTER";
// LOGIN ACTION
export const REQUEST_FOR_LOGIN = "REQUEST_FOR_LOGIN";
export const SUCCESS_LOGIN = "SUCCESS_LOGIN";
export const FAILURE_LOGIN = "FAILURE_LOGIN";
// LOGOUT ACTION
export const REQUEST_FOR_LOGOUT = "REQUEST_FOR_LOGOUT";
export const SUCCESS_LOGOUT = "SUCCESS_LOGOUT";
export const FAILURE_LOGOUT = "FAILURE_LOGOUT";
// CAMPAIGN START ACTION
export const REQUEST_FOR_START = "REQUEST_FOR_START";
export const SUCCESS_START = "SUCCESS_START";
export const FAILURE_START = "FAILURE_START";
// OPTION ACTION
export const REQUEST_FOR_OPTION = "REQUEST_FOR_OPTION";
export const SUCCESS_OPTION = "SUCCESS_OPTION";
export const FAILURE_OPTION = "FAILURE_OPTION";
// RECIPIENTS
export const SUCCESS_RECIPIENT = "SUCCESS_RECIPIENT";
export const REQUEST_FOR_RECIPIENT = "REQUEST_FOR_RECIPIENT";
export const FAILURE_RECIPIENT = "FAILURE_RECIPIENT";
// VIEW
// export const SUCCESS_VIEW="SUCCESS_VIEW"
export const SUCCESS_START_CAMPAIGN = "SUCCESS_START_CAMPAIGN";
// CAMPAIGN_OPTION ACTION
// export const SUCCESS_OPTION = "SUCCESS_OPTION";
// CAMPAIGN_RECIPIENTS
// export const SUCCESS_RECIPIENT = "SUCCESS_RECIPIENT"
// CAMPAIGN_VIEW
export const REQUEST_FOR_VIEW = "REQUEST_FOR_VIEW";
export const SUCCESS_VIEW = "SUCCESS_VIEW";
export const FAILURE_VIEW = "FAILURE_VIEW";
// CAMPAIGN_SEND
export const SUCCESS_CREATE_CAMPAIGN = "SUCCESS_CREATE_CAMPAIGN";
// CAMPAIGN_SAVE
export const SUCCESS_SAVE_CAMPAIGN = "SUCCESS_SAVE_CAMPAIGN";
// MAIL_SENDER
export const REQUEST_FOR_MAIL_SENDER = "REQUEST_FOR_MAIL_SENDER";
export const SUCCESS_MAIL_SENDER = "SUCCESS_MAIL_SENDER";
export const FAILURE_MAIL_SENDER = "FAILURE_MAIL_SENDER";
// MAIL_GET_DATA
export const REQUEST_FOR_MAIL_GET_DATA = "REQUEST_FOR_MAIL_GET_DATA";
export const SUCCESS_MAIL_GET_DATA = "SUCCESS_MAIL_GET_DATA";
export const FAILURE_MAIL_GET_DATA = "FAILURE_MAIL_GET_DATA";
// CAMPAIGN_TABLE_DATA
export const SUCCESS_CAMPAIGN_TABLE_DATA = "SUCCESS_CAMPAIGN_TABLE_DATA";
// FETCH_MAIL_ACCOUNTS
export const FETCH_MAIL_ACCOUNTS = "FETCH_MAIL_ACCOUNTS";
export const SUCCESS_FETCH_MAIL_ACCOUNTS = "SUCCESS_FETCH_MAIL_ACCOUNTS";

// delete Mail Account
export const SUCCESS_MAIL_ACCOUNT_DELETE = "SUCCESS_MAIL_ACCOUNT_DELETE";
// update Mail Account
export const SUCCESS_MAIL_ACCOUNT_UPDATE = "SUCCESS_MAIL_ACCOUNT_UPDATE";
export const FAILURE_MAIL_ACCOUNT_UPDATE = "FAILURE_MAIL_ACCOUNT_UPDATE";

//CAMPAIGN_CREATE_PREVIEW GET DATA
export const REQUEST_FOR_CAMPAIGN_CREATE_PREVIEW =
  "FETCH_CAMPAIGN_CREATE_PREVIEW";
export const SUCCESS_FETCH_CAMPAIGN_CREATE_PREVIEW =
  "SUCCESS_FETCH_CAMPAIGN_CREATE_PREVIEW";
export const FAILURE_FETCH_CAMPAIGN_CREATE_PREVIEW =
  "FAILURE_FETCH_CAMPAIGN_CREATE_PREVIEW";

//CAMPAIGN_CREATE_UPDATE_PUT DATA
export const SUCCESS_FETCH_CAMPAIGN_UPDATE_PREVIEW =
  "SUCCESS_FETCH_CAMPAIGN_UPDATE_PREVIEW";
export const FAILURE_FETCH_CAMPAIGN_UPDATE_PREVIEW =
  "FAILURE_FETCH_CAMPAIGN_UPDATE_PREVIEW";

// CAMPAIGN_OVERVIEW
export const REQUEST_FOR_CAMPAIGN_OVERVIEW = "REQUEST_FOR_CAMPAIGN_OVERVIEW";
export const SUCCESS_CAMPAIGN_OVERVIEW = "SUCCESS_CAMPAIGN_OVERVIEW";
export const FAILURE_CAMPAIGN_OVERVIEW = "FAILURE_CAMPAIGN_OVERVIEW";

// COMPOSE
export const REQUEST_FOR_COMPOSE_DATA = "REQUEST_FOR_COMPOSE_DATA";
export const SUCCESS_COMPOSE_DATA = "SUCCESS_COMPOSE_DATA";
export const FAILURE_COMPOSE_DATA = "FAILURE_COMPOSE_DATA";

// CAMPAIGN RECIPIENT PEOPLE
export const SUCCESS_FOR_CAMPAIGN_PEOPLE = "SUCCESS_FOR_CAMPAIGN_PEOPLE";

// GET SCHEDULE
export const REQUEST_FOR_GET_SCHEDULE = "REQUEST_FOR_GET_SCHEDULE";
export const SUCCESS_GET_SCHEDULE = "SUCCESS_GET_SCHEDULE";
export const FAILURE_GET_SCHEDULE = "FAILURE_GET_SCHEDULE";

// UPDATE SCHEDULE
export const UPDATE_SUCCESS_GET_SCHEDULE = "UPDATE_SUCCESS_GET_SCHEDULE";

// LeadCatcher
export const SUCCESS_LEAD_CATCHER = "SUCCESS_LEAD_CATCHER";

// leadCatcherget
export const SUCCESS_LEAD_CATCHER_GET = "SUCCESS_LEAD_CATCHER_GET";

// LeadCatcher DELETE
export const SUCCESS_LEAD_DELETE = "SUCCESS_LEAD_DELETE";

// Lead catcher Update
export const SUCCESS_LEAD_UPDATE = "SUCCESS_LEAD_UPDATE";

// Lead catcher VIEW
export const SUCCESS_LEAD_VIEW = "SUCCESS_LEAD_VIEW";

// CREATE LEAD
export const SUCCESS_CREATE_LEAD = "SUCCESS_CREATE_LEAD";



// Karl - Will remove later
// ****************************************************************

// GET PROSPECT
export const FETCH_PROSPECTS = "FETCH_PROSPECTS";
export const SUCCESS_FETCH_PROSPECTS = "SUCCESS_FETCH_PROSPECTS";
export const FAILURE_FETCH_PROSPECTS = "FAILURE_FETCH_PROSPECTS";

// ONCLICK GET PROSPECT
export const SUCCESS_FETCH_ONCLICK_PROSPECTS =
  "SUCCESS_FETCH_ONCLICK_PROSPECTS";

// DELETE PROSPECTS
export const DELETE_PROSPECT = "DELETE_PROSPECT";


// FETCH_UNSUBSCRIPTION
export const FETCH_UNSUBSCRIPTION = "FETCH_UNSUBSCRIPTION";
export const SUCCESS_FETCH_UNSUBSCRIPTION = "SUCCESS_FETCH_UNSUBSCRIPTION";
export const REQUEST_FOR_UNSUBSCRIBE_WITH_CSV =
  "REQUEST_FOR_UNSUBSCRIBE_WITH_CSV";
export const SUCCESS_UNSUBSCRIBE_WITH_CSV = "SUCCESS_UNSUBSCRIBE_WITH_CSV";
export const FAILURE_UNSUBSCRIBE_WITH_CSV = "FAILURE_UNSUBSCRIBE_WITH_CSV";

// *****************************************************************



// Notification
export const SHOW_NOTIFICATION = "SHOW_NOTIFICATION";
export const HIDE_NOTIFICATION = "HIDE_NOTIFICATION";

// MailAccounts
export const GET_MAILACCOUNTS = "GET_MAILACCOUNTS";
export const ADD_MAILACCOUNT = "ADD_MAILACCOUNT";
export const UPDATE_MAILACCOUNT = "UPDATE_MAILACCOUNT";
export const DELETE_MAILACCOUNT = "DELETE_MAILACCOUNT";

// Sending calendars
export const GET_SENDING_CALENDARS = "GET_SENDING_CALENDARS";
export const ADD_SENDING_CALENDAR = "ADD_SENDING_CALENDAR";
export const UPDATE_SENDING_CALENDAR = "UPDATE_SENDING_CALENDAR";
export const DELETE_SENDING_CALENDAR = "DELETE_SENDING_CALENDAR";

export const GET_AVAILABLE_TIME_ZONES = "GET_AVAILABLE_TIME_ZONES";

// Campaign actions
export const CAMPAIGN_START = "CAMPAIGN_START";
export const CAMPAIGN_COMPOSE = "CAMPAIGN_COMPOSE";
export const CAMPAIGN_RECIPIENT = "CAMPAIGN_RECIPIENT";
export const CAMPAIGN_OPTIONS = "CAMPAIGN_OPTIONS";
export const CAMPAIGN_SEND = "CAMPAIGN_SEND";

// Prospects actions
export const FILTER_RECIPIENTS = "FILTER_RECIPIENTS";
export const COUNT_RECIPIENTS = "COUNT_RECIPIENTS";

// Unsubscribe actions
export const GET_UNSUBSCRIBES = "GET_UNSUBSCRIBES";