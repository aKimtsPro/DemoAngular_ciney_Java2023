import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, tap, throwError } from 'rxjs';

export type Post = {
	id: number;
	userId: number;
	title: string;
	body: string;
}

@Injectable()
export class PostService {
  constructor(
		// Forward Ref
		// forwardRef
		private readonly _httpClient: HttpClient,
	) {}

	getAll() {
		return this._httpClient.get<Post[]>('https://jsonplaceholder.typicode.com/posts?_limit=10')
			.pipe(
				// Juste pour l'affichage du process courant
				tap(console.log),
				// Modifier le résultat de l'observable précédent
				map((posts: Post[]) => {
					const newPost = posts.map((post: Post) => {
						return { ...post, title: post.title.toUpperCase() }
					});
					return newPost;
				}),
				// Juste pour l'affichage du process courant
				tap(console.log),
				// Gestion de l'erreur
				catchError((error) => {
					return throwError(() => new Error("ERREUR"))
				})
			);
	}

	getOne(id: number) {
		return this._httpClient.get('https://jsonplaceholder.typicode.com/posts/'+id);
	}

	create(data: any) {
		return this._httpClient.post('https://jsonplaceholder.typicode.com/posts/', data);
	}
}
