import React, { Component } from 'react';


class AdvancedFubarOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdvanced: false
    }
  }

  componentWillMount() {
    // Set the numRateClasses of the parent JobSubmittal component to 2 (the default) when ChooseAnalysisType mounts.
    this.props.updateJobInfo('numRateClasses', 2)
  }

  handleChange = (event) => {
    this.props.updateJobInfo('numRateClasses', event.target.value)
  }

  render() {
    const self = this;
    return (
      <div>Advanced Options Coming Soon</div>
            );
  }
}

module.exports.AdvancedFubarOptions = AdvancedFubarOptions;

/*
 * Here's the code from datamonkey-js
<div>
        <button
          className="btn"
          type="button"
          onClick={self.toggleShow}
          style={{display: "block", verticalAlign: "middle"}}
        >
          Advanced options
          {" "}<span
            style={{verticalAlign: "middle"}}
            className={"glyphicon glyphicon-menu-"+(self.state.showAdvanced ? "down" : "right")}
            aria-hidden="true"
          />
        </button>

        <div style={{display: self.state.showAdvanced ? "block" : "none"}}>
          <div className="row">
            <div className="col-md-6">
              <div>
                <label>Number of grid points</label>
                <input id="number_of_grid_points" className="form-control" type="number" defaultValue="20" step="1" min="5" max="50" />
              </div>

              <div>
                <label>Number of MCMC chains</label>
                <input id="number_of_mcmc_chains" className="form-control" type="number" defaultValue="5" step="1" min="2" max="20" />
              </div>

              <div>
                <label>Length of each chain</label>
                <input
                  id="length_of_each_chain"
                  className="form-control"
                  type="number"
                  step="500000"
                  value={this.state.length_of_each_chain}
                  onChange={this.onLengthChange}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div>
                <label>Use this many samples as burn-in</label>
                <input
                  id="number_of_burn_in_samples"
                  className="form-control"
                  type="number"
                  step="500000"
                  value={this.state.number_of_burn_in_samples}
                  onChange={this.onBurninChange}
                />
              </div>

              <div>
                <label>How many samples should be drawn from each chain?</label>
                <input
                  id="number_of_samples"
                  className="form-control"
                  type="number"
                  step="10"
                  value={this.state.number_of_samples}
                  onChange={this.onSampleChange}
                />
              </div>

              <div>
                <label>Concentration parameter of the Dirichlet prior</label>
                <input id="concentration_of_dirichlet_prior" className="form-control" type="number" defaultValue=".5" step="1" min="0.001" max="1" />
              </div>
            </div>
          </div>
        </div>
      </div>
*/
