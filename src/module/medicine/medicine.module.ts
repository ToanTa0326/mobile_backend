import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medicine } from 'src/databases/entity/medicine.entity';
import { MedicineController } from './medicine.controller';
import { MedicineService } from './medicine.service';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    TypeOrmModule.forFeature([Medicine]),
    JwtModule.register({
      global: true,
      secret: process.env.SECRET_KEY_ACCESS_TOKEN,
      // signOptions: { expiresIn: '60d' },
    }),
    // QueueModule
  ],
  controllers: [MedicineController],
  providers: [MedicineService],
})
export class MedicineModule {}
