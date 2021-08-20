//Authentication
import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

//Next
import { NextApiRequest, NextApiResponse } from "next";

export default handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    try {
      await handleLogin(req, res, { returnTo: "/home" });
    } catch (error) {
      res.status(error.status || 500).end(error.message);
    }
  },
});
