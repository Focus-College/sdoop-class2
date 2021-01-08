class Article {

    public title:string;
    
    public publicationDate:string;
    
    public category:string;
    
    public author?:User;
    
    public body:string;
    
    public description:string;
    
    public price:string;

    public ratings:Rating[] = [];

    get rating():number{
        
        if(!this.ratings.length){
            return 0;
        }
        
        return this.ratings.reduce((total,rating) => total + rating.value, 0) / this.ratings.length;

    }

}


class Rating {

    constructor( public user:User, public article:Article, public value:number ){
        article.ratings.push(this);
    }

}


class User {

    constructor( public name:string ){

    }

}

class Category {

    title: string;

    description: string;

    genre:string;

}

const gerald = new User("Gerald");
const article = new Article();
const rating1 = new Rating( gerald, article, 3 );
const rating2 = new Rating( gerald, article, 1 );
const rating3 = new Rating( gerald, article, 4 );
const rating4 = new Rating( gerald, article, 5 );


console.log( article, article.rating );