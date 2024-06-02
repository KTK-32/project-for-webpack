import { Generate2DArray } from "./function";
import { Block } from "./block";

export class Field {
    origin: number[];
    width: number;
    height: number;
    loadspace: Block[];
    entity: number[][];

    constructor() {
        this.origin = [4,0];
        this.width = 10;
        this.height = 20;
        this.loadspace = [];
        this.entity = Generate2DArray(this.height+2,this.width+2);
        this.entity.forEach((eachRow) => {
            eachRow[0] = 1;
            eachRow[this.width + 2] = 1; 
        });
        this.entity[this.height + 1].forEach((_, colNum, lastRow) => {
            lastRow[colNum] = 1;
        });
    }

    fieldInitialize() {
        this.entity = Generate2DArray(this.height,this.width);
        this.entity.forEach((eachRow) => {
            eachRow[0] = 1;
            eachRow[this.width - 1] = 1; 
        });
        this.entity[this.height - 1].forEach((_, colNum, lastRow) => {
            lastRow[colNum] = 1;
        });
    }

    checkInterference(): boolean {
        let intf: boolean = false;
        this.entity.forEach((eachRow) => {
            if (eachRow.includes(2)){intf = true}
        });
        return intf;
    }

    checkBlockmove() {
        if (this.checkInterference() == true){
            const lastBlock: Block = this.loadspace[this.loadspace.length - 1];
            switch (lastBlock.lastmove) {
                case "up":
                    lastBlock.down();
                    break;
                case "down":
                    lastBlock.up();
                    lastBlock.locked = true;
                    break;
                case "left":
                    lastBlock.right();
                    break;
                case "right":
                    lastBlock.left();
                    break;
                case "new":
                    break;
            }
        }
    }

    checkClearLine() {
        this.entity.forEach((eachRow,rowNum) => {
            eachRow.forEach((value) => {
                
            })
        })
    }

    loadBlock(objBlock: Block) {
        this.loadspace.push(objBlock);
    }

    materialize() {
        this.fieldInitialize();

        this.loadspace.forEach((block) => {
            const x: number = this.origin[0] + block.origin[0] + block.move[0];
            const y: number = this.origin[1] + block.origin[1] + block.move[1];

            block.entity.forEach((eachRow, rowNum) => {
                eachRow.forEach((blockValue, colNum) => {
                    if (y + rowNum > this.entity.length - 1) return;
                    if (x + colNum > this.entity[0].length - 1) return;
                    const fieldValue: number = this.entity[y + rowNum][x + colNum];
                    this.entity[y + rowNum][x + colNum] = fieldValue + blockValue;
                });
            });
        });

        this.checkBlockmove();
        this.checkClearLine();
    }
};