import { http } from './http'

import { GET_USERS } from 'constants/endpoints'

export function fetchUsers() {
    return http.get(GET_USERS)
}