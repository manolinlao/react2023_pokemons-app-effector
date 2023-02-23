import { useStore } from 'effector-react';
import { useEffect } from 'react';
import { $counterStore, decrement, increment, resetCounter } from '../store/counterStore';
import { Button } from 'primereact/button';
import { Panel } from 'primereact/panel';

import './counter.css';

export const CounterApp = () => {
  const value = useStore($counterStore);

  useEffect(() => {
    //resetCounter();
  }, []);
  return (
    <>
      <h4 className='title'>CounterApp</h4>
      <div>value: {value}</div>
      <div>
        <span className='p-buttonset'>
          <Button label='+' onClick={increment} size='sm' />
          <Button label='-' onClick={decrement} size='sm' />
          <Button label='reset' icon='pi pi-times' onClick={resetCounter} size='sm' />
        </span>
      </div>
      <div>
        <Panel header='Named ClassName' className='myPanel'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum.
          </p>
        </Panel>
      </div>
    </>
  );
};
