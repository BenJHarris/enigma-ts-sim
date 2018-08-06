export class Reflector {
  private mappings: string;

  constructor(mappings: string) {
    this.mappings = mappings;
  }

  public reflect(char: string): string {
    const c = char.charCodeAt(0) - 65;
    return this.mappings[c];
  }
}