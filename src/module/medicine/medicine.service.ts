import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Medicine } from 'src/databases/entity/medicine.entity';
import { Repository } from 'typeorm';
// import { ProducerService } from "../rabbitmq/producer.service";

@Injectable()
export class MedicineService {
  constructor(
    @InjectRepository(Medicine)
    private userRepository: Repository<Medicine>,
    // private readonly producerService: ProducerService,
  ) {}

  async findAll() {
    return await this.userRepository.find();
  }
}
