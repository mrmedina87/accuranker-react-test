export const REQUEST_EMPLOYEES = 'REQUEST_EMPLOYEES'
function requestEmployees() {
  return {
    type: REQUEST_EMPLOYEES
  }
}

export const RECEIVE_EMPLOYEES = 'RECEIVE_EMPLOYEES'
function receiveEmployees(json) {
  return {
    type: RECEIVE_EMPLOYEES,
    employees: json
  }
}

export const REQUEST_ABOUT = 'REQUEST_ABOUT'
function requestAbout() {
  return {
    type: REQUEST_ABOUT
  }
}

export const RECEIVE_ABOUT = 'RECEIVE_ABOUT'
function receiveAbout(about) {
  return {
    type: RECEIVE_ABOUT,
    about
  }
}

export const fetchEmployees = function(dispatch) {
  return new Promise(function(resolve, reject) {
    dispatch(requestEmployees());
    return fetch(`https://accuranker-test-api.herokuapp.com/api/employees`).then(function(response) {
      var resp = response.json();
      return resp;
    }).then(function(json) {
      dispatch(receiveEmployees(json));
    });
  });
}

export const fetchAbout = function(dispatch) {
  return new Promise(function(resolve, reject) {
    dispatch(requestAbout());

    const aboutInfo = {
      title: "Accuranker",
      description: "Accuranker is a state-of-the-art SEO tool that maximises the search engine marketing and organic reach of websites, brands and businesses.",
      Address: "Aaboulevarden 3, 3. sal 8000 Aarhus C",
      Country: "Denmark",
      VAT: "DK32932215",
      Phone: "+4571992600",
      email: "hello@accuranker.com",
      trialLink: "trial_link"
    }

    // should be inside a then resolver function
    dispatch(receiveAbout(aboutInfo));

    /*return fetch(`ABOUT_URL_RESOURCE`).then(function(response) {
      var resp = response.json();
      return resp;
    }).then(function(json) {
      dispatch(receiveAbout(json));
    });*/
  });
}