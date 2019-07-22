export class Post {
    collapsed: boolean = false;
    constructor(public title:string, public content:string, public bounty:number){
    
    }
    toggleContent(){
        this.collapsed = !this.collapsed;
    }
    

}
