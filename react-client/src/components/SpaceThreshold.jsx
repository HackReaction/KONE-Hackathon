import React from 'react';
import {
  Table,
  TableBody,
  TableFooter,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

const styles = {
  above: {
    color: 'rgba(217,83,79,1)',
    fontWeight: 'bold'
  },
  below: {
    color: 'rgba(92,184,92,1)',
    fontWeight: 'bold'
  },
  text: {
    fontSize: '125%'
  },
  mainHeader: {
    fontSize: '125%',
    textAlign: 'center' 
  }
};

const tableData = [
  {
    country: 'USA',
    threshold: 88,
  },
  {
    country: 'Norway',
    threshold: 100,
  },
  {
    country: 'China',
    threshold: 71,
  },
  {
    country: 'India',
    threshold: 71,
  },
  {
    country: 'Saudi Arabia',
    threshold: 26,
  },
];

class SpaceThreshold extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixedHeader: true,
      fixedFooter: true,
      stripedRows: false,
      showRowHover: false,
      selectable: false,
      enableSelectAll: false,
      deselectOnClickaway: true
    };
  }
  
  render() {
    return (
      <div>
        <Table
          height={this.state.height}
          fixedHeader={this.state.fixedHeader}
          fixedFooter={this.state.fixedFooter}
          selectable={this.state.selectable}
        >
          <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={this.state.enableSelectAll}
          >
            <TableRow>
              <TableHeaderColumn colSpan="2" style={styles.mainHeader}>
                Space Threshold by Country
              </TableHeaderColumn>
            </TableRow>
            <TableRow>
              <TableHeaderColumn style={styles.text}>Country</TableHeaderColumn>
              <TableHeaderColumn style={styles.text}>Occupancy Threshold</TableHeaderColumn>
            </TableRow>
          </TableHeader>
          <TableBody
            displayRowCheckbox={false}
            deselectOnClickaway={this.state.deselectOnClickaway}
            showRowHover={this.state.showRowHover}
            stripedRows={this.state.stripedRows}
          >
            {tableData.map( (row, index) => (
              <TableRow key={index} style={this.props.percentOccupied >= row.threshold ? styles.above : styles.below}>
                <TableRowColumn style={styles.text}>{row.country}</TableRowColumn>
                <TableRowColumn style={styles.text}>{row.threshold + '%'}</TableRowColumn>
              </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default SpaceThreshold;