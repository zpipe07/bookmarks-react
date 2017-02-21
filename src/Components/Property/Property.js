import React, { Component } from 'react';

import PropertyEditForm from '../PropertyEditForm/PropertyEditForm';
import PropertyContent from '../PropertyContent/PropertyContent';

import './Property.css';

class Property extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isEditing: false,
      isDeleted: false,
    };
  }

  toggleIsEditing = (isEditing) => {
    this.setState({
      isEditing,
    });
  }

  onEditSubmit = (title, url) => {
    this.props.onEditSubmit(
      this.props.id,
      title,
      url
    );
  }

  onDelete() {
    this.props.onDelete(this.props.id);
  }

  render() {
    return (
      <li className={"properties__item " + (this.state.isDeleted ? "properties__item--deleted" : "")}>
        {
          this.state.isEditing
          ?
          <PropertyEditForm title={this.props.title}
                            url={this.props.url}
                            onCancelClick={this.toggleIsEditing}
                            onEditSubmit={this.onEditSubmit} />
          :
          <PropertyContent title={this.props.title}
                           url={this.props.url}
                           isNew={this.props.isNew}
                           toggleIsEditing={this.toggleIsEditing}
                           onDelete={this.onDelete.bind(this)} />
        }
      </li>
    );
  }
}

Property.propTypes = {
  title: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  isNew: React.PropTypes.bool,
  onDelete: React.PropTypes.func.isRequired,
  onEditSubmit: React.PropTypes.func.isRequired,
};

export default Property;