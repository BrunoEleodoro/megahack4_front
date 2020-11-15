const { URL } = require("./Globals");

exports.getAPI = ({ endpoint }) => {
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("token");

    fetch(URL + "" + endpoint, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        resolve(response);
        console.log(response);
      })
      .catch((err) => {
        reject(err);
        console.error(err);
      });
  });
};

exports.postAPI = ({ endpoint, body }) => {
  return new Promise((resolve, reject) => {
    let token = localStorage.getItem("token");
    fetch(URL + "" + endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify(body),
    })
      .then(function (response) {
        return response.json();
      })
      .then((response) => {
        resolve(response);
        console.log(response);
      })
      .catch((err) => {
        reject(err);
        console.error(err);
      });
  });
};
