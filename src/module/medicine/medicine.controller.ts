import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MedicineService } from './medicine.service';
import { Public } from 'src/common/decorator/public-auth-guard.decorator';

@ApiTags('Medicine')
@Controller('medicine')
export class MedicineController {
  constructor(private readonly medicineService: MedicineService) {}

  @Public()
  @Get()
  async findAll() {
    try {
      return await this.medicineService.findAll();
    } catch (error) {
      console.log(error);
    }
  }
}
