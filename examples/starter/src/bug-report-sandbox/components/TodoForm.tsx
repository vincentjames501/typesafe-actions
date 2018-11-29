import * as React from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../actions';

interface Props {
  addItem: (title: string) => void;
}

type State = {
  title: string;
};

class TodoForm extends React.Component<Props, State> {
  readonly state = { title: '' };

  handleTitleChange: React.ReactEventHandler<HTMLInputElement> = ev => {
    this.setState({ title: ev.currentTarget.value });
  };

  handleAddClick = () => {
    this.props.addItem(this.state.title);
    this.setState({ title: '' });
  };

  render() {
    const { title } = this.state;

    return (
      <form>
        <input
          style={{ width: 450 }}
          type="text"
          placeholder="Enter new item"
          value={title}
          onChange={this.handleTitleChange}
        />
        &nbsp;
        <button type="button" onClick={this.handleAddClick} disabled={!title}>
          Add
        </button>
      </form>
    );
  }
}

export default connect(
  null,
  {
    addItem: (title: string) => addTodo({ title }),
  }
)(TodoForm);