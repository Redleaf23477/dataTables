//javascript for making a table from input
//dt refers to data_transfer, a json object
/*
   {
      "subject":["name", "name", "name", ... ],
      "students":[
         {
            "intro":{"name":"..."},
            "score":{"raw":[number, number, number, ...], "average":number}
         },
         ...
      ]
   }
*/

function mk_table(dt, table_id, display_id)
{
   var mytable = "<table id='"+table_id+"' class='display' cellspacing='0' width='100%'>";
   mytable += "<thead>" + mk_thead(dt) + "</thead>";
   mytable += "<tbody>" + mk_body(dt) + "</tbody>";
   mytable += "<tfoot>" + mk_tfoot(dt) + "</tfoot>";
   document.getElementById(display_id).innerHTML = mytable;
}
function mk_thead(dt)
{
   var mythead = "";
   mythead += "<tr>";
   mythead += "<th>Name</th>";
   for(i in dt.subject.title)
   {
      mythead += "<th>"+dt.subject.title[i]+"</th>";
   }
   mythead += "<th>"+"average"+"</th>";
   mythead += "</tr>";
   return mythead;
}
function mk_tfoot(dt)
{
   var mytfoot = "";
   mytfoot += "<tr>";
   mytfoot += "<th>average</th>";
   for(i in dt.subject.title)
   {
      mytfoot += "<th>"+dt.subject.average[i]+"</th>";
   }
   mytfoot += "<th></th>";
   mytfoot += "</tr>";
   return mytfoot;
}
function mk_body(dt)
{
   var mybody = "";
   for(s in dt.students)
   {
      mybody += "<tr>";
      mybody += "<td>"+dt.students[s].intro.name+"</td>";
      for(i in dt.students)
      {
         mybody += "<td>"+dt.students[s].score.raw[i]+"</td>";
      }
      mybody += "<td>"+dt.students[s].score.average+"</td>";
      mybody += "</tr>";
   }
   return mybody;
}
