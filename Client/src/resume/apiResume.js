import apiUrl from "../apiConfig";
import axios from "axios";

//Get Profile
export const getProfile = () => {
  return axios.get(`${apiURL}/profile`);
};

//Add Profile to the User
export const addProfile = profile => {
  return axios.post(`${apiURL}/profile`, { profile });
};

// Update existing Profile
export const updateProfile = (profile, id) => {
  return axios.patch(`${apiURL}/profile/${id}`, { profile });
};

// Delete Profile by id
export const deleteProfile = id => {
  return axios.delete(`${apiURL}/profile/${id}`);
};
