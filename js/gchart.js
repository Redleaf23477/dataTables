//functions related to select bars and charts

function add_select_student(starr, select_id)
{
   var myselect = "";
   for(s in starr)
   {
      myselect += "<option value = " + s + ">" + starr[s].intro.name + "</option>";
   }
   document.getElementById(select_id).innerHTML = myselect;
}

function mk_chart(dt, stid, chart_id)
{
   var data = new google.visualization.DataTable();
   data.addColumn("string", "Test");
   data.addColumn("number", "Score");
   data.addColumn("number", "ClassAvg");
   var rows = [];
   for(t in dt.subject.title)
   {
      rows[t] = [dt.subject.title[t], dt.students[stid].score.raw[t], dt.subject.average[t]];
   }
   data.addRows(rows);
   var options = {
      title: dt.students[stid].intro.name,
      seriesType: "line",
      series: {0:{type:"bars"}}
   };
   var chart = new google.visualization.ComboChart(document.getElementById(chart_id));
   chart.draw(data, options);
}
