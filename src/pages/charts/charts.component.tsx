import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import { StatsState } from '../../reducers/stats.reducer';
import { AppState } from '../../store/app.store';

import { StatsActions } from '../../actions/stats.actions';

import { StatsItemComponent } from '../../components/stats-item/stats-item.component';

import './charts.scss';

class Charts extends React.PureComponent<StatsActions & StatsState> {
  componentDidMount (): void {
    this.props.getStatsInfo();
  }
  
  render (): JSX.Element {
    return (
      <div className='bi-charts g-flex-column'>
        <div className='bi-charts__header g-flex-column__item-fixed'>
          <div className='bi-charts__title'>
            Charts
          </div>
        </div>
        
          { this.props.info ? this.renderBody() : null }
      </div>
    );
  }
  
  private renderBody (): JSX.Element {
    return (
      <div className='bi-charts__body g-flex-column g-flex-column__item'>
        <div className='bi-charts__stats g-flex-column__item-fixed'>
          {
            this.props.info.map((stats, index) => {
              return <StatsItemComponent key={ index } title={ stats.title } value={ stats.value }/>;
            })
          }
        </div>
        
        <div className='bi-charts__charts g-flex-column__item'>
          <Link to={'/charts/total'} className='bi-charts__chart'>
            Total coins per date
          </Link>
        </div>
      </div>
    );
  }
}

function mapStateToProps (state: AppState): StatsState {
  return state.stats;
}

function mapDispatchToProps (dispatch: any): any {
  return bindActionCreators(StatsActions, dispatch);
}

export const ChartsComponent = connect(mapStateToProps, mapDispatchToProps)(Charts);