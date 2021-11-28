export class Huga {

    private cnt: number = 0;

    constructor(
        private readonly value: string
    ) {
    }

    public message() {
        console.log(`hugahuga:${this.value} ${++this.cnt}回目`);
    }
}