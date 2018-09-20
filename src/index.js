// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
	
	let bank = {};
	if (currency < 0) {
		return bank;
	} else if (currency >= 10000) {
		return  {error: "You are rich, my friend! We don't have so much coins for exchange"};
	}    

	
	const money = ['50', '25', '10', '5', '1'];
	for (var i = 0; i < money.length; i++) {
		var count = 0;
		while (currency >= money[i]) {
			currency -= money[i];
			count++;
		}
		if (count > 0) {
			switch(money[i]) {
				case '50': bank.H = count;  break;
				case '25': bank.Q = count;  break;
				case '10': bank.D = count;  break;
				case '5': bank.N = count;  break;
				case '1': bank.P = count;  break;
				default: break;
			}
		}
	}
	return bank;
}

//return for(var p in bank) => (p + ' : ' +bank[p]);