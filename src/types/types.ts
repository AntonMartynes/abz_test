export interface User {
  "id": string,
  "name": string,
  "email": string,
  "phone": string,
  "position": string,
  "position_id": string,
  "registration_timestamp": number,
  "photo": string,
}

export interface apiResponse {
  "success": boolean,
  "page": number,
  "total_pages": number,
  "total_users": number,
  "count": number,
  "links": {
    "next_url": string,
    "prev_url": null | string,
  },
  "users": User[],
}