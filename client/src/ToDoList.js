import React, {Component} from 'react'

class ToDoList extends Component{
    render()
    {
        var forEachItem = this.props.toDoArr.map(
            eachItem => {
                return(
                    <div>
                        <p>{eachItem.username} needs to {eachItem.todo}.</p>
                        <p> Is it done: {eachItem.isDone}</p>
                        <hr/>
                    </div>
                )
            }
        )
        return(
            <div>
                <h1>{forEachItem}</h1>

            </div>
        );
    }
}

export default ToDoList;