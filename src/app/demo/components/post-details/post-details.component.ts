import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/services/post.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.scss']
})
export class PostDetailsComponent implements OnInit, OnDestroy {
	post?: any;
	loading: boolean =  false;

	postSubscription!: Subscription;

	constructor(
		private readonly _activatedRoute: ActivatedRoute,
		private readonly _router: Router,
		private readonly _postService: PostService,
	) {

	}

	ngOnInit(): void {
		this._activatedRoute.params.subscribe((param) => {
			this.loading = true;

			this.postSubscription =  this._postService.getOne(param['id']).subscribe({
				next: (post) => {
					this.post = post;
					this.loading = false;
				},
				error: (error) => {
					if (error.status === 404) {
						this._router.navigate(['/404']);
					}
				},
				complete: () => {
					console.log("COMPLETE");
				}
			})
		})
	}

	ngOnDestroy(): void {
		this.postSubscription.unsubscribe();
	}

}
