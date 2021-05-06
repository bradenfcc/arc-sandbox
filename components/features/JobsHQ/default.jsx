import React from 'react';
import PropTypes from 'prop-types';
import ScriptTag from 'react-script-tag';
import Static from 'fusion:static'

const JobsHQ = (props) => {

  const { jobshqId, toggleJobsWidget } = props.customFields;

  return toggleJobsWidget ? (
      <Static id={`uniqueKey-${props.id}`}>
        <div id={'jobsHQ-hotjobs-desktop'} >hello</div>
        <script>
          loadJobsHQ.desktop('jobsHQ-hotjobs-desktop', { jobshqId });
        </script>
      </Static>
  ) : '';
};

JobsHQ.label = "JobsHQ - Custom Block";

JobsHQ.propTypes = {
  customFields: PropTypes.shape({
    jobshqId: PropTypes.string.tag({
      jobshqId: 'JobsHQ ID',
    }),
    toggleJobsWidget: PropTypes.boolean.tag({
      toggleJobsWidget: 'Show Widget',
    }),
  }),
};

export default JobsHQ;
