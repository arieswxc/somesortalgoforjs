/*
** 快速排序算法
** 时间平均复杂度：O(n*log(n))
** 最遭情况： O(n^2)
*/

function qkSort(arr) {
    if(! arr instanceof Array) {
        console.log('请输入数组');
        return;
    }

    var i = 0,
        mid, 
        leftArr =[],
        rightArr = [];

    if(arr.length <=1) {
        return arr;
    }

    mid = arr.splice(0, 1);

    while(i < arr.length) {
        if(arr[i] < mid) {
            leftArr.push(arr[i])
        } else {
            rightArr.push(arr[i])
        }
        i++;
    }

    return qkSort(leftArr).concat(mid, qkSort(rightArr));
}

exports.qkSort = qkSort;

