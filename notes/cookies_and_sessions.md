## Cookies and Sessions

a session is a term that refers to an authorized active user.
A user session is present when a user is logged in 
We use cookies to create sessions 


## Cookies

cookies are a key-value pair, stored in the browser(client) and sent alongside every request
- they can be modified on the client or server

### Managing cookies in NEXT.js

we use the `cookies` function to access cookies, this function return:
- get: for getting a cookie by its name
- set: for setting a cookie
- delete: for deleting a cookie
- has: to check if a cookie is present

```js
    import {cookies} from 'next/headers';
    const{
        get, set, has, delete
    } = cookies()
```