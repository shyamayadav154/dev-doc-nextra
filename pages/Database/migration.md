
### One-time setup
[Original source](https://yerado.slack.com/archives/C03AV8U5RUH/p1706587192323809)

1. **Check out to latest ui-core:**
    ```bash
    git checkout ui-core && git pull origin ui-core
    ```

2. **Update your `prisma/.env` to have the following contents:**
    ```bash
    DB_URL=postgres://lief_admin:password@localhost:5432
    COMPANY_DB_URL=${DB_URL}/lief_care_yerado
    USERS_DB_URL=${DB_URL}/users
    ```

3. **Restore back-ups to your local**
    Ensure that you have three empty databases: `devdb`, `lief_care_yerado`, and `users` owned by `lief_admin`
    - `devdb`: shadow database that prisma uses to verify there's no potential data loss
    - `lief_care_yerado`: database with all company-specific data
    - `users`: database with all users of the system

4. **Run the following (the .sql files have been attached):**\
    [lief_dev_company_latest.sql](https://files.slack.com/files-pri/T03AEL3M55J-F06G6SZNQ59/download/lief_dev_company_latest.sql?origin_team=T03AEL3M55J) 
    [lief_dev_users_latest.sql](https://files.slack.com/files-pri/T03AEL3M55J-F06FSE1UHM5/download/lief_dev_users_latest.sql?origin_team=T03AEL3M55J)
    ```bash
    psql -U lief_admin -d users < lief_dev_users_latest.sql
    psql -U lief_admin -d lief_care_yerado < lief_dev_company_latest.sql
    ```


### After every change in prisma's data model

- Run:
    ```bash
    npm run postinstall
    ```

### Every time you want to generate a new migration without applying it

- Run:
    ```bash
    npm run dev:generate_migrations
    ```

### Every time you want to generate a new migration and apply it

- Run:
    ```bash
    npm run dev:generate_migrations && npm run dev:deploy_migrations
    ```

### To deploy all unapplied migrations to your local database

- Run:
    ```bash
    npm run dev:deploy_migrations
    ```
