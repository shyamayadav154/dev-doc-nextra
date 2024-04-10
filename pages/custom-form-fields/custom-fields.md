
# Custom Fields in existing form

Feature to add custom fields to to existing form. e.g: Add custom fields to the summary report form.

#### CRUD Operations - Resolvers

- **Create/Update** - Create/Update of custom field submitted data will be handled in the resolver of updated form with uuid of the updated form data.

- **Read** - submitted custom field data is fetch with the help of uuid of the form data in the resolver and send

- **Delete** - not ready

Note:

> Serialization and de-serialization is handled in resolver in both the cases.

