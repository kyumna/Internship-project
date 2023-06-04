import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users');
      const users = usersResponse.data;

      const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const posts = postsResponse.data;

      res.status(200).json({ users, posts });
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Error fetching data' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
}