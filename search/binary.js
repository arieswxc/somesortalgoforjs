/*
** 二分查找法
** 前提： list 为有序数组
** 时间复杂度：O(log(n))
*/

function binarySearch(list, item) {
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


exports.binarySearch = binarySearch;

// function upside(arr) {
// 	var newArr = [];
// 	var len = arr.length,
// 		i = len-1;

// 	if(len = 0) {
// 		return [];
// 	}


// 	while(i >=0) {
// 		newArr.unshift(arr.shift());
// 		i--;
// 	}

// 	return newArr;
// }