export class Plugboard {
    private mapping: number[] = [...Array(26).keys()];

    constructor(charMap: [number, number][]) {
        for (let mapping of charMap) {
            this.updateMapping(mapping);
        }
    }

    private updateMapping(mapping: [number, number]): void {
        this.mapping[mapping[0]] = mapping[1];
        this.mapping[mapping[1]] = mapping[0];
    }

    public getForwards(letter: number): number {
        return this.mapping[letter];
    }

    public getReverse(letter: number): number {
        return this.mapping.indexOf(letter);
    }
}