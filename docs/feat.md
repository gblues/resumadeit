# feat

A user did something while in a role at a company

| name        | type    | description                                    |
|-------------|---------|------------------------------------------------|
| user_id     | int     | foreign key to `rmi_user`                      |
| role_id     | int     | role user was in                               |
| description | varchar | A plaintext description of what the person did |