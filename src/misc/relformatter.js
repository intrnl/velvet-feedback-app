const SECOND = 1e3;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;
const WEEK = DAY * 7;
const MONTH = WEEK * 4;
const YEAR = MONTH * 12;

export function lookup (delta) {
	const abs = Math.abs(delta);

	if (abs < SECOND) {
		return [0, 'second'];
	}

	if (abs < MINUTE) {
		return [Math.trunc(delta / SECOND), 'second'];
	}

	if (abs < HOUR) {
		return [Math.trunc(delta / MINUTE), 'minute'];
	}

	if (abs < DAY) {
		return [Math.trunc(delta / HOUR), 'hour'];
	}

	if (abs < WEEK) {
		return [Math.trunc(delta / DAY), 'day'];
	}

	if (abs < MONTH) {
		return [Math.trunc(delta / WEEK), 'week'];
	}

	if (abs < YEAR) {
		return [Math.trunc(delta / MONTH), 'month'];
	}

	return [Math.trunc(delta / YEAR), 'year'];
}

export function delay (delta) {
	const abs = Math.abs(delta);

	if (abs < MINUTE) {
		return SECOND;
	}

	if (abs < HOUR) {
		return MINUTE;
	}

	if (abs < DAY) {
		return HOUR;
	}

	return DAY;
}

export function relformat (node, date) {
	const formatter = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });

	let timeout;

	const loop = () => {
		if (date == null) {
			node.textContent = 'N/A';
			node.removeAttribute('datetime');
			return;
		}

		const parsed = new Date(date);

		const time = parsed.getTime();
		const now = Date.now();

		const delta = time - now;

		const [value, unit] = lookup(delta);
		const text = formatter.format(value, unit);

		node.textContent = text;
		node.setAttribute('datetime', parsed.toISOString());

		timeout = setTimeout(loop, delay(delta));
	};

	loop();

	return {
		update ($date) {
			date = $date;

			clearTimeout(timeout);
			loop();
		},
		destroy () {
			clearTimeout(timeout);
		},
	};
}
