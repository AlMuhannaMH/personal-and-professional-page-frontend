import apiUrl from "../apiConfig";
import axios from "axios";

//Get Resumes
export const getResumes = () => {
  return axios.get(`${apiUrl}/resumes`);
};

//Add Resumes to the User
export const addResumes = resumes => {
  return axios.post(`${apiUrl}/resumes`, resumes);
};
// export const newRequest = req => {
//   return axios({
//     url: `${apiUrl}/resumes`,
//     method: 'POST',
//     data: {
//       resume: {
//         assistantId: req.assistantId,
//         date: req.date,
//         carDescription: req.carDescription,
//         specialNeeds: req.specialNeeds,
//         package: req.package,
//         trip: {
//           start: req.pickup,
//           destination: req.dropoff
//         },
//       }
//     }
//   })

// Update existing Resumes
export const updateResumes = (resumes, id) => {
  return axios.patch(`${apiUrl}/resumes/${id}`, resumes);
};

// Delete Resumes by id
export const deleteResumes = id => {
  return axios.delete(`${apiUrl}/resumes/${id}`);
};
