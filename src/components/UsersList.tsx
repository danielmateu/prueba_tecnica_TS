import { User } from "../types"
import { useState } from 'react';

interface Props {
    users: User[]
    showColors: boolean
}

export const UsersList = ({ users, showColors }: Props) => {





    return (
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>País</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((user, index) => {
                        const backgroundColor = index % 2 === 0 ? '#333' : '#666'
                        const color = showColors ? backgroundColor : 'transparent'
                        return (
                            (
                                // Aplicar el estilo de fondo de color si showColors es true
                                <tr key={user.login.uuid}
                                    style={{ backgroundColor: color }}>
                                    {/* <tr key={user.login.uuid}> */}
                                    <td><img src={user.picture.thumbnail} alt="" /></td>
                                    <td>{user.name.first}</td>
                                    <td>{user.name.last}</td>
                                    <td>{user.location.country}</td>
                                    <td><button>Borrar</button></td>
                                </tr>
                            )
                        )
                    }
                    )
                }
            </tbody>
        </table>

    )
}
