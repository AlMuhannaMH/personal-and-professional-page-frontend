let apiUrl
const expressPort = 5000
const apiUrls = {
  development: `http://localhost:${expressPort}/api`,
  production: `https://aqueous-atoll-85096.herokuapp.com/api`,
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
