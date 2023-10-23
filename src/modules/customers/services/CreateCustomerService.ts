import { getCustomRepository } from "typeorm";
import AppError from "@shared/errors/AppError";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";
import Customer from "../typeorm/entities/Customer";

interface IRequest
{
  name: string;
  email: string;
}

class CreateCustomerService
{
  public async execute({ name, email }: IRequest): Promise<Customer>
  {
    const customerRepository = getCustomRepository(CustomersRepository);
    const emailExists = await customerRepository.findByEmail(email);

    if (emailExists)
    {
      throw new AppError("Email addres already used.");
    }

    const customer = customerRepository.create({ name, email });

    await customerRepository.save(customer);

    return customer;
  }
}

export default CreateCustomerService;
