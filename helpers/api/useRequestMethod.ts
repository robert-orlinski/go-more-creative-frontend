import { NextApiRequest, NextApiResponse } from 'next';

type RequestMethodsType = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const useRequestMethod =
  (
    possibleMethods: {
      readonly [key in RequestMethodsType]?: (req: NextApiRequest, res: NextApiResponse) => unknown;
    },
  ) =>
  async (req: NextApiRequest, res: NextApiResponse) => {
    const currentRequestMethod = req.method as RequestMethodsType;
    const handler = possibleMethods[currentRequestMethod];

    if (handler) {
      return handler(req, res);
    } else {
      res.status(405).send('method not allowed');
    }
  };