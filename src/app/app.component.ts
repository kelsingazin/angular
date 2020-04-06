import {Component} from '@angular/core';
export interface Post {
  title: string,
  text: string,
  id?: number
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  posts: Post[] = [
    {title: 'Want to learn', text:'I am learning', id:1},
    {title: 'Next block', text:'About directives', id:2},
    {title: 'Tomorrow', text:'I will study', id:3},
  ]

  updatePosts(post: Post) {
    this.posts.unshift(post)
    console.log('Post', post)
  }

  deletePost(id:number){
    this.posts = this.posts.filter(p =>p.id !== id)
  }
}


