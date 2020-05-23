function ExecuteScript(strId)
{
  switch (strId)
  {
      case "663SiGFpg24":
        Script1();
        break;
      case "64EZsij6ztC":
        Script2();
        break;
      case "5ZuwEPVbUCp":
        Script3();
        break;
      case "6q4M6S3Jf98":
        Script4();
        break;
      case "63Swpok8UAO":
        Script5();
        break;
      case "6GgveDPacLO":
        Script6();
        break;
      case "5vZtkJfg8hM":
        Script7();
        break;
  }
}

function Script1()
{
  $("#tab-customlink").hide();
}

function Script2()
{
  $("#tab-customlink").hide();
}

function Script3()
{
  var player = GetPlayer();
var email="nsdd_cne@ksmc.med.sa";
var subject=player.GetVar("Name");
var body_start="Dear Instructor,";
var mailto_link='mailto:'+email+'?subject='+subject+'&body='+body_start;
win=window.open(mailto_link,'emailWin');
}

function Script4()
{
  $("#tab-customlink").hide();
}

function Script5()
{
  var currentTime = new Date()
var month = currentTime.getMonth() + 1
var day = currentTime.getDate()
var year = currentTime.getFullYear()
var dateString=month + "/" + day + "/" + year

var player = GetPlayer();
player.SetVar("SystemDate",dateString);
}

function Script6()
{
  $("#tab-customlink").show();
}

function Script7()
{
  window.print();
}

