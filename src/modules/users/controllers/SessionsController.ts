import { Request, Response } from "express";
import CreateSessionService from "../services/CreateSessionsService";

class SessionsController
{
  public async index(req: Request, res: Response): Promise<Response>
  {
    const { email, password } = req.body;

    const createSession = new CreateSessionService();

    const user = await createSession.execute({ email, password });

    return res.json(user);
  }
}

export default SessionsController;
