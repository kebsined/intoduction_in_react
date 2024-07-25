import './App.css';
import styles from './App.module.css';
import { useState } from 'react';

export default function App() {
	const [value, setValue] = useState('');
	const [list, setList] = useState([]);
	const [error, setError] = useState('');
	const [noItemsMessage, setNoItemsMEassage] = useState(true);

	const date = new Date();

	const onInputButtonClick = () => {
		const promptValue = prompt();
		if (promptValue === null) {
			return false;
		}

		if (promptValue.length <= 2) {
			setError('Значение должно содержать 3 и более символов!');
		} else if (promptValue.length >= 3) {
			setValue(promptValue);
			setError('');
		}
	};

	const isValidValue = () => {
		if (value.length <= 2) {
			return false;
		} else {
			return true;
		}
	};

	const onAddButtonClick = () => {
		const updatedList = [...list, { id: Date.now(), value }];
		setNoItemsMEassage(false);
		setList(updatedList);
		console.log(updatedList);
		setValue('');
	};

	return (
		<div className={styles.app}>
			<h1 className={styles.pageHeading}>Ввод значения</h1>

			<p className={styles.noMarginText}>
				Текущее значение <code>value</code>: "
				<output className={styles.currentValue}>{value}</output>"
			</p>

			{error !== '' && <div className={styles.error}>{error}</div>}
			<div className={styles.buttonsContainer}>
				<button className={styles.button} onClick={onInputButtonClick}>
					Ввести новое
				</button>
				<button
					className={styles.button}
					onClick={onAddButtonClick}
					disabled={!isValidValue()}
				>
					Добавить в список
				</button>
			</div>
			<div className={styles.listContainer}>
				<h2 className={styles.listHeading}>Список:</h2>
				{noItemsMessage && (
					<p className={styles.noMarginText}>Нет добавленных элементов</p>
				)}
				<ul className={styles.list}>
					{list.map(item => (
						<li className={styles.listItem} key={item.id}>
							{item.value +
								` - ${
									date.getDay() +
									`.` +
									date.getMonth() +
									`.` +
									date.getFullYear() +
									` ` +
									date.toISOString().substring(11, 19)
								}`}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
