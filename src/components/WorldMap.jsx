import { useCallback, useEffect, useMemo, useRef } from "react";
import worldMap from "../assets/world_clickable_with_names.svg?raw";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";

export default function WorldMap() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const observerRef = useRef(null);

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
        const title = document.createElementNS("http://www.w3.org/2000/svg", "title");
        title.textContent = e.target.getAttribute("name");
        e.target.appendChild(title);
      }
      e.target.style.cursor = "pointer";
    }
  }, []);

  // 대륙별 국가 ID  
  const asiaCountries = useMemo(
    () => ["CN","CN1","JP","JP1","JP2","KR","IN","TH","VN","MY","MY1","ID","ID1","ID2","ID3","ID4","ID5","ID6","ID7","ID8","ID9","ID10","ID11","ID12","PH","PH1","PH2","PH3","PH4","PH5","PH6","PK","BD","SA","IR","IQ","DRK","MM","LP","CB","NP","OM","OM1","AF","AM","AZ","AZ2","BH","BT","BN","GE","IL","JO","KZ","KW","KG","LB","MV","MN","PS","QA","SG","SY","TW","TJ","TL","TR","TR1","TM","AE","UZ","YE","LK"],
    []
  );
  const europeCountries = useMemo(
    () => ["AL","AD","AM","AT","BY","BE","BA","BG","HR","CY","CY1","CZ","DK","DK1","EE","FI","FR","FR1","DE","GR","GR1","HU","IS","IE","IT","IT1","IT2","XK","LV","LI","LT","LU","MT","MT1","MD","MC","ME","Mk","NL","MK","NO","NO1","NO2","NO3","PL","PT","RO","RU","RU1","RU2","RU3","RU4","RU5","RU6","RU7","RU8","RU9","SM","RS","SK","SI","ES","SE","CH","UA","GB","GB1","VA","FEI","FEI1","FEI2","FEI3","FEI4","FEI5","FEI6"],
    []
  );
  const northAmericaCountries = useMemo(
    () => ["US","US1","US2","US3","US4","US5","US6","US7","US8","US9","CA","CA1","CA2","CA3","CA4","CA5","CA6","CA7","CA8","CA9","CA10","CA11","CA12","CA13","CA14","CA15","CA16","CA17","CA18","CA19","CA20","CA21","CA22","CA23","CA24","CA25","CA26","CA27","CA28","CA29","MX","GL","GT","CU","HT","DO","HN","NI","SV","CR","PA","BS","BS1","BS2","BS3","BS4","BS5","BS6","BS7","BS8","BS9","BS10","BS11","BS12","BS13","BS14","BS15","BS16","BS17","JM","BZ","BB","BRM","TT","TT1","TCI","TCI1","TCI2","GD","GLP","GLP1","GLP2","LC","KN","KN1","VC","SBH","SMN","SMA","DM","AG","AG1","AW","AGA","CAC","CYL","CYL1","CYL2","MON","PR","PR1","PR2","BVI","USV","USV1","USV2","SEN","SBN","MQ"],
    []
  );
  const africaCountries = useMemo(
    () => ["DZ","AO","AO1","BJ","BW","BF","BI","CM","CV","CV1","CV2","CV3","CV4","CV5","CV6","CV7","CV8","CF","CIS","CIS1","CIS2","CIS3","CIS4","CIS5","CIS6","TD","KM","KM1","KM2","CD","CG","CI","DJ","EG","GQ","ER","ET","GA","GM","GH","GN","GW","KE","LS","LR","LY","MG","MW","ML","MR","MU","MU1","MYT","MA","MZ","NA","NE","NG","RNN","RW","ST","ST1","SN","SC","SC1","SC2","SL","SO","ZA","SS","SD","SZ","TZ","TG","TN","UG","EH","ZM","ZW"],
    []
  );
  const oceaniaCountries = useMemo(
    () => ["AU","AU1","NZ","NZ1","FJ","FHJ1","FJ2","FJ3","FJ4","FJ5","FJ6","FJ7","FJ8","FJ9","PG","PG1","PG2","PG3","SB","SB1","SB2","SB3","SB4","SB5","SB6","SB7","SB8","SB9","SB10","SB11","SB12","SB13","SB14","SB15","SB16","SB17","SB18","SB19","SB20","SB21","SB22","SB23","SB24","SB25","SB26","SB27","SB28","SB29","SB30","SB31","SB32","VU","VU1","VU2","VU3","VU4","VU5","VU6","VU7","VU8","VU9","VU10","VU11","VU12","VU13","VU14","VU15","VU16","VU17","WS","WS1","WS2","TO","TO1","TO2","TO3","TO4","TV","KI","FM","FM1","FM2","MH","NMH","NMH1","NMH2","NMH3","NMH4","NMH5","PW","NR","NC","NC1","NC2","NC3","NC4","NC5","NC6","NC7","PF","PF1","PF2","PF3","PF4","PF5","PF6","PF7","PF8","PF9","PF10","PF11","PF12","PF13","PF14","AS","AS1","GUM"],
    []
  );
  const southAmericaCountries = useMemo(
    () => ["AR","AR1","BO","BR","CL","CL1","CO","EC","GY","PY","PE","SR","UY","VE","GF","FKI"],
    []
  );
  
  const applyFill = useCallback(
    (ids, color) => {
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (!el) return;

        const svg = el.closest("svg");
        if (svg) {
          svg.style.removeProperty("filter");
          if (getComputedStyle(svg).filter !== "none") {
            svg.style.setProperty("filter", "none", "important");
          }
        }

        el.setAttribute("fill", color);
        el.style.setProperty("fill", color, "important");
        el.style.cursor = "pointer";

        if (!el.dataset.tooltipBound) {
          el.addEventListener("mouseover", handleMouseOver);
          el.dataset.tooltipBound = "true";
        }
      });
    },
    [handleMouseOver]
  );

  const applyContinentColors = useCallback(() => {
    if (typeof document === "undefined") return;
    applyFill(asiaCountries, "#FFD700");
    applyFill(europeCountries, "#87CEEB");
    applyFill(northAmericaCountries, "#8B4513");
    applyFill(africaCountries, "#32CD32");
    applyFill(oceaniaCountries, "#9370DB");
    applyFill(southAmericaCountries, "#FFA07A");
  }, [
    applyFill,
    africaCountries,
    asiaCountries,
    europeCountries,
    northAmericaCountries,
    oceaniaCountries,
    southAmericaCountries,
  ]);

  
  const scheduleRepaint = useCallback(() => {
    
    applyContinentColors();

    
    let rafCount = 0;
    const maxRaf = 6;
    const rafLoop = () => {
      applyContinentColors();
      if (++rafCount < maxRaf) requestAnimationFrame(rafLoop);
    };
    requestAnimationFrame(rafLoop);

    
    setTimeout(applyContinentColors, 200);
    setTimeout(applyContinentColors, 400);
    setTimeout(applyContinentColors, 700);
  }, [applyContinentColors]);

  
  const paintWhenReady = useCallback(() => {
    let tries = 0;
    const maxTries = 10;
    const tick = () => {
      tries += 1;
      const probe = document.getElementById("KR");
      if (probe) {
        scheduleRepaint();
        return;
      }
      if (tries < maxTries) requestAnimationFrame(tick);
      else setTimeout(scheduleRepaint, 0);
    };
    requestAnimationFrame(tick);
  }, [scheduleRepaint]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    
    paintWhenReady();

    
    const unsub = onAuthStateChanged(auth, () => {
      setTimeout(paintWhenReady, 120);
    });

    
    if (containerRef.current && "MutationObserver" in window) {
      observerRef.current = new MutationObserver(() => paintWhenReady());
      observerRef.current.observe(containerRef.current, { childList: true, subtree: true });
    }

    
    const onVis = () => document.visibilityState === "visible" && scheduleRepaint();
    document.addEventListener("visibilitychange", onVis);

    return () => {
      unsub();
      observerRef.current?.disconnect?.();
      document.removeEventListener("visibilitychange", onVis);
      const allPaths = document.querySelectorAll("path[data-tooltip-bound]");
      allPaths.forEach((path) => {
        path.removeEventListener("mouseover", handleMouseOver);
        delete path.dataset.tooltipBound;
      });
    };
  }, [paintWhenReady, scheduleRepaint, handleMouseOver]);

  return (
    <div
      ref={containerRef}
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

