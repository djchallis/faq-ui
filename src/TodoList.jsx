import React from 'react';

class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.items.faqs.map((item, index) => (
                    <li key={index}><b>Question: </b>{item.question}<br></br><b>Answer: </b>{item.answer}<br></br><br></br></li>
                ))}
            </ul>
        );
    }
}

export default TodoList;
