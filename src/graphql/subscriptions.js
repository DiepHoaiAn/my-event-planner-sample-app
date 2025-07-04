/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateRoom = /* GraphQL */ `
  subscription OnCreateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onCreateRoom(filter: $filter) {
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
export const onUpdateRoom = /* GraphQL */ `
  subscription OnUpdateRoom($filter: ModelSubscriptionRoomFilterInput) {
    onUpdateRoom(filter: $filter) {
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
export const onDeleteRoom = /* GraphQL */ `
  subscription OnDeleteRoom($filter: ModelSubscriptionRoomFilterInput) {
    onDeleteRoom(filter: $filter) {
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
export const onCreateEvent = /* GraphQL */ `
  subscription OnCreateEvent($filter: ModelSubscriptionEventFilterInput) {
    onCreateEvent(filter: $filter) {
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
export const onUpdateEvent = /* GraphQL */ `
  subscription OnUpdateEvent($filter: ModelSubscriptionEventFilterInput) {
    onUpdateEvent(filter: $filter) {
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
export const onDeleteEvent = /* GraphQL */ `
  subscription OnDeleteEvent($filter: ModelSubscriptionEventFilterInput) {
    onDeleteEvent(filter: $filter) {
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
