import { SortBy, User } from "../types.d"


interface Props {
    users: User[] | undefined
    showColors: boolean
    deleteUser: (id: string) => void
    changeSorting: (sort: SortBy) => () => void
}

export const UsersList = ({ changeSorting, users, showColors, deleteUser }: Props) => {

    return (
        <table>
            <thead>
                <tr>
                    <th>Imagen</th>
                    <th className="pointer" onClick={changeSorting(SortBy.NAME)}
                    >Nombre</th>
                    <th className="pointer" onClick={changeSorting(SortBy.LAST)}
                    >Apellido</th>
                    <th className="pointer" onClick={changeSorting(SortBy.COUNTRY)}
                    >País</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    users?.map((user, index) => {
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
                                    <td><button onClick={() => deleteUser(user.login.uuid)}>Borrar</button></td>
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
