import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { fetchProperty } from '../actions';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';class PropertyDetail extends React.Component {
  state = {
    open: true,
  };

  componentWillMount() {
    this.props.dispatch(fetchProperty(this.props.match.params.id));
  }

  handleClose = () => {
    this.setState({open: false});
    this.props.history.goBack();
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary
        onClick={this.handleClose}
      />
    ];
    return (
      <div>
        <Dialog
          title="Dialog With Actions"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <div>
            <p><span style={{display: 'inline-block', minWidth: '200px'}}>PropID</span><span>{this.props.currentProperty.PropID}</span></p>
            <p><span style={{display: 'inline-block', minWidth: '200px'}}>PropZoningCd</span><span>{this.props.currentProperty.PropZoningCd}</span></p>
            <p><span style={{display: 'inline-block', minWidth: '200px'}}>PropNbhdNm</span><span>{this.props.currentProperty.PropNbhdNm}</span></p>
            <p><span style={{display: 'inline-block', minWidth: '200px'}}>TotalMarketVal</span><span>{this.props.currentProperty.TotalMarketVal}</span></p>
          </div>
        </Dialog>
      </div>
    );
  }
}

PropertyDetail.propTypes = {
  currentProperty: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    currentProperty: state.property.currentProperty
  };
};

export default connect(
  mapStateToProps
)(PropertyDetail);
