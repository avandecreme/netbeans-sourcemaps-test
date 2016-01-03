/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

Sort = {};
(function (Sort) {

    Sort.quickSort = quickSort;

    function quickSort(array) {
        function doQuickSort(array, start, end) {
            if (start >= end - 1) {
                return;
            }
            var pivotIdx = getPivotIdx(array, start, end);
            var pivot = array[pivotIdx];
            swap(array, start, pivotIdx);
            var cursor = start;
            for (var i = start + 1; i < end; i++) {
                if (array[i] < pivot) {
                    cursor++;
                    swap(array, i, cursor);
                }
            }
            swap(array, start, cursor);
            doQuickSort(array, start, cursor);
            doQuickSort(array, cursor + 1, end);
        }

        function getPivotIdx(array, start, end) {
            return Math.floor((start + end) / 2);
        }

        doQuickSort(array, 0, array.length);
    }

    function swap(array, index1, index2) {
        var backup = array[index1];
        array[index1] = array[index2];
        array[index2] = backup;
    }

})(Sort);
