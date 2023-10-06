import { Request, Response } from "express";
import ListUserService from "../services/ListUserService";
import CreateUserService from "../services/CreateUserService";

class UsersController
{
  public async index(req: Request, res: Response): Promise<Response>
  {
    const listUser = new ListUserService();

    const users = await listUser.execute();

    return res.json(users);
  }

  public async create(req: Request, res: Response): Promise<Response>
  {
    const { name, email, password } =  req.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({ name, email, password })

    return res.json(user);
  }
}

export default UsersController;
