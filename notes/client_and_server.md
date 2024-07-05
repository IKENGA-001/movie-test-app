# Client and Server

nextjs supports server side code(built with nodejs) and client side rendering with react components. RSC (React Server Component) are also supported in nextjs

## Server Components
this are components built and rendered on the server and sent to the browser/client as static html
- rendered on the server
- support direct call of server actions 
- support async await
- supports direct call to nextjs server functions like cookies and headers
- no support for hooks and event handlers

## Client Components 
these are components rendered on the client/browser. A client is marked with `"use client"` directive at the top of the file or in the sub tree of another client component
- no support for async await or any nextjs server functions
- supports hooks and event handlers 
- cannot parent a server component unless its passed as props 