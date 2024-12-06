function Bubble_Sort() {

    document.querySelector(
			".sort_data"
		).textContent = `"Time_Worst"="O(N^2)";
    "Time_Average"="Θ(N^2)";
   "Time_Best":"Ω(N)";
   "Space_Worst"=O(1)";`;
    c_delay = 0;
    
    for(var i=0;i<array_size-1;i++)
{
    for(var j=0;j<array_size-i-1;j++)
    {
        div_update(bars[j],bar_size[j],"yellow");//Color update

        if(bar_size[j]>bar_size[j+1])
        {
            div_update(bars[j],bar_size[j], "red");//Color update
            div_update(bars[j+1],bar_size[j+1], "red");//Color update

            var temp=bar_size[j];
            bar_size[j]=bar_size[j+1];
            bar_size[j+1]=temp;

            div_update(bars[j],bar_size[j], "red");//Height update
            div_update(bars[j+1],bar_size[j+1], "red");//Height update
        }
        div_update(bars[j],bar_size[j], "grey");//Color updat
    }
    div_update(bars[j],bar_size[j], "green");//Color update
    }
    div_update(bars[0], bar_size[0], 'green');
}