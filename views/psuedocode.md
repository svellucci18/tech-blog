# VIEWS

GET - "/" - home

---

GET - "/login" - login form

POST - "/api/users/login" - Authenticate existing user

---

GET - "/signup" - registration form

POST - "/api/users" - Create User

---

GET - "/dashboard" - User Dashboard
    - Query for current user id

---

GET - "/dashboard/new" - Create Post View

POST - "/api/posts" - Create Post API

---

GET - "/dashboard/edit/:postId" - Edit Post View

PUT - "/api/posts/:postId" - Edit Post API

DELETE - "/api/posts/:postId" - Delete Post API

---

GET - "/post/:postId" - View a single post

POST - "/api/comments" - Create a comment for a post



