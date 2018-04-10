import React, { Component } from 'react';


class AdvancedFubarOptions extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAdvanced: false,
      message: null,
      numGridPoints: 20,
      numMCMCChains: 5,
      chainLength: 2000000,//length_of_each_chain:
      burnInSamples: 1000000,//number_of_burn_in_samples
      samplesFromEachChain: 100,//number_of_samples
      concDirichletPrior: 0.5
    };
  }

  componentDidMount() {
    // Set the advanced fubar options of the parent JobSubmittal component to the defaults when AdvancedFubarOptions mounts.
    this.props.updateJobInfo('numGridPoints', 20);
    this.props.updateJobInfo('numMCMCChains', 5);
    this.props.updateJobInfo('chainLength', 2000000);
    this.props.updateJobInfo('burnInSamples', 1000000);
    this.props.updateJobInfo('samplesFromEachChain', 100);
    this.props.updateJobInfo('concDirichletPrior', 0.5);
  }

  handleChange = (event) => {
    //this.props.updateJobInfo('numRateClasses', event.target.value)
  }

  toggleShow = () => {
    var self = this;
    var showAdvanced = !self.state.showAdvanced;
    self.setState({
      showAdvanced: showAdvanced
    });
  }

  onLengthChange = (event) => {
    var value = event.target.value;
    if(value < 500000){
      this.setState({message: "Please enter a length that is at least 500000."});
    } else if (value > 50000000) {
      this.setState({message: "Please enter a length that is no more than 50000000."});
    } else {
      this.setState({
        length_of_each_chain: value,
        message: null
      });
    }
  }

  onBurninChange = (event) => {
    var value = event.target.value,
      length = this.state.length_of_each_chain;
    if(value < Math.ceil(.05*length)){
      this.setState({message: "Please enter a burn in that is at least 5% of the chain length."});
    } else if (value > Math.ceil(.95*length)) {
      this.setState({message: "Please enter a burn in that is no more than 95% of the chain length."});
    } else {
      this.setState({
        number_of_burn_in_samples: value,
        message: null
      });
    }
  }

  onSampleChange = (event) => {
    console.log('sampleChange');
    var value = event.target.value;
    if(value < 50){
      this.setState({message: "Please enter an amount of samples to be drawn that is more than 50."});
    } else if (value > this.state.length_of_each_chain-this.state.number_of_burn_in_samples) {
      this.setState({message: "Please enter an amount of samples that is no more than the chain length minus the amount of burn in."});
    } else {
      this.setState({
        number_of_samples: value,
        message: null
      });
    }
  }

  render() {
    const self = this;
    return (
      <div>
        <div>NOTE: The advanced options are not yet functional. The default values are used for now.</div>
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
                  value={this.state.samplesFromEachChain}
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
    );
  }
}

module.exports.AdvancedFubarOptions = AdvancedFubarOptions;
