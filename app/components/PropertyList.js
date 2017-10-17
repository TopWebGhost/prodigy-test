import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProperties } from '../actions';
import CircularProgress from 'material-ui/CircularProgress';

import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class PropertyList extends React.Component {

  componentWillMount() {
    const { fetched } = this.props.data;
    if (!fetched) {
      this.props.dispatch(fetchProperties());
    }
  }

  render() {
    const { properties, fetching } = this.props.data;
    return (
      <div>
        {fetching ?
          <div style={{width: '100%', textAlign: 'center'}}>
            <CircularProgress />
          </div> :
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>PropID</TableHeaderColumn>
                <TableHeaderColumn>OwnerName</TableHeaderColumn>
                <TableHeaderColumn>DBAName</TableHeaderColumn>
                <TableHeaderColumn>LegalDescription</TableHeaderColumn>
                <TableHeaderColumn>SitusStreet</TableHeaderColumn>
              </TableRow>
            </TableHeader>

            <TableBody>
              {properties.map(property => (
                <TableRow key={property.PropID}>
                  <TableRowColumn><Link to={`/${property.PropID}`}>{property.PropID}</Link></TableRowColumn>
                  <TableRowColumn>{property.OwnerName}</TableRowColumn>
                  <TableRowColumn>{property.DBAName}</TableRowColumn>
                  <TableRowColumn>{property.LegalDescription}</TableRowColumn>
                  <TableRowColumn>{property.SitusStreet}</TableRowColumn>
                </TableRow>
              ))}
            </TableBody> :
          </Table>
        }
      </div>
    );
  }
}

PropertyList.propTypes = {
  data: PropTypes.object,
  dispatch: PropTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    data: state.property
  };
};

export default connect(
  mapStateToProps
)(PropertyList);
