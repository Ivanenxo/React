import { FilterButton, FiltersButtonContainer, FiltersContainer, ItemLeft } from "./TodoFilters.components"

const TodoFilters = ({ 
                        total,
                        activeFilter,
                        showAllTodos,
                        showActiveTodos,
                        showCompletedTodos,
                        handleClearComplete
                     }) => {
    return (
        <FiltersContainer>
            <ItemLeft total={total} />
            <FiltersButtonContainer>
                <FilterButton action={() => showAllTodos()} active={activeFilter} filter="All" />
                <FilterButton action={() => showActiveTodos()} active={activeFilter} filter="Activas" />
                <FilterButton action={() => showCompletedTodos()} active={activeFilter} filter="Completadas" />
            </FiltersButtonContainer>

            <button onClick={() => handleClearComplete()} className="text-gray-400 hover:text-whithe cursor-pointer transition-all duration-300 ease-in">
                Eliminar Completas
            </button>
        </FiltersContainer>
    )
}

export { TodoFilters }