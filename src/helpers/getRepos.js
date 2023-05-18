import axios from 'axios';

export async function getRepos() {
  const REPOS_URL = 'https://api.github.com/users/aleksandr-krivoruchko/repos';
  try {
    const response = await axios.get(REPOS_URL);
    return response.data;
  } catch (error) {
    throw error;
  }
}
