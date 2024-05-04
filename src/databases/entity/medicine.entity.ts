import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Prescuption } from './prescuption.entity';

@Entity()
export class Medicine {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  volume: number;

  @Column()
  notes: string;

  @Column()
  image: string;

  @Column()
  url: string;

  // @Column()
  // @ManyToMany(() => Prescuption)
  // @JoinTable({
  //   name: 'medicine_precuption',
  // })
  // prescuption: Prescuption[];
}
