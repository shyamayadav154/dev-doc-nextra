# Custom Form

Feature to add custom form to the application. Custom form is a form which can be created by the user and can be used to store the data.
The form can be created by the user by adding the fields to the form.
The form can be used to store the data in the database.

## Types of form

![type-of-form](https://i.imgur.com/gECMge1.png)

### 1. Single Data Form (e.g Profile)

Forms which can only store a single data. For example, a profile form can only store a single profile data.

#### CRUD Operations - Resolvers

- **Create** - Create resolver update the data with with `location` and `custom form id`.
- **Update** - Update resolver updates the data where the `location` and `custom form id` matches.
- **Read** - Read resolver reads the data where the location and custom form id matches.
- **Delete** - not ready

### 2. Multi Data Form (e.g Summary Reports)

Forms which can store multiple data. For example, a summary report form can store multiple data and shows the
data in form of table

#### CRUD Operations - Resolvers

- **Create** - Create resolver update the data with `cyp/home/hrEmployee` id and `custom form id`.
- **Update** - Update resolver updates the data where field form id matches.
- **Read**
  - **Multiple** -_for table_: fetches the data where `cyp/home/hrEmployee` id and `custom form id` matches
  - **Single** - _for form_: fetches the data where filed form id matches
- **Delete** - not ready

Note: 
> Serialization and de-serialization is handled in resolver in both the cases.

