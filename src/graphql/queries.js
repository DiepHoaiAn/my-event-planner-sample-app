/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getRoom = /* GraphQL */ `
  query GetRoom($id: ID!) {
    getRoom(id: $id) {
      id
      name
      capacity
      bookings {
        datetime_start
        datetime_end
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listRooms = /* GraphQL */ `
  query ListRooms(
    $filter: ModelRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        capacity
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getEvent = /* GraphQL */ `
  query GetEvent($id: ID!) {
    getEvent(id: $id) {
      id
      name
      description
      event_owner
      room_id
      image_file_name
      event_datetime_start
      event_datetime_end
      event_duration
      total_tickets
      tickets
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listEvents = /* GraphQL */ `
  query ListEvents(
    $filter: ModelEventFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        event_owner
        room_id
        image_file_name
        event_datetime_start
        event_datetime_end
        event_duration
        total_tickets
        tickets
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
