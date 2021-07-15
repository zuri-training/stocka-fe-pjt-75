"use strict";
// gets a list of users
const url_users = "https://stocka-zuri-api.herokuapp.com/auth/users/";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjI2MzUzNTY4LCJqdGkiOiIzZDU0NmI1ZDRiMjM0YzViOGQzMDJjM2EwNjgyMmQ3NCIsInVzZXJfaWQiOjEzfQ.QwuPJ0Do-r6QFv29YEUoU4aj2Bd8MaZXI9be78GPlIQ";
const users = [];
let url_img = "https://image.flaticon.com/icons/png/128/847/847969.png";
let accounts = document.getElementById("accounts");
let customer_count = document.getElementById("count");

function createAccountElement(name, email, company_name) {
  let _name = name;
  let _email=email;
  let _company = company_name;
  let account = document.createElement("div");
  let new_user = document.createElement("div");
  let new_status = document.createElement("div");
  let img = document.createElement("img");
  let credential = document.createElement("div");
  let user_name = document.createElement("h4");
  let user_id = document.createElement("h5");
  let date_time = document.createElement("div");
  let date_body = document.createElement("h5");
  let _date = document.createElement("span");
  let _time = document.createElement("span");
  let _status = document.createElement("h5");
  function addClassList() {
  new_user.classList.add("new-user");
  new_status.classList.add("new-status");
  new_user.classList.add("flex");
  new_status.classList.add("flex");
  date_time.classList.add("date-time");
  img.setAttribute("src", url_img);
  img.setAttribute("width", "40px");
  account.classList.add("account");
  account.classList.add("acc1");
  credential.classList.add("credential");
  // my content
  user_name.classList.add("name");
  user_id.classList.add("id");
  _date.classList.add("date");
  _time.classList.add("time");
  _status.classList.add("status");
}
function appendElement() {
  let today  = new Date();
  let date = today.toLocaleDateString("en-US");
  console.log(); // 9/17/2016
  user_name.append(_name);
  user_id.append(_email);
  _date.append(_company);
  _time.append(date);
  _status.append("completed");
  date_body.append(_date);
  date_body.append(_time);
  // for the credential tag
  credential.append(user_name);
  credential.append(user_id);
  // for the new user tag
  new_user.append(img);
  new_user.append(credential);

  new_status.append(date_time);
  new_status.append(_status);

  date_time.append(date_body);
  date_body.append(_date);
  date_body.append(_time);
  account.append(new_user);
  account.append(new_status);
  accounts.append(account);
}
  addClassList();
  appendElement();
}




window.addEventListener("load", async () => {
  console.log("loaded");
  await get_users(url_users);
  console.log(users[0]);

  const user = await users[0];
  for (i in user) {
    // accounts.append(account);
    if (user[i].company_name != null) {
      createAccountElement(user[i].full_name, user[i].email,user[i].company_name);
      user[i].company_name;
    }
    // console.log(user[i].company_name);
  }
});

async function get_users(url) {
  await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
  })
    .then((response) => response.json())
    .then((user) => {
      console.log(user);
      users.push(user.results);
      customer_count.innerHTML = user.count;
    })
    .catch((error) => console.log(error));
}
