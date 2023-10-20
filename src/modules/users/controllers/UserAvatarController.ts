import { Request, Response } from "express";
import UpdateUserAvatarService from "../services/UpdateUserAvatarService";

class UserAvatarController
{
  public async Update(req: Request, res: Response): Promise<Response>
  {
    const updateAvatar = new UpdateUserAvatarService();

    const user = updateAvatar.execute({ user_id: req.user.id, avatarFilename: req.file?.filename as string });

    return res.json(user);
  }
}

export default UserAvatarController;
