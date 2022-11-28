import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState, useAppDispatch } from '../../store';
import { fetchData } from '../../store/slices/list';
import Loader from '../Loader/Loader';

import { LoadStatuses } from '../../api/types';

import styles from './List.module.css';

const List = () => {
	const dispatch = useAppDispatch();
	const data = useSelector((state: RootState) => state.list.data);
	const status = useSelector((state: RootState) => state.list.status);

	const reload = () => {
		dispatch(fetchData());
	};

	useEffect(() => {
		dispatch(fetchData());
	}, []);

	return (
		<div>
			<h1 className={styles.header}>Изучайте актуальные темы</h1>
			{status === LoadStatuses.Loading && <Loader />}
			{status === LoadStatuses.Error && (
				<div className={styles['error-block']}>
					<span>Не удалось загрузить информацию.</span>
					<button
						className={styles['reload-button']}
						onClick={reload}>
                        Перезагрузить
					</button>
				</div>
			)}
			{status === LoadStatuses.Succeeded &&
                data.length &&
                data.map((item) => (
                	<div className={styles.block} key={item.direction.id}>
                		<div className={styles.info}>
                			<b className={styles.title}>
                				{item.direction.title}
                			</b>
                			<span>{item.groups.length}</span>
                		</div>
                		<div className={styles.image}></div>
                	</div>
                ))}
		</div>
	);
};

export default List;
