import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import {
    ApiBearerAuth,
    ApiOperation,
    ApiResponse,
    ApiTags,
} from '@nestjs/swagger';
import { CatsService } from './cats.service';
import { CreateCatDto } from './create-cat.dto';
import { Cat } from './cat.entity';

@ApiBearerAuth()
@ApiTags('cats')
@Controller('cats')
export class CatsController {
    constructor(private readonly catsService: CatsService) {}

    @Post()
    @ApiOperation({ summary: 'Create cat' })
    @ApiResponse({
    status: 201,
    description: 'Created',
    type: Cat,
    })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    async create(@Body() createCatDto: CreateCatDto): Promise<Cat> {
        return this.catsService.create(createCatDto);
    }

    @Get(':id')
    @ApiResponse({
    status: 200,
    description: 'The found record',
    type: Cat,
    })
    findOne(@Param('id') id: string): Promise<Cat> {
        return this.catsService.findOne(+id);
    }
}