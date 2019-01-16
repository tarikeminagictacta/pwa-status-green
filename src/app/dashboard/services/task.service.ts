import { Injectable } from '@angular/core';
import { Observable, range, timer } from 'rxjs';
import {
  map,
  toArray,
  switchMap
} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks(params: TaskParams): Observable<Task[]> {
    return timer(2000)
      .pipe(
        switchMap(() => {
          return range(params.skip + 1, params.take)
            .pipe(
              map(x => {
                const task: Task = {
                  id: x,
                  name: `Task ${x}`
                };
                return task;
              }),
              toArray()
            );
        })
      );
  }
}

export interface TaskParams {
  skip: number;
  take: number;
}

export interface Task {
  id: number;
  name: string;
  pressed?: boolean;
}
