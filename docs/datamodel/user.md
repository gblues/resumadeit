# Users

This table holds basic user details that may appear on a resume:
- name
- address
- e-mail address

We don't store a hashed password because we're not going to implement auth, instead relying on an auth provider.

# Columns

| name     | type    | description                                |
|----------|---------|--------------------------------------------|
| id       | int     | unique identifier (auto-increment integer) |
| name     | varchar | Person's name                              |
| email    | varchar | e-mail address                             |
| address  | varchar | snailmail address                          |
| phone    | varchar | phone number                               |