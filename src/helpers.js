import Rx from 'rxjs/Rx';

export function reduce(observables) {
  return (
    Object
      .keys(observables)
      .reduce((observable, key) =>
        observable.merge(observables[key].map(value => ({ [key]: value }))),
        Rx.Observable.empty()
      )
      .scan((a, b) => ({ ...a, ...b }))
  );
}

export function subscribe(component, observables) {
  return reduce(observables).subscribe(state => component.setState(state));
}
