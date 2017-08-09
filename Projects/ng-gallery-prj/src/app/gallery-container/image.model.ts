export class Image {
    public name: string;
    public description: string;
    public imagePath: string;
    public category: string;

    constructor (name: string, description: string, imagePath: string, category: string) {
        this.name = name;
        this.description = description;
        this.imagePath = imagePath;
        this.category = category;
    }
}
