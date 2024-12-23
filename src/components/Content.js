import ItemList from './ItemList';

const Content = ({ items, handleCheck, handleDelete }) => {

    return (
        <main>
            {items.length ? (
                <ItemList
                    items={items}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ) : (<p style={{ fontSize: "1.2rem" }}>Your list is empty</p>)
            }
        </main >
    )
}

export default Content
