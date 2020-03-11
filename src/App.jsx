import React from 'react';
import TodoList from './TodoList'
import Header from './Header'

class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], text: '' };
  }

  componentDidMount() {
    this.callApi(this.state.text).then((faqs) => {
      this.setState({ items: faqs });
    });
  }

  callApi = async (query) => {
    const response = await fetch(query ? `/faqs/?q=${encodeURIComponent(query)}` : '/faqs/');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body.FAQS;
  };

  render() {
    return (
      <>
        <Header text="Frequently Asked Questions" />
        <main>
          <form onSubmit={this.handleSubmit}>
            <label htmlFor="new-todo">
              What is your question about?
          </label>
            <br></br>
            <input
              id="new-todo"
              onChange={this.handleChange}
              value={this.state.text}
            />
            <button>
              Search
            </button>
          </form>
          <TodoList items={{ faqs: this.state.items }} />
        </main>
        <footer>We give you cookies. Please accept the cookies. Thx.</footer>
      </>
    );
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.callApi(this.state.text).then((faqs) => {
      if (faqs.length) {
        this.setState({ items: faqs });
      } else {
        this.setState({ items: [{ question: "Did your search return any results?", answer: "No" }] });
      }
    });
  }
}

export default TodoApp;