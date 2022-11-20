export const fetchDCDatabase = async () => {
  const shelterData = fetch(
    "https://maps2.dcgis.dc.gov/dcgis/rest/services/DCGIS_DATA/Public_Service_WebMercator/MapServer/25/query?where=1%3D1&outFields=*&outSR=4326&f=json"
  );
  const data = await shelterData.json();
  console.log(data);
  return data;
};
