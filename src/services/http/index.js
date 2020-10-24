import axios from 'axios'

import { DEFAULT_HOST } from 'constants/hosts'

class Request {
    constructor({
        baseHost = '/',
    } = { }) {
        this.http = axios.create({
            baseURL: baseHost,
        })
    }

    get(route = '/', {
        headers = { },
        params = { },
    } = { }) {
        return this.http({
            url: route,
            params,
            headers: {
                ...headers,
            },
        }).then((response) => response.data)
    }
}

export const http = new Request({ baseHost: DEFAULT_HOST })
