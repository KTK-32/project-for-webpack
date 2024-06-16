import { GenerateEntity } from "./functions";
import { Visualize2DArray} from "./functions";
import { Block_T } from "./block";

export class field {
    entity: number[][]

    constructor() {
        this.entity = GenerateEntity(20,10)
    }
}

let fld = new field;