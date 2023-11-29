import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";
import { instanceToInstance } from "class-transformer";

class UserAvatarController
{
  public async Update(req: Request, res: Response): Promise<Response>
  {
    const updateAvatar = new UpdateUserAvatarService();

    const user = updateAvatar.execute({ user_id: req.user.id, avatarFilename: req.file?.filename as string });

    return res.json(instanceToInstance(user));
  }
}

export default UserAvatarController;
