const checkIp = (ipAdress) => {
	const ipPattern = /^(?!0)(?!.*\.$)((1?\d?\d|25[0-5]|2[0-4]\d)(\.|$)){4}$/;
	return ipAdress.match(ipPattern);
};

export default check ipAdress
