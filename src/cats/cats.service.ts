import { Injectable } from '@nestjs/common';
import { CreateCatDto } from './create-cat.dto';

@Injectable()
export class CatsService {
    memory_db: any []

    constructor(){
        this.memory_db = []
    }

    async create(cat: CreateCatDto){
        if(cat.id == null){
            cat.id = this.memory_db.length + 1;
            this.memory_db.push(cat);  
        }
        this.memory_db[cat.id-1] = cat

        return cat
    }

    async findOne(id: number){
        console.log(this.memory_db);
        for(const cat of this.memory_db){
            if (cat.id == id)
                return cat;
        }
        return null;
    }

}
