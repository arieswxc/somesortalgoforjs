/*
** 选择排序算法
** findMax：查找一个元素中最大的值
** 时间复杂度：O(n^2)
*/

function findMax(arr) {
    if(! arr instanceof Array) {
        console.log('第一个参数必须是数组')
    }
    var small = arr[0],
        smallIndex = 0;

    var i = 1,
        len = arr.length;
    if(len == 0) {
        return null;
    }

    if(len == 1) {
        return 0;
    }

    while( i < len) {
        if(arr[i] > small) {
            small = arr[i];
            smallIndex = i;
        }
        i++;
    }

    return smallIndex;
}

function selectionSort(arr) {
    var newArr = [];
    if(! arr instanceof Array) {
        console.log('第一个参数必须是数组')
    }

    var i =0,
        len = arr.length;
    while(i < len) {
        var maxIndex = findMax(arr);
        newArr.push(arr[maxIndex]);
        arr.splice(maxIndex, 1);

        i++;
    }
    return newArr;
}


exports.selectionSort = selectionSort;