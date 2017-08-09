import { Image } from "../gallery-container/image.model";

export class Profile {
    public name: string;
    public userName: string;
    public email: string;
    public imagePath: string;
    public personalQuote: string;
    public profileGallary: Image[];
    public favourites: Image[];
    public files: number;
    public usedMemory: number;
    public spendAmount: number;


    constructor(name: string, userName: string, email: string, imagePath: string, personalQuote: string, 
                files: number, usedMemory: number, spendAmount: number) {
        this.name = name;
        this.userName = userName;
        this.email = email;
        this.imagePath = imagePath;
        this.personalQuote = personalQuote;
        this.profileGallary = [];
        this.favourites = [];
        this.files = files;
        this.usedMemory = usedMemory;
        this.spendAmount = spendAmount;
    }
}
