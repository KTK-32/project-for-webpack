export interface Block {
    origin: number[];
    move: number[];
    entity: number[][];
    rotation: number;
    locked: boolean;
    lastmove: string;

    spin(): void;
    up(): void;
    down(): void;
    left(): void;
    right(): void;
}

export class Block_T implements Block {
    origin: number[];
    move: number[];
    entity: number[][];
    rotation: number;
    locked: boolean;
    lastmove: string;

    constructor() {
        this.origin = [0,0];
        this.move = [0,0];
        this.entity = [[0,1,0],[1,1,1],[0,0,0]];
        this.rotation = 0;
        this.locked = false;
        this.lastmove = "new";
    }

    spin() {
        this.rotation = this.rotation + 1;
        if (this.rotation > 3) {this.rotation = 0};
        switch (this.rotation) {
            case 0:
                this.entity = [[0,1,0],[1,1,1],[0,0,0]];
                break;
            case 1:
                this.entity = [[0,1,0],[0,1,1],[0,1,0]];
                break;
            case 2:
                this.entity = [[0,0,0],[1,1,1],[0,1,0]];
                break;
            case 3:
                this.entity = [[0,1,0],[1,1,0],[0,1,0]];
                break;
        }
    }

    up() {
        this.move[1] = this.move[1] - 1;
        this.lastmove = "up";
    }
    down() {
        this.move[1] = this.move[1] + 1;
        this.lastmove = "down";
    }
    left() {
        this.move[0] = this.move[0] - 1;
        this.lastmove = "left";
    }
    right() {
        this.move[0] = this.move[0] + 1;
        this.lastmove = "right";
    }
}