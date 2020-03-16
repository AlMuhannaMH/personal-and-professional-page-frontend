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

export const changePassword = (passwords, user) => {
  return axios({
    url: apiUrl + "/change-password",
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${user.token}` // FOR EXPRESS
      // 'Authorization': `Token ${user.token}` // FOR RAILS
    },
    data: {
      passwords: {
        old: passwords.oldPassword,
        new: passwords.newPassword
      }
    }
  });
};



// // Get Profile
// export const getProfile = () => {
//   return axios.get(`${apiURL}/Profiles`);
// };

// // Delete Profile by id
// export const deleteProfile = id => {
//   return axios.delete(`${apiURL}/Profiles/${id}`);
// };

// // Update existing Profile
// export const updateProfile = (Profile, id) => {
//   return axios.patch(`${apiURL}/Profiles/${id}`, { profile });
// };

// //Add Profile to the User 
// export const addProfile = Profile => {
//   return axios.post(`${apiURL}/Profiles`, { Profile });
// };
