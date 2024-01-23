import { Observable } from 'rxjs';

export interface UseCase<P, T> {
  execute(params: P): Observable<T>;
}