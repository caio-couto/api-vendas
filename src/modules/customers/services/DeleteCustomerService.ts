import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";

interface IRequest
{
  id: string;
}

class DeleteCustomerService
{
  public async execute({ id }: IRequest): Promise<void>
  {
    const customerRepository = getCustomRepository(CustomersRepository);

    const customer = await customerRepository.findById(id);

    if (!customer)
    {
      throw new AppError("User not found.");
    }

    await customerRepository.remove(customer);
  }
}

export default DeleteCustomerService;
