import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';


@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(correo: string, password: string) {
    const user = await this.usersService.findByEmail(correo);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    const { password: _, ...userData } = user;
    return userData;
  }

  async login(user: any) {
    const payload = { sub: user.id, correo: user.correo };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}