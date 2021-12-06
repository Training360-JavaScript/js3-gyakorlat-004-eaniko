const checkVisa = (visaCardNumber) => {
	const visaPattern = /^4([0-9]{12}|[0-9]{15})$/;
	return visaCardNumber.match(visaPattern);
};

export default checkVisa;
