
 function calculateTimeByTimeZone(timezoneOffset) {
  // Şu anki tarih ve saat objesini oluştur
  const currentDate = new Date();
  

  // Zaman dilimi ofsetini ayarla (dakika cinsinden)
  const offsetInMinutes = timezoneOffset / 60;
  currentDate.setMinutes(currentDate.getMinutes() + offsetInMinutes);

  // Saat, dakika ve saniyeleri al
  const hours = currentDate.getUTCHours();
  const minutes = currentDate.getUTCMinutes();
  const seconds = currentDate.getUTCSeconds();

  // Saati, dakikayı ve saniyeyi string olarak formatla
  const formattedTime = `${hours
    .toString()
    .padStart(2, '0')}:${minutes
    .toString()
    .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return formattedTime;
}
  
  // ülke kodunu ülke adına çeviren fonksiyon
  function convertCountryCode(country,) {
    let regionNames = new Intl.DisplayNames(["en"], { type: "region" });
    // ülke kodunu alına bu "Intl.DisplayNames" örneği kullanarak ülke adına dönderir
    //console.log(regionNames.of(country));
    return regionNames.of(country);
  }
  
  export {  convertCountryCode,  calculateTimeByTimeZone};
  /*
      * Intl.DisplayNames: Javascriptte uluslararası dil ve bölge adlarına 
      * çevirmek için kullanılan bir API'dir
  
      * Intl:Internationalization
      * DisplayNames
  */




 



