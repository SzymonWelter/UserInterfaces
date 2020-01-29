import React from 'react';
import {Table} from 'src/js/components'
function PageTemplate(props) {
  return (
    <div className="page-wrapper page-wrapper--border-radius">
      <h2 className='page-header'>{props.title}</h2>
      <button className='add-new'>Add new</button>
      <Table data={data} />
    </div>
  );
}

const data = [{ "#": 1 ,ip: "172.98.11.2", hostname: 'hostname', mac: 'mac', gateaway: 'gateaway' }];

export default PageTemplate;
