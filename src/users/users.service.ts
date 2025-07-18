import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>,
  ) {}

  async create(userData: Partial<User>): Promise<User> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = this.userRepo.create({
      ...userData,
      password: hashedPassword,
    });
    return this.userRepo.save(user);
  }

  async findByEmail(correo: string): Promise<User | null> {
        return this.userRepo.findOne({ where: { correo } });
    }
}
