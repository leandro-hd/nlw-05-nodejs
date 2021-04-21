import { EntityRepository, Repository } from 'typeorm';
import { User } from '../entities/User';

@EntityRepository(User)
class UsersRepositoy extends Repository<User> {}

export { UsersRepositoy }