import { Controller, Post, Body } from '@nestjs/common';
import { CustomerProfile } from './customerProfile.entity';

@Controller('customers')
export class CustomersController {

  @Post('profile')
  upsertProfile(@Body() body: any) {
    return {
      ok: true,
    };
  }
}

