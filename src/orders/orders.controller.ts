import { Controller, Post, Body, UseGuards, Request, Get } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  async create(@Body() body, @Request() req) {
    const userId = req.user.userId;
    return this.ordersService.create({ ...body, usuarioId: userId });
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  async getMyOrders(@Request() req) {
    return this.ordersService.getAllByUser(req.user.userId);
  }

  @UseGuards(JwtAuthGuard)
  @Get('history')
  async getOrderHistory(@Request() req) {
    const orders = await this.ordersService.getAllByUser(req.user.userId);
    return orders.map(order => ({
      id: order.id,
      nombres: order.nombres,
      apellidos: order.apellidos,
      departamento: order.departamento,
      municipio: order.municipio,
      paquetes: order.productos?.length ?? 0,
      createdDate: order.createdDate
    }));
  }
}
