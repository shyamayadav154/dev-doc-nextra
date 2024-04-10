# Custom Form Data Model

## Rough sketch
![digram-discussion](https://i.imgur.com/PFDXH0U.png)

## ERD
![erd-diagr](https://i.imgur.com/pqfvP3l.png)

## Data Model prism

```prisma

model CustomForm {
  id String @id @default(uuid())


  // string or enum
  location  String?   @unique // can be any thing unique
  sections  CustomFormSections[]

  formShape Json  // TODO: add form shape to handle table fields through frontend
  formUi    Json

  access           String[]
  // hasMultipleEntry Boolean
  filledCustomForm SubmittedCustomForm[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model CustomFormSections {
  id String @id @default(uuid())

  access       String[]
  // order        Int
  customForm   CustomForm? @relation(fields: [customFormId], references: [id])
  customFormId String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}

model SubmittedCustomForm {
  id String @id @default(uuid())

  location String?

  cypId String?
  cyp   Cyp?    @relation(fields: [cypId], references: [id])

  homeId String?
  home   Home?   @relation(fields: [homeId], references: [id])

  hrEmployeeId String?
  hrEmployee   HrEmployee? @relation(fields: [hrEmployeeId], references: [id])


  customForm   CustomForm? @relation(fields: [customFormId], references: [id])
  customFormId String?

  customFieldValues CustomFieldValue[]

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  // if removes this than might be able to handle this in resolver
  // @@unique([cypId, customFormId])
  // @@unique([homeId, customFormId])
  // @@unique([hrEmployeeId, customFormId])
  @@unique([location, customFormId])
}

enum FieldType {
  text
  number
  date
  time
  datetime
  textarea
  select
  radio
  checkbox
  file
  signoff
  alerts
  hrEmployee
  contact
}

model CustomFieldValue {
  id String @id @default(uuid())

  // identifier
  // slug String
  name String

  type  FieldType
  value String

  submittedCustomForm   SubmittedCustomForm? @relation(fields: [submittedCustomFormId], references: [id])
  submittedCustomFormId String?
  // TODO: another fields like signoff and alerts

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt

  @@unique([name, submittedCustomFormId])
}
```




