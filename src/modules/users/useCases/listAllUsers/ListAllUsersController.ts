import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const id = request.headers.user_id.toString();
      const users = this.listAllUsersUseCase.execute({ user_id: id });
      return response.status(200).json(users);
    } catch (e) {
      return response.status(400).json({ error: "Not Allowed" });
    }
  }
}

export { ListAllUsersController };
