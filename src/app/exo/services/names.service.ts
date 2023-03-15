import { Injectable } from '@angular/core';

@Injectable()
export class NamesService {
	private _names : string[] = ['John', 'Jane'];

  constructor() { }

	public get names() : string[] {
		return this._names;
	}

	addName(name: string) {
		this._names.push(name);
	}
}
