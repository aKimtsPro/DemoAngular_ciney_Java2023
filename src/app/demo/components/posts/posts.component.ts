import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
	posts?: any;
	loading: boolean = false;

	constructor(
		private readonly _postService: PostService
	){}

	ngOnInit(): void {
		this.loading = true;

		this._postService.getAll().subscribe({
			// Succès de la requête
			next: (posts) => {
				this.posts = posts;
				this.loading = false;
			}
		})
	}

	refreshPosts(): void {
		this.loading = true;

		this._postService.getAll().subscribe({
			// Succès de la requête
			next: (posts) => {
				this.posts = posts;
				this.loading = false;
			}
		})
	}
}
