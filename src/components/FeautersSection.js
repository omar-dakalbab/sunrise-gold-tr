import Link from "next/link";
import { useTranslation } from "react-i18next";

const features = [
  {
    id: 1,
    title: "Legumes and Grains",
    titleAr: "البقوليات والحبوب",
    titleTr: "Baklagiller ve Tahıllar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#669c35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-wheat"
      >
        <path d="M2 22 16 8" />
        <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
        <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
        <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
        <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
      </svg>
    ),
    link: "/service-details",
  },
  {
    id: 2,
    title: "Canned Goods",
    titleAr: "السلع المعلبة",
    titleTr: "Konserve Ürünler",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#669c35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-pill-bottle"
      >
        <path d="M18 11h-4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h4" />
        <path d="M6 7v13a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7" />
        <rect width="16" height="5" x="4" y="2" rx="1" />
      </svg>
    ),
    link: "/service-details",
  },
  {
    id: 3,
    title: "Oils",
    titleAr: "الزيوت",
    titleTr: "Yağlar",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#669c35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-amphora"
      >
        <path d="M10 2v5.632c0 .424-.272.795-.653.982A6 6 0 0 0 6 14c.006 4 3 7 5 8" />
        <path d="M10 5H8a2 2 0 0 0 0 4h.68" />
        <path d="M14 2v5.632c0 .424.272.795.652.982A6 6 0 0 1 18 14c0 4-3 7-5 8" />
        <path d="M14 5h2a2 2 0 0 1 0 4h-.68" />
        <path d="M18 22H6" />
        <path d="M9 2h6" />
      </svg>
    ),
    link: "/service-details",
  },
  {
    id: 4,
    title: "Essential Food Products",
    titleAr: "المنتجات الغذائية الأساسية",
    titleTr: "Temel Gıda Ürünleri",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#669c35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-coffee"
      >
        <path d="M10 2v2" />
        <path d="M14 2v2" />
        <path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1" />
        <path d="M6 2v2" />
      </svg>
    ),
    link: "/service-details",
  },
  {
    id: 5,
    title: "Tahini and Halva Products",
    titleAr: "منتجات الطحينة والحلاوة",
    titleTr: "Tahin ve Helva Ürünleri",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="48"
        height="48"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#669c35"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="lucide lucide-nut"
      >
        <path d="M12 4V2" />
        <path d="M5 10v4a7.004 7.004 0 0 0 5.277 6.787c.412.104.802.292 1.102.592L12 22l.621-.621c.3-.3.69-.488 1.102-.592A7.003 7.003 0 0 0 19 14v-4" />
        <path d="M12 4C8 4 4.5 6 4 8c-.243.97-.919 1.952-2 3 1.31-.082 1.972-.29 3-1 .54.92.982 1.356 2 2 1.452-.647 1.954-1.098 2.5-2 .595.995 1.151 1.427 2.5 2 1.31-.621 1.862-1.058 2.5-2 .629.977 1.162 1.423 2.5 2 1.209-.548 1.68-.967 2-2 1.032.916 1.683 1.157 3 1-1.297-1.036-1.758-2.03-2-3-.5-2-4-4-8-4Z" />
      </svg>
    ),
    link: "/service-details",
  },
];

export default function FeaturesSection() {
  const { i18n } = useTranslation();
  return (
    <div
      className="mt-30"
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      {features.map((feature, index) => {
        let categoryTitle;
        if (i18n.language === "tr") {
          categoryTitle = feature.titleTr; // Turkish title
        } else if (i18n.language === "ar") {
          categoryTitle = feature.titleAr; // Arabic title
        } else {
          categoryTitle = feature.title; // Default to English
        }
        return (
          <div key={index}>
            <div
              className="about-feature-two"
              style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                margin: 10,
              }}
            >
              <div
                className="icon"
                style={{
                  width: "100%",
                  textAlign: "center",
                  margin: 0,
                  marginBottom: 10,
                }}
              >
                <Link
                  style={{
                    width: "100%",
                  }}
                  href={`/shop-grid?q=${feature.id}`}
                >
                  {feature.icon}
                </Link>
              </div>
              <h4
                style={{
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <Link
                  style={{
                    width: "100%",
                  }}
                  href={`/shop-grid?q=${feature.id}`}
                >
                  {categoryTitle}
                </Link>
              </h4>
            </div>
          </div>
        );
      })}
    </div>
  );
}
