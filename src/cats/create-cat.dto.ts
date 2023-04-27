import { ApiProperty } from '@nestjs/swagger';

export class CreateCatDto {

    @ApiProperty({
        example: 'Kitty',
        description: 'The name of the Cat'
    })
    name: string;
    
    id!: number;
    
    @ApiProperty({ example: 1, description: 'The age of the Cat' })
    age: number;

    @ApiProperty({
    example: 'Maine Coon',
    description: 'The breed of the Cat',
    })
    breed: string;
}