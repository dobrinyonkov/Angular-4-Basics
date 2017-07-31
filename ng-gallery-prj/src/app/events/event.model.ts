export class Event {
    public name: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public location: string;

    constructor (name: string, description: string, startDate: string, endDate: string, location: string) {
        this.name = name;
        this.description = description;
        this.startDate = startDate;
        this.endDate = endDate;
        this.location = location;
    }

}
