import { BehaviorSubject } from "rxjs";

const currentUserSubject = new BehaviorSubject({ user: undefined });

export const authenticationService = {
  login,
  logout,
  currentUser: currentUserSubject.asObservable(),
  get currentUserValue() {
    return currentUserSubject.value;
  }
};

function login(username, password) {
  if (userDataAreIncorrect(username, password)) {
    return { authenticated: false };
  }
  currentUserSubject.next({ user: username });
  return { authenticated: true, user: username };
}

function userDataAreIncorrect(username, password) {
  return username !== "admin" || password !== "admin";
}

function logout() {
  currentUserSubject.next({ user: undefined });
}
