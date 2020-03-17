import apiUrl from "../apiConfig";
import axios from "axios";

//Get Profile
export const getProfile = () => {
  return axios.get(`${apiUrl}/profile`);
};

//Add Profile to the User
export const createArticleByApi = profile => {
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
