import axios from 'axios';

const API_ENDPOINT = 'https://api.github.com';

export const fetchGithubUser = username => {
  return axios({
    method: 'get',
    url: `${API_ENDPOINT}/users/${username}/repos`,
  });
};
