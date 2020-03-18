import apiUrl from "../apiConfig";
import axios from "axios";

// //Get Profile
// export const getProfile = () => {
//   return axios.get(`${apiUrl}/profile`);
// };


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
}

//Add Profile to the User
export const addresume = profile => {
  return axios.post(`${apiUrl}/profile`, { profile });
};

// Update existing Profile
export const updateProfile = (profile, id) => {
  return axios.patch(`${apiUrl}/profile/${id}`, { profile });
};

// Delete Profile by id
export const deleteProfile = id => {
  return axios.delete(`${apiUrl}/profile/${id}`);
};
