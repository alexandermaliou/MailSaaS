import {
    FAILURE_START,
    REQUEST_FOR_START,
    SUCCESS_START,
    FAILURE_RECIPIENT,
    REQUEST_FOR_RECIPIENT,
    SUCCESS_RECIPIENT,
    FAILURE_VIEW,
    REQUEST_FOR_VIEW,
    SUCCESS_VIEW,
    REQUEST_FOR_OPTION,
    SUCCESS_OPTION,
    FAILURE_OPTION
} from "../actionType/actionType"

import Api from "../api/api"

// Campaign START
export const requestForStart = () => {
    return {
        type: REQUEST_FOR_START,
    }
}
export const StartSuccess = (data) => {
    console.log(data, 'data')
    return {
        type: SUCCESS_START,
        data
    }
}
export const StartFailure = () => {
    return {
        type: FAILURE_START,
    }
}

// Campaign option
export const requestForOption = () => {
    return {
        type: REQUEST_FOR_OPTION,
    }
}
export const OptionSuccess = (data) => {
    console.log(data, 'data')
    // alert("fghjk")
    return {
        type: SUCCESS_OPTION,
        data
    }
}
export const OptionFailure = () => {
    return {
        type: FAILURE_OPTION,
    }
}

// Campaign RECIPIENTS
export const requestForRecipient = () => {
    return {
        type: REQUEST_FOR_RECIPIENT,
    }
}
export const RecipientSuccess = (recipientsData) => {
    console.log(recipientsData, 'data')
    return {
        type: SUCCESS_RECIPIENT,
        recipientsData
    }
}
export const RecipientFailure = () => {
    return {
        type: FAILURE_RECIPIENT,
    }
}

// VIEW
// export const requestForRecipient = () => {
//     return {
//         type: REQUEST_FOR_RECIPIENT,
//     }
// }
// export const RecipientSuccess = (recipientsData) => {
//     console.log(recipientsData, 'data')
//     return {
//         type: SUCCESS_RECIPIENT,
//         recipientsData
//     }
// }
// export const RecipientFailure = () => {
//     return {
//         type: FAILURE_RECIPIENT,
//     }
// }


export const RegisterAction = (user) => {
    return function (dispatch) {
        dispatch(requestForRegister(user))
        Api.RegisterApi(user).then(result => {
            console.log(result.data, 'registerSuccess')
            dispatch(registerSuccess(result.data))
        }).catch(err => {
            console.log(err)
        })
    }
}
export const LoginAction = (Loginuser) => {
    return function (dispatch) {
        dispatch(requestForLogin(Loginuser))
        Api.LoginApi(Loginuser).then(result => {
            const token = result.data.token;
            localStorage.setItem('token', token)
            console.log(token)
            dispatch(LoginSuccess(result.data))
        }).catch(err => {
            console.log(err)
        })
    }
}
export const StartCampaignAction = (data) => {
    return function (dispatch) {
        const token = localStorage.getItem('token')
        console.log('this is a token', token)
        dispatch(requestForStart(data, token))
        Api.StartApi(data, token).then(result => {
            dispatch(StartSuccess(result.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

export const CampaignOptionAction= (optionData) => {
    console.log('abcd:', optionData);
    return function (dispatch) {
        const token = localStorage.getItem('token')
        dispatch(requestForOption(optionData, token))
        Api.OptionApi(optionData, token).then(result => {
            dispatch(OptionSuccess(result.data))
            console.log("checking", token)
            alert("keshav")
        }).catch(err => {
            console.log(err)
        })
    }
}
export const RecipientAction = (recipientData) => {
    return function (dispatch) {
        const token = localStorage.getItem('token')
        console.log('this is a token', token)
        dispatch(requestForRecipient(recipientData, token))
        Api.RecipientApi(recipientData, token).then(result => {
            dispatch(RecipientSuccess(result.data))
        }).catch(err => {
            console.log(err)
        })
    }
}

