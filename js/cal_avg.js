//calculate the avarage of each student

function count_score(dt)
{
   dt.subject.average = [];
   for(s in dt.subject.title)
   {
      dt.subject.average[s] = cal_sjAvg(dt.students, s);
   }
   for(i in dt.students)
   {
      dt.students[i].score.average = cal_stAvg(dt.students[i].score.raw);
   }
}

function cal_sjAvg(st, s)
{
   var cnt = 0;
   for(i in st) cnt += st[i].score.raw[s];
   return cnt/st.length;
}

function cal_stAvg(arr)
{
   var cnt = 0;
   for(i in arr)
   {
      cnt += arr[i];
   }
   return cnt/arr.length;
}
