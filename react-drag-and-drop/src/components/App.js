import React, { useState } from 'react'
import { CHARACTERS } from '../config/charactersData'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import './App.css'

const App = () => {
  const [characters, setCharacters] = useState(CHARACTERS)
  function handleOnDragEnd(result) {
    const items = Array.from(characters)
    const [reorderedItem] = items.splice(result.source.index, 1)
    if (!result.destination) return
    items.splice(result.destination.index, 0, reorderedItem)

    setCharacters(items)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drag and Drop</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="droppable" direction="horizontal">
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className="wrapper"
              >
                {characters.map(({ id, name }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {(provided) => (
                        <div
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className={`box box${id}`}
                        >
                          {name}
                        </div>
                      )}
                    </Draggable>
                  )
                })}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </header>
    </div>
  )
}

export default App
