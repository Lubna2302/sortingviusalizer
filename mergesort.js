// Merge Sort
function Merge_Sort() {
    c_delay = 0;
    merge_sort(0, array_size - 1);
}

function merge_sort(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2);
        merge_sort(start, mid);
        merge_sort(mid + 1, end);
        merge(start, mid, end);
    }
}

function merge(start, mid, end) {
    var p = start, q = mid + 1;
    var Arr = [], k = 0;

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = bar_size[q++];
            div_update(bars[q - 1], bar_size[q - 1], "red"); // Color update
        } else if (q > end) {
            Arr[k++] = bar_size[p++];
            div_update(bars[p - 1], bar_size[p - 1], "red"); // Color update
        } else if (bar_size[p] < bar_size[q]) {
            Arr[k++] = bar_size[p++];
            div_update(bars[p - 1], bar_size[p - 1], "red"); // Color update
        } else {
            Arr[k++] = bar_size[q++];
            div_update(bars[q - 1], bar_size[q - 1], "red"); // Color update
        }
    }

    for (var i = 0; i < k; i++) {
        bar_size[start++] = Arr[i];
        div_update(bars[start - 1], bar_size[start - 1], "green"); // Color update
    }
}