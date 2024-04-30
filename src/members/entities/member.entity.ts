import { ApiProperty } from '@nestjs/swagger';

export class Member {
  @ApiProperty({ example: 1, description: 'The id of the Member' })
  id: number;

  @ApiProperty({ example: 'hogehoge', description: 'The name of the Member' })
  name: string;

  @ApiProperty({ example: 25, description: 'The age of the Member' })
  age: number;
}
