import { useCallback, useEffect, useMemo } from "react";
import worldMap from "../assets/world_clickable_with_names.svg?raw";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function WorldMap() {
  const navigate = useNavigate();

  const handleClick = useCallback(
    (e) => {
      const target = e.target.closest("path");
      if (!target?.id) return;
      navigate(`/country/${target.id}`);
    },
    [navigate]
  );

  const handleMouseOver = useCallback((e) => {
    if (e.target.tagName === "path" && e.target.getAttribute("name")) {
      const existingTitle = e.target.querySelector("title");
      if (!existingTitle) {
        const title = document.createElementNS(
          "http://www.w3.org/2000/svg",
          "title"
        );
        title.textContent = e.target.getAttribute("name");
        e.target.appendChild(title);
      }
      e.target.style.cursor = "pointer";
    }
  }, []);

  // 대륙별 국가 ID
  const asiaCountries = useMemo(
    () => [/* 생략: 아시아 국가 코드 배열 */"CN","CN1", // China
      "JP", "JP1", "JP2", // Japan
      "KR", // South Korea
      "IN", // India
      "TH", // Thailand
      "VN", // Vietnam
      "MY", "MY1", // Malaysia
      "ID", "ID1","ID2","ID3","ID4","ID5","ID6","ID7","ID8","ID9","ID10","ID11","ID12", // Indonesia
      "PH", "PH1", "PH2", "PH3", "PH4", "PH5", "PH6",// Philippines
      "PK", // Pakistan
      "BD", // Bangladesh
      "SA", // Saudi Arabia
      "IR", // Iran
      "IQ", // Iraq
      "DRK", //Dem. Rep. Korea
      "MM", //Myanmar
      "LP", //Lao PDR
      "CB", //Cambodia
      "NP", //Nepal
      "OM", "OM1", // Oman
      "AF", // Afghanistan
      "AM", // Armenia
      "AZ", "AZ2", // Azerbaijan
      "BH", // Bahrain
      "BT", // Bhutan
      "BN", // Brunei
      "GE", // Georgia
      "IL", // Israel
      "JO", // Jordan
      "KZ", // Kazakhstan
      "KW", // Kuwait
      "KG", // Kyrgyzstan
      "LB", // Lebanon
      "MV", // Maldives
      "MN", // Mongolia
      "PS", // Palestine
      "QA", // Qatar
      "SG", // Singapore
      "SY", // Syria
      "TW", // Taiwan
      "TJ", // Tajikistan
      "TL", // Timor-Leste
      "TR", "TR1", // Turkey (보통 유럽+아시아 혼합으로 보지만 포함 가능)
      "TM", // Turkmenistan
      "AE", // United Arab Emirates
      "UZ", // Uzbekistan
      "YE",  // Yemen
      "LK" // Sri Lanka
    ],
    []
  );
  const europeCountries = useMemo(
    () => [/* 생략: 유럽 국가 코드 배열 */"AL", // Albania
      "AD", // Andorra
      "AM", // Armenia (유럽/아시아 혼합이지만 유럽으로도 포함됨)
      "AT", // Austria
      "BY", // Belarus
      "BE", // Belgium
      "BA", // Bosnia and Herzegovina
      "BG", // Bulgaria
      "HR", // Croatia
      "CY", "CY1", // Cyprus (지리상 아시아지만 정치적으로 유럽 연합)
      "CZ", // Czech Republic
      "DK", "DK1",// Denmark
      "EE", // Estonia
      "FI", // Finland
      "FR", "FR1", // France
      "DE", // Germany
      "GR", "GR1", // Greece
      "HU", // Hungary
      "IS", // Iceland
      "IE", // Ireland
      "IT", "IT1", "IT2", // Italy
      "XK", // Kosovo
      "LV", // Latvia
      "LI", // Liechtenstein
      "LT", // Lithuania
      "LU", // Luxembourg
      "MT", "MT1", // Malta
      "MD", // Moldova
      "MC", // Monaco
      "ME", // Montenegro
      "Mk", // Macedonia
      "NL", // Netherlands
      "MK", // North Macedonia
      "NO", "NO1", "NO2", "NO3", // Norway
      "PL", // Poland
      "PT", // Portugal
      "RO", // Romania
      "RU", "RU1", "RU2","RU3","RU4","RU5","RU6","RU7","RU8","RU9", // Russia
      "SM", // San Marino
      "RS", // Serbia
      "SK", // Slovakia
      "SI", // Slovenia
      "ES", // Spain
      "SE", // Sweden
      "CH", // Switzerland
      "UA", // Ukraine
      "GB", "GB1",// United Kingdom
      "VA",  // Vatican City
      "FEI", "FEI1", "FEI2", "FEI3", "FEI4", "FEI5", "FEI6" //Faeroe Islands
    ],
    []
  );
  const northAmericaCountries = useMemo(
    () => [/* 생략: 북미 국가 코드 배열 */
  "US", "US1", "US2", "US3", "US4", "US5", "US6", "US7", "US8", "US9",// United States
  "CA", "CA1", "CA2", "CA3", "CA4", "CA5", "CA6", "CA7", "CA8", "CA9",
  "CA10", "CA11", "CA12", "CA13", "CA14", "CA15", "CA16", "CA17", "CA18",
  "CA19", "CA20", "CA21", "CA22", "CA23", "CA24", "CA25", "CA26", "CA27",
  "CA28", "CA29", // Canada
  "MX", // Mexico
  "GL", // Greenland
  "GT", // Guatemala
  "CU", // Cuba
  "HT", // Haiti
  "DO", // Dominican Republic
  "HN", // Honduras
  "NI", // Nicaragua
  "SV", // El Salvador
  "CR", // Costa Rica
  "PA", // Panama
  "BS", "BS1", "BS2", "BS3", "BS4", "BS5", "BS6", "BS7", "BS8", "BS9", "BS10",
  "BS11", "BS12", "BS13", "BS14", "BS15", "BS16", "BS17",// Bahamas
  "JM", // Jamaica
  "BZ", // Belize
  "BB", // Barbados
  "BRM", //Bermuda
  //"BUD", //Barbados
  "TT", "TT1",// Trinidad and Tobago
  "TCI", "TCI1", "TCI2",//Turks and Caicos Islands
  "GD", // Grenada
  "GLP", "GLP1", "GLP2",// Guadeloupe
  "LC", // Saint Lucia
  "KN", "KN1",// Saint Kitts and Nevis
  "VC", // Saint Vincent and the Grenadines
  "SBH", // Saint-Barthélemy
  "SMN", //Saint-Martin
  "SMA",//Saint Maarten
  "DM", // Dominica
  "AG", "AG1",// Antigua and Barbuda
  "AW", //Aruba
  "AGA", //Anguilla
  "CAC", //Curaçao
  "CYL", "CYL1", "CYL2",//Cayman ISlands
  "MON", //Montserrat
  "PR", "PR1", "PR2",//Puerto Rico
  "BVI", //British Virgin Islands
  "USV", "USV1", "USV2", //United States Virgin Islands
  "SEN",//St. Eustatius (Netherlands)
  "SBN",//Saba (Netherlands)
  "MQ", //Martinique
    ],
    []
  );
  const africaCountries = useMemo(
    () => [/* 생략: 아프리카 국가 코드 배열 */ "DZ", // Algeria
  "AO", "AO1", // Angola
  "BJ", // Benin
  "BW", // Botswana
  "BF", // Burkina Faso
  "BI", // Burundi
  "CM", // Cameroon
  "CV", "CV1", "CV2", "CV3", "CV4", "CV5", "CV6", "CV7", "CV8", // Cape Verde
  "CF", // Central African Republic
  "CIS", "CIS1", "CIS2", "CIS3", "CIS4", "CIS5", "CIS6",//Canary Islands (Spain)
  "TD", // Chad
  "KM", "KM1", "KM2", // Comoros
  "CD", // Congo (Democratic Republic)
  "CG", // Congo (Republic)
  "CI", // Côte d'Ivoire
  "DJ", // Djibouti
  "EG", // Egypt
  "GQ", // Equatorial Guinea
  "ER", // Eritrea
  "ET", // Ethiopia
  "GA", // Gabon
  "GM", // Gambia
  "GH", // Ghana
  "GN", // Guinea
  "GW", // Guinea-Bissau
  "KE", // Kenya
  "LS", // Lesotho
  "LR", // Liberia
  "LY", // Libya
  "MG", // Madagascar
  "MW", // Malawi
  "ML", // Mali
  "MR", // Mauritania
  "MU", "MU1", // Mauritius
  "MYT",//Mayotte
  "MA", // Morocco
  "MZ", // Mozambique
  "NA", // Namibia
  "NE", // Niger
  "NG", // Nigeria
  "RNN",//Reunion
  "RW", // Rwanda
  "ST", "ST1",// São Tomé and Príncipe
  "SN", // Senegal
  "SC", "SC1", "SC2", // Seychelles
  "SL", // Sierra Leone
  "SO", // Somalia
  "ZA", // South Africa
  "SS", // South Sudan
  "SD", // Sudan
  "SZ", // Eswatini (Swaziland)
  "TZ", // Tanzania
  "TG", // Togo
  "TN", // Tunisia
  "UG", // Uganda
  "EH", // Western Sahara
  "ZM", // Zambia
  "ZW"  // Zimbabwe
    ],
    []
  );
  const oceaniaCountries = useMemo(
    () => [/* 생략: 오세아니아 국가 코드 배열 */"AU", "AU1", // Australia
  "NZ", "NZ1", // New Zealand
  "FJ", "FHJ1", "FJ2", "FJ3", "FJ4", "FJ5", "FJ6", "FJ7", "FJ8", "FJ9", // Fiji
  "PG", "PG1", "PG2", "PG3",// Papua New Guinea
  "SB", "SB1", "SB2", "SB3", "SB4", "SB5", "SB6", "SB7", "SB8", "SB9", "SB10", "SB11", "SB12",
  "SB13", "SB14", "SB15", "SB16", "SB17", "SB18", "SB19", "SB20",
  "SB21", "SB22", "SB23", "SB24", "SB25", "SB26", "SB27", "SB28", "SB29", "SB30",
  "SB31", "SB32", // Solomon Islands
  "VU", "VU1", "VU2", "VU3", "VU4", "VU5", "VU6", "VU7", "VU8", "VU9", "VU10",
  "VU11", "VU12", "VU13", "VU14", "VU15", "VU16", "VU17", // Vanuatu
  "WS", "WS1", "WS2", // Samoa
  "TO", "TO1", "TO2", "TO3", "TO4",// Tonga
  "TV", // Tuvalu
  "KI", // Kiribati
  "FM", "FM1", "FM2", // Micronesia (Federated States of)
  "MH", // Marshall Islands
  "NMH", "NMH1", "NMH2", "NMH3", "NMH4", "NMH5", //Northern Mariana Islands
  "PW", // Palau
  "NR", // Nauru
  "NC", "NC1", "NC2", "NC3", "NC4", "NC5", "NC6", "NC7", // New Caledonia (French territory)
  "PF", "PF1", "PF2", "PF3", "PF4", "PF5", "PF6", "PF7", "PF8", "PF9", "PF10", "PF11", "PF12", "PF13", "PF14", // French Polynesia
  "AS" ,"AS1",// American Samoa
  "GUM" //GUAM
    ],
    []
  );
  const southAmericaCountries = useMemo(
    () => [/* 생략: 남미 국가 코드 배열 */"AR", "AR1", // Argentina
  "BO", // Bolivia
  "BR", // Brazil
  "CL", "CL1", // Chile
  "CO", // Colombia
  "EC", // Ecuador
  "GY", // Guyana
  "PY", // Paraguay
  "PE", // Peru
  "SR", // Suriname
  "UY", // Uruguay
  "VE", // Venezuela
  "GF",  // French Guiana (France overseas)
  "FKI" //Falkland Islands
    ],
    []
  );

  const applyContinentColors = useCallback(() => {
    if (typeof document === "undefined") return;

    const applyFill = (ids, color) => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        el.style.fill = color;
        el.style.cursor = "pointer";

        if (!el.dataset.tooltipBound) {
          el.addEventListener("mouseover", handleMouseOver);
          el.dataset.tooltipBound = "true";
        }
      });
    };

    applyFill(asiaCountries, "#FFD700"); // 아시아: 금색
    applyFill(europeCountries, "#87CEEB"); // 유럽: 하늘색
    applyFill(northAmericaCountries, "#8B4513"); // 북미: 갈색
    applyFill(africaCountries, "#32CD32"); // 아프리카: 연두
    applyFill(oceaniaCountries, "#9370DB"); // 오세아니아: 보라
    applyFill(southAmericaCountries, "#FFA07A"); // 남미: 살몬
  }, [
    handleMouseOver,
    africaCountries,
    asiaCountries,
    europeCountries,
    northAmericaCountries,
    oceaniaCountries,
    southAmericaCountries,
  ]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;

    const useRaf = typeof window.requestAnimationFrame === "function";
    const handleId = useRaf
      ? window.requestAnimationFrame(applyContinentColors)
      : window.setTimeout(applyContinentColors, 0);

    return () => {
      if (useRaf && typeof window.cancelAnimationFrame === "function") {
        window.cancelAnimationFrame(handleId);
      } else {
        clearTimeout(handleId);
      }
      if (typeof document === "undefined") return;
      const allPaths = document.querySelectorAll("path[data-tooltip-bound]");
      allPaths.forEach((path) => {
        path.removeEventListener("mouseover", handleMouseOver);
        delete path.dataset.tooltipBound;
      });
    };
  }, [applyContinentColors, handleMouseOver]);

  useEffect(() => {
    if (typeof window === "undefined") return undefined;
    const unsub = onAuthStateChanged(auth, () => {
      if (typeof window.requestAnimationFrame === "function") {
        window.requestAnimationFrame(applyContinentColors);
      } else {
        window.setTimeout(applyContinentColors, 0);
      }
    });

    return () => unsub();
  }, [applyContinentColors]);

  return (
    <div
      onClick={handleClick}
      style={{
        width: "100%",
        maxWidth: "1400px",
        margin: "0 auto",
        backgroundColor: "white",
        padding: "5rem 16px 0",
        position: "relative",
      }}
      dangerouslySetInnerHTML={{ __html: worldMap }}
    />
  );
}
