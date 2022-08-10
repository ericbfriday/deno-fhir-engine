import { Patient as FhirPatient } from "fhir-r4b";

export const getExamplePatient = async function (): Promise<FhirPatient> {
  const response = await fetch("https://hapi.fhir.org/baseR4/Patient/1565928");
  console.log(response.status); // e.g. 200
  console.log(response.statusText); // e.g. "OK"
  const jsonData = await response.json();
  return jsonData;
};
