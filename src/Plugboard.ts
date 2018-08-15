/**
 * Represents the plugboard in the engima machine.
 * The plugboard allows a user to configure static mappings of letters to letters.
 */
export class Plugboard {

    // Maps characters based on index
    private mapping: number[] = [...Array(26).keys()];

    /**
     * Construct a new plugboard based on character mapping passed in.
     * @param charMap An array of tuples containing character mappings in the form number -> number.
     */
    constructor(charMap: [number, number][]) {
        for (let mapping of charMap) {
            this.updateMapping(mapping);
        }
    }

    /**
     * Set a mapping by passing in a tuple of numbers representing characters.
     * @param mapping A tuple of two numbers each representing a character.
     */
    private updateMapping(mapping: [number, number]): void {
        this.mapping[mapping[0]] = mapping[1];
        this.mapping[mapping[1]] = mapping[0];
    }

    /**
     * Get the forwards mapping for a letter.
     * @param letter The letter to check represented as a number.
     */
    public getForwards(letter: number): number {
        return this.mapping[letter];
    }

    /**
     * Get the reverse mapping for a letter.
     * @param letter The letter to check represented as a number.
     */
    public getReverse(letter: number): number {
        return this.mapping.indexOf(letter);
    }
}