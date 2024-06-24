### GET Route Documentation

#### Retrieve All Cards

Endpoint:

```
GET /v1/cards/all
```

Description: Returns a paginated list of cards based on optional filters and pagination parameters. Supports filtering
by title and/or tags using regular expression matching.

Parameters:

- `page` (optional, default: 1) - Page number for pagination.
- `limit` (optional, default: 10) - Number of items per page.
- `sortBy` (optional, default: createdAt) - Field to sort by (e.g., `createdAt`, `title`).
- `sortOrder` (optional, default: desc) - Sorting order (`asc` for ascending, `desc` for descending).
- `searchKeyword` (optional) - Search term for filtering cards by title or tags using RegExp.
- Additional filters: Any other custom filters can be passed, e.g., `platform`

Request Example:

```
GET /v1/cards/all?page=1&limit=10&sortBy=createdAt&sortOrder=desc&searchKeyword=searchTerm
```

Response Example:

```json
{
  "page": 1,
  "limit": 10,
  "results": [
    {
      "_id": "1234",
      "title": "Card Title",
      "keywords": ["Tag1", "Tag2"],
      "platform": "app"
    }
  ],
  "totalPages": 3,
  "totalResults": 25
}
```

### Notes:

- If `searchKeyword` is provided, the API will perform a case-insensitive regular expression search across both the
  `title` and `keywords` fields.
- The `results` array contains the paginated list of cards matching the criteria, with each card object including `_id`,
  `id`, `title`, `keywords`, and `platform` fields.
- `totalPages` indicates the total number of pages available based on the pagination settings and total results.
- `totalResults` specifies the total number of cards that match the query criteria.

### POST Route Documentation

#### Create a New Card

Endpoint:

```
POST /v1/cards/create
```

Description: Creates a new card with the provided data.

Request Body:

**Request Body:**

- `title` (required): Title of the card.
- `id` (required): Id of the card.
- `keywords` (required)(String): Array of keywords/tags associated with the card **( NOTE: THE ARRAY SHOULD BE
  STRINGIFIED! )**.
- `figmaLink` (required): Link to the Figma design for the card.
- `image` (required): Image file (JPG or PNG format) to upload to AWS S3.
- `platform` (required): Platform Name (e.g. - Mobile App, Web etc.).

**Request Example:**

```json
{
  "id": "1103",
  "title": "Card Title",
  "keywords": ["Tag1", "Tag2", "Tag3"],
  "figmaLink": "https://figma.com",
  "image": "<file data>",
  "platform": "Mobile App"
}
```

**Response Example (Success - HTTP 201 Created):**

```json
{
  "_id": "5678",
  "id": "1103",
  "title": "Card Title",
  "keywords": ["Tag1", "Tag2", "Tag3"],
  "figmaLink": "https://figma.com",
  "imageUrl": "https://example-bucket.s3.amazonaws.com/public/cards/card-image.jpg",
  "platform": "Mobile App"
}
```

**Response Example (Error - HTTP 400 Bad Request):**

```json
{
  "error": "Validation Error: Title is required."
}
```
