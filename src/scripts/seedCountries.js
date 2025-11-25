// src/scripts/seedCountries.js
import { db } from "../firebase";
import { writeBatch, doc, serverTimestamp } from "firebase/firestore";
import countryData from "../data/countryData"; // countryData.js가 default export일 때

export async function seedCountries() {
  const batch = writeBatch(db);
  let count = 0;

  for (const [iso, data] of Object.entries(countryData || {})) {
    if (!iso || typeof data !== "object") continue;

    const ref = doc(db, "countries", iso);

    const payload = {
      nameKo: data.nameKo ?? data.name ?? "",
      nameEn: data.nameEn ?? "",
      capital: data.capital ?? "",
      language: Array.isArray(data.language)
        ? data.language
        : data.language
        ? [data.language]
        : [],
      currency: data.currency ?? "",
      currencyCode: data.currencyCode ?? "",
      timezone: data.timezone ?? "",
      continent: data.continent ?? "",
      tips: Array.isArray(data.tips) ? data.tips : [],
      updatedAt: serverTimestamp(),
    };

    batch.set(ref, payload, { merge: true });
    count++;
  }

  await batch.commit();
  console.log(`✅ Firestore countries 시드 완료: ${count}개`);
}
