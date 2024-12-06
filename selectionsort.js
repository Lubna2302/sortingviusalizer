function Selection_Sort() {
     c_delay = 0;
    
    for (var i = 0; i < array_size - 1; i++) {
        var min_index = i;

        div_update(bars[i], bar_size[i], "yellow"); // Color update

        for (var j = i + 1; j < array_size; j++) {
            div_update(bars[j], bar_size[j], "yellow"); // Color update

            if (bar_size[j] < bar_size[min_index]) {
                if (min_index !== i) {
                    div_update(bars[min_index], bar_size[min_index], "grey"); // Color update
                }
                min_index = j;
                div_update(bars[min_index], bar_size[min_index], "red"); // Color update
            } else {
                div_update(bars[j], bar_size[j], "grey"); // Color update
            }
        }

        if (min_index !== i) {
            var temp = bar_size[min_index];
            bar_size[min_index] = bar_size[i];
            bar_size[i] = temp;

            div_update(bars[min_index], bar_size[min_index], "red"); // Height update
            div_update(bars[i], bar_size[i], "red"); // Height update
            div_update(bars[min_index], bar_size[min_index], "grey"); // Color update
        }
        div_update(bars[i], bar_size[i], "green"); // Color update
    }
    div_update(bars[array_size - 1], bar_size[array_size - 1], "green"); // Color update
}