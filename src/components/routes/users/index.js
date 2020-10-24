import React, { useEffect } from 'react'

import { fetchUsers } from 'services/users'

export function Users() {
    useEffect(() => {
        fetchUsers()
            .then((data) => {
                console.log(data)
            })
    })

    return (
        <div>Users Page</div>
    )
}
