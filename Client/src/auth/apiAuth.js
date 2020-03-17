import apiUrl from "../apiConfig";
import axios from "axios";

export const signUp = credentials => {
  return axios({
    method: "POST",
    url: apiUrl + "/sign-up",
    data: {
      credentials: {
        firstName: credentials.firstName,
        lastName: credentials.lastName,
        username: credentials.username,
        label: credentials.label,
        phone: credentials.phone,
        email: credentials.email,
        password: credentials.password,
        password_confirmation: credentials.passwordConfirmation
      }
    }
  });
};

export const signIn = credentials => {
  return axios({
    url: apiUrl + "/sign-in",
    method: "POST",
    data: {
      credentials: {
        email: credentials.email,
        password: credentials.password
      }
    }
  });
};

export const signOut = user => {
  return axios({
    url: apiUrl + "/sign-out",
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    }
  });
};

export const UpdateUserInfo = (userNewInfo, user) => {
  return axios({
    url: apiUrl + "/update-info",
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      userNewInfo: {
        old: userNewInfo.oldPassword,
        new: userNewInfo.newPassword
      }
    }
  });
};

export const editUser = (id, user) => {
  return axios.patch(`${apiUrl}/users/${id}`, { user });
};
