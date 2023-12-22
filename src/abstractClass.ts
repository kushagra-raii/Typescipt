abstract class TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string
    ){}

    abstract getSepia(): void;

    getReelTime():number{
        return 5;
    }
}


// const kr = new TakePhoto("Front","moody");

class Instagram extends TakePhoto {
    constructor(
        public cameraMode: string,
        public filter: string,
        public burst: number
    ){
        super(cameraMode,filter);
        this.burst = burst;
    }

    getSepia(): void {
        console.log("sepia");
        
    }
}

export {}