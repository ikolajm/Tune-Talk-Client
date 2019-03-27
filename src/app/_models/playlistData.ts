export class PlaylistData {

    
    id: number;
    owner: string;
    thumbnail: string;
    name: string;
    updatedAt: string;
    userId: number;
    songs: any[];
    results: object;
    constructor(options: any){
        this.id = options['id']
        this.owner = options['owner']
        this.thumbnail = options['thumbnail']
        this.name = options['name']
        this.updatedAt = options['updatedAt']
        this.userId = options['userId']
        this.songs = options['songs']
    }
}