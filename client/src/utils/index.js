const padTo2Digits = num => num.toString().padStart(2, '0');

module.exports = {
  format_date: date => {
    return `${new Date(date).getMonth() + 1}/${new Date(date).getDate()}/${new Date(
      date
    ).getFullYear()}`;
  },
  format_plural: (word, amount) => {
    if (amount !== 1) {
      return `${word}s`;
    }

    return word;
  },
	format_url: url => {
		return url
			.replace('http://', '')
			.replace('https://', '')
			.replace('www.', '')
			.split('/')[0]
			.split('?')[0];
	},
	format_runtime: time => {
		const minutes = time % 60;
		const hours = Math.floor(time / 60);
		if (hours >= 1)
			return `${padTo2Digits(hours)}h ${padTo2Digits(minutes)}m`;
		return `${minutes}m`;
	}
}