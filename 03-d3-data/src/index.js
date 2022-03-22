import * as d3 from 'd3';
import { csv, json } from 'd3-fetch'
let User=[];
let Post=[];
let PostUser=[];

Promise.all([
    json('https://jsonplaceholder.typicode.com/users'),
    json('https://jsonplaceholder.typicode.com/posts')
  ]).then(function ([users, posts]) {

    /* console.log(users, posts); */

     let UserInfo=users.map((el,i)=>{

        console.log(el.name, el.address.city, el.company.name, el.id)
    let UserId = el.id;
    console.log(UserId);
    let UserPost=posts.filter((el,i)=>{

        return el.userId==UserId;
    })

    console.log(UserPost);

    let PostTitre = UserPost.map((el,i)=>{return el.title})

    let InfoObject = {
        utilisateur: d.username,
        ville: d.address.city,
        compagnie: d.company.name,
        posts_titre: titrePosts
    }
    console.log(CompagnyUser,"comap");
    console.log(PostTitre,"ok");

    return InfoObject;

     })
});






// filtrer les données selon l'énoncer puit les push dans le tableau d'object exmeple persone 1 avec ces post assosicé 

  
