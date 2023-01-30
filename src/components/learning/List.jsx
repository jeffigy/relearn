import React from 'react'

export const List = () => {
    const names = [{ name: 'john doe', id: '123', }, { name: 'jane doe', id: '1234' }];
    return <>
        {names.map((name) => {
            return (
                <h2 key={name.id}>{name.name}</h2>
            )
        })
        }
    </>

}
export default List;
