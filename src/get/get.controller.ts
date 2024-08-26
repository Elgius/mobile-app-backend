import { Controller, Get } from '@nestjs/common';

@Controller('info')
export class GetController {
  constructor() {}

  @Get('status')
  async statusOfserver() {
    return { status: 'active' };
  }
}
