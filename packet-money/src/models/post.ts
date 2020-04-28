export class Post {
    collapsed: boolean = false;
    constructor(obj?){
        Object.assign(this, obj)
    }
    toggleContent(){
        this.collapsed = !this.collapsed;
    }
    

}
