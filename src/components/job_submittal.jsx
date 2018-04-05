import React, { Component } from 'react';
import { GetMSAPath } from './get_msa_path.jsx'
import { ChooseGeneticCode } from './choose_genetic_code.jsx'
import { ChooseAnalysisType } from './choose_analysis_type.jsx'


/**
 * JobSubmittal takes an MSA (tree optional?) and some parameters and returns a JSON object "jobInfo" for consumption.
 * This component should recieve an "onSubmit" function as a prop which will likely be different for the GUI and
 * datamonkey.org.
 * This component will eventually be moved to hyphy-vision and be imported.
 */
class JobSubmittal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobInfo: {
        method: this.props.method,
        geneticCode: '1',
        // Note that initial/default value for other job info fields (i.e. the analysis type for RELAX) are set by
        // the those specific field/button components (ChooseAnalysisType for RELAX) when those components mount.
        // This was done to allow for initial/default value for the fields to be set without creating an entry
        // in the state of methods that don't need/use the info.
      }
    };
  }

  updateJobInfo = (key, value) => {
    /**
     * This method is passed down to the individual fields/button components so that they can
     * set the jobInfo property of the JobSubmittal components state.
     */
    this.state.jobInfo[key] = value
  }
  
  render() {
    const self = this;
    const methodNameandDescription = {
      absrel: {name: 'aBSREL', description: 'An adaptive branch-site REL test for episodic diversification'},
      busted: {name: 'BUSTED', description: 'Branch-site Unrestricted Statistical Test for Episodic Diversification'},
      relax: {name: 'RELAX', description: 'Detect relaxed selection in a codon-based phylogenetic framework'}
    }

    return (
      <div>
        <h1>{methodNameandDescription[self.props.method].name}</h1>
        <p>{methodNameandDescription[self.props.method].description}</p>
        { self.props.platform === 'electron' ? <GetMSAPath updateJobInfo={self.updateJobInfo} /> : null } 
        <ChooseGeneticCode updateJobInfo={self.updateJobInfo} />
        {self.props.method === 'relax' ? <ChooseAnalysisType updateJobInfo={self.updateJobInfo} /> : null}
        <button onClick={() => self.props.onSubmit(self.state.jobInfo)}>Submit Analysis</button>
      </div>
    );
  }
}

module.exports.JobSubmittal = JobSubmittal;
