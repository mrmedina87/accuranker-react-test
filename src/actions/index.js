import {
  REQUEST_EMPLOYEES,
  RECEIVE_EMPLOYEES,
  FAIL_REQUEST_EMPLOYEES,
  REQUEST_ABOUT,
  RECEIVE_ABOUT,
} from './types';

// creators for each type of object actions

const requestEmployees = () => {
  return {
    type: REQUEST_EMPLOYEES
  };
};

const receiveEmployees = json => {
  return {
    type: RECEIVE_EMPLOYEES,
    employees: json
  };
};

const errorEmployees = (error) => {
  return {
    type: FAIL_REQUEST_EMPLOYEES,
    error
  };
};

const requestAbout = () => {
  return {
    type: REQUEST_ABOUT
  };
};

const receiveAbout = about => {
  return {
    type: RECEIVE_ABOUT,
    about
  };
};

// creators for redux-promise actions

export const fetchEmployees = dispatch => {
  return new Promise((resolve, reject) => {
    
    dispatch(requestEmployees());
    return fetch(`https://accuranker-test-api.herokuapp.com/api/employees`)
      .then(response => {
        return response.json();
      }, error => {
        dispatch(errorEmployees(error));
      })
      .then(json => {
        dispatch(receiveEmployees(json));
      });

  });
};

export const fetchAbout = dispatch => {
  return new Promise((resolve, reject) => {

    dispatch(requestAbout());
    const aboutInfo = {
      title: "Accuranker",
      description: "Accuranker is a state-of-the-art SEO tool that maximises the search engine marketing and organic reach of websites, brands and businesses.",
      address: "Aaboulevarden 3, 3. sal 8000 Aarhus C",
      country: "Denmark",
      VAT: "DK32932215",
      phone: "+4571992600",
      email: "hello@accuranker.com",
      trialLink: "trial_link"
    };

    // should be inside a fetch's (or similar) then-callback
    dispatch(receiveAbout(aboutInfo));

  });
};