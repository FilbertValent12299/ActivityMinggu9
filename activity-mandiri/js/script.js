function fn_ValForm() {

   var sMsg = "";
   let email = document.getElementById("email").value;
   let polaEmail= /^[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9]@[a-z0-9][a-z0-9_\.-]{0,}[a-z0-9][\.][a-z0-9]{2,4}$/;

   if (document.getElementById("name").value == "") {
      sMsg += "\n* Anda belum mengisikan nama";
   }
   if (email == "") {
      sMsg += "\n* Anda belum mengisikan email";
   }else if(!polaEmail.test(email)){
      sMsg += "\n* Format email anda salah tolong diperbaiki nggih";
   }
   if (document.getElementById("message").value == "") {
      sMsg += "\n* Anda belum mengisikan pesan";
   }

   if (sMsg != "") {
      alert("Peringatan:\n" + sMsg);
      return false;
   } else { 
      return true;
   }
}