import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,
  ) {}

  async create(orderData: Partial<Order>): Promise<Order> {
    const order = this.orderRepo.create(orderData);
    return this.orderRepo.save(order);
  }

  async getAllByUser(userId: string): Promise<Order[]> {
    return this.orderRepo.find({ where: { usuarioId: userId } });
  }
}
