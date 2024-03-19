<script runat="server">
Platform.Load("core", "1.1.1")
HTTPHeader.SetValue("Access-Control-Allow-Origin", "*")

var DE_NAME = "NOME_DA_SUA_DATA_EXTENSION" /* DE PARA ARMAZENAR O PAYLOAD */

function getUrlVars(url){
  var vars = [], hash;
  var hashes = url.slice(url.indexOf('?') + 1).split('&');
  for (var i = 0; i < hashes.length; i++){
    hash = hashes[i].split('=');
    vars.push(hash[0]);
    vars[hash[0]] = hash[1];
  }
  return vars;
}

var jsonpost = Platform.Request.GetPostData();
var json = Platform.Function.ParseJSON(jsonpost);

var contactKey = getUrlVars(json.url)["ContactKey"]
var addDE = DataExtension.Init(DE_NAME);
addDE.Rows.Add({
  event_id: json.event_id,
  event_type: json.event_type,
  datetime: json.datetime,
  url: json.url,
  bitlink: json.bitlink,
  country: json.country,
  referrer: json.referrer,
  device_type: json.device_type,
  contact_key: contactKey

})
</script>
