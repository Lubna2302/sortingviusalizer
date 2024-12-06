function Insertion_Sort() {
  
			c_delay = 0;

			for (var i = 1; i < array_size; i++) {
				var key = bar_size[i];
				var j = i - 1;

				div_update(bars[i], bar_size[i], "yellow"); // Color update

				while (j >= 0 && bar_size[j] > key) {
					div_update(bars[j], bar_size[j], "red"); // Color update
					div_update(bars[j + 1], bar_size[j + 1], "red"); // Color update

					bar_size[j + 1] = bar_size[j];

					div_update(bars[j], bar_size[j], "red"); // Height update
					div_update(bars[j + 1], bar_size[j + 1], "red"); // Height update

					div_update(bars[j], bar_size[j], "grey"); // Color update

					j = j - 1;
				}
				bar_size[j + 1] = key;
				div_update(bars[j + 1], bar_size[j + 1], "green"); // Color update
	}
	for (let t = 0; t < bars.length; t++){
		div_update(bars[t], bar_size[t], "green");
	}
			div_update(bars[0], bar_size[0], "green");
		}