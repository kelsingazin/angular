import {Component, ContentChild, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onAdd: EventEmitter<Post> = new EventEmitter<Post>()
  @ViewChild('titleInput', {static: false}) inputTitleRef:ElementRef
  @ViewChild('textInput', {static:false}) inputTextRef: ElementRef
  @ContentChild('info') infoRef: ElementRef

  title = ''
  text =''


  constructor() { }

  ngOnInit(): void {
    console.log(this.infoRef.nativeElement)
  }

  addPost(){
    if(this.text.trim() && this.title.trim()){
      const post:Post = {
        title: this.title,
        text: this.text
      }
      this.onAdd.emit(post)
      this.title = this.text = ''
    }
  }

  focusTitle(){
    this.inputTitleRef.nativeElement.focus()
  }

  focusText(){
    this.inputTextRef.nativeElement.focus()
  }

}
