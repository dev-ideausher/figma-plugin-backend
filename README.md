### GET Route Documentation

#### Retrieve All Cards

Endpoint:

```
GET /v1/cards/all
```

Description: Returns a paginated list of cards based on optional filters and pagination parameters.

Parameters:

- `page` (optional, default: 1) - Page number for pagination.
- `limit` (optional, default: 10) - Number of items per page.
- `sortBy` (optional, default: createdAt) - Field to sort by (e.g., `createdAt`, `title`).
- `sortOrder` (optional, default: desc) - Sorting order (`asc` for ascending, `desc` for descending).
- `title` (optional) - Search term for filtering cards by title using RegExp.
- `keywords` (optional) - Comma-separated list of keywords for filtering cards by tags.

Request Example:

```
GET /v1/cards/all?page=1&limit=10&sortBy=createdAt&sortOrder=desc&title=searchTerm&keywords=Tag1,Tag2
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
      "createdAt": "2024-06-21T12:00:00.000Z",
      "updatedAt": "2024-06-21T12:00:00.000Z"
    }
  ],
  "totalPages": 3,
  "totalResults": 25
}
```

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
- `keywords` (required): Array of keywords/tags associated with the card.
- `figmaLink` (optional): Link to the Figma design for the card.
- `image` (required): Image file (JPG or PNG format) to upload to AWS S3.

**Request Example:**

```json
{
  "title": "Card Title",
  "keywords": ["Tag1", "Tag2", "Tag3"],
  "figmaLink": "https://figma.com",
  "image": "<file data>"
}
```

**Response Example (Success - HTTP 201 Created):**

```json
{
  "_id": "5678",
  "title": "Card Title",
  "keywords": ["Tag1", "Tag2", "Tag3"],
  "figmaLink": "https://figma.com",
  "imageUrl": "https://example-bucket.s3.amazonaws.com/public/cards/card-image.jpg"
}
```

**Response Example (Error - HTTP 400 Bad Request):**

```json
{
  "error": "Validation Error: Title is required."
}
```
