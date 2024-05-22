# role

This record represents a period of time of one person with one employer, identified by their role.

| name        | type     | description                      |
|-------------|----------|----------------------------------|
| id          | int      | auto-increment primary key       | 
| user_id     | int      | foreign key to `rmi_user`        |
| employer_id | int      | foreign key to `employer`        |
| name        | varchar  | name of the role                 |
| started_at  | date     | Date the user attained the title |
| stopped_at  | date     | Date the user lost the title     |