// import classes from './ListWorkers.module.css';
// import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getWorker, getWorkersQuick } from '../../store/actions/workers.action';
import MiniCardWorker from '../MiniCardWorker/MiniCardWorker';

export default function ListWorkers() {
  const [workersSort, setWorkersSort] = useState();
  const { workers } = useSelector((state) => state)
  const dispatch = useDispatch()

  console.log('workers from redux ===>', workers);

  useEffect(() => {
    dispatch(getWorkersQuick())
  }, [dispatch])
  const { auth: { id } } = useSelector((state) => state);

  useEffect(() => {
    dispatch(getWorker({ id }))
  }, [id])

  useEffect(() => {
    setWorkersSort(workers.sort((a, b) => b.id - a.id))
  }, [workers])

  return (
    <>

      {workersSort && workersSort
        .filter(item => item?.companies.length > 0)
        .map((worker) => <MiniCardWorker email={worker.email} comp={worker?.companies} portfolio={worker.imgs} avatar={worker.avatar[0]} name={worker.name} id={worker.id} key={worker.id} {...worker} />)}
      {/* {
        workers && workers.map((worker) => (
          <div key={worker.id}>
            <h1>{worker.email}</h1>
          </div>
        ))
      } */}

    </>
  )
}
