
function binarySort(list, item) {
	console.log('binarySort')
	if(!(list instanceof Array)) {
		console.log('第一个参数必须是数组')
	}
	var start = 0,
		end = list.length,
		guess;

	while(start <= end) {
		var mid = Math.floor((start + end)/2);
		guess = list[mid]
		if(item == guess) {
			return mid;
		} else if(item > guess) {
			start = mid + 1;
		} else {
			end = mid - 1;
		}
	}

	return null;

}


exports.binarySort = binarySort;